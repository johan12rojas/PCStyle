import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')
const ssrOutDir = path.resolve(rootDir, '.ssr-temp')

async function prerender() {
  try {
    await build({
      root: rootDir,
      logLevel: 'warn',
      build: {
        ssr: path.resolve(rootDir, 'src/entry-server.jsx'),
        outDir: ssrOutDir,
        emptyOutDir: true,
        rollupOptions: {
          output: {
            format: 'es',
            entryFileNames: 'entry-server.mjs',
          },
        },
      },
    })

    const serverEntryPath = path.resolve(ssrOutDir, 'entry-server.mjs')
    const { render } = await import(pathToFileURL(serverEntryPath).href)
    const appHtml = render()

    const indexHtmlPath = path.resolve(distDir, 'index.html')
    const template = fs.readFileSync(indexHtmlPath, 'utf-8')
    const finalHtml = template.replace('<!--app-html-->', () => appHtml)

    fs.writeFileSync(indexHtmlPath, finalHtml, 'utf-8')
    console.log(
      `[prerender] HTML estático generado en dist/index.html (${Buffer.byteLength(appHtml, 'utf-8')} bytes de contenido)`
    )
  } finally {
    if (fs.existsSync(ssrOutDir)) {
      fs.rmSync(ssrOutDir, { recursive: true, force: true })
    }
  }
}

prerender().catch((err) => {
  console.error('[prerender] Error al pre-renderizar:', err)
  process.exit(1)
})
