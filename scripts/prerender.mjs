import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'
import { BLOG_POSTS } from '../src/data/blogPosts.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')
const ssrOutDir = path.resolve(rootDir, '.ssr-temp')
const SITE_URL = 'https://pcstyle.com.co'

function escapeHtmlAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function replaceMetaByName(html, name, content) {
  const regex = new RegExp(
    `(<meta\\s+[^>]*name="${name}"[^>]*content=")([^"]*)("[^>]*>)`,
    'i'
  )
  return html.replace(regex, `$1${escapeHtmlAttr(content)}$3`)
}

function replaceMetaByProperty(html, property, content) {
  const regex = new RegExp(
    `(<meta\\s+[^>]*property="${property}"[^>]*content=")([^"]*)("[^>]*>)`,
    'i'
  )
  return html.replace(regex, `$1${escapeHtmlAttr(content)}$3`)
}

function buildPageHtml(template, appHtml, meta) {
  let html = template

  if (meta) {
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtmlAttr(meta.title)}</title>`)
    html = replaceMetaByName(html, 'description', meta.description)
    if (meta.keywords) {
      html = replaceMetaByName(html, 'keywords', meta.keywords)
    }
    html = html.replace(
      /(<link\s+rel="canonical"\s+href=")([^"]*)("[^>]*>)/i,
      `$1${escapeHtmlAttr(meta.canonical)}$3`
    )
    html = replaceMetaByProperty(html, 'og:type', meta.ogType || 'website')
    html = replaceMetaByProperty(html, 'og:title', meta.title)
    html = replaceMetaByProperty(html, 'og:description', meta.description)
    html = replaceMetaByProperty(html, 'og:url', meta.canonical)
    if (meta.image) {
      html = replaceMetaByProperty(html, 'og:image', meta.image)
      html = replaceMetaByName(html, 'twitter:image', meta.image)
    }
    if (meta.imageAlt) {
      html = replaceMetaByProperty(html, 'og:image:alt', meta.imageAlt)
      html = replaceMetaByName(html, 'twitter:image:alt', meta.imageAlt)
    }
    html = replaceMetaByName(html, 'twitter:title', meta.title)
    html = replaceMetaByName(html, 'twitter:description', meta.description)

    if (meta.jsonLd) {
      const jsonString = JSON.stringify(meta.jsonLd, null, 2)
      html = html.replace(
        /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
        `<script type="application/ld+json">\n${jsonString}\n    </script>`
      )
    }
  }

  return html.replace('<!--app-html-->', () => appHtml)
}

function createBlogIndexJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${SITE_URL}/blog#blog`,
        url: `${SITE_URL}/blog`,
        name: 'Blog Técnico PCStyle',
        description:
          'Guías prácticas de servicio técnico, reparación de computadores y portátiles, recuperación de datos y creación de páginas web con SEO en Cúcuta y Colombia.',
        inLanguage: 'es-CO',
        publisher: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'PCStyle',
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/IMG/pcstyle.png`,
          },
        },
        blogPost: BLOG_POSTS.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: `${SITE_URL}/blog/${post.slug}`,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          image: `${SITE_URL}${post.coverImage}`,
          author: {
            '@type': 'Person',
            name: post.author.name,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog Técnico',
            item: `${SITE_URL}/blog`,
          },
        ],
      },
    ],
  }
}

function createBlogPostJsonLd(post) {
  const canonical = `${SITE_URL}/blog/${post.slug}`
  const graph = [
    {
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonical,
      },
      headline: post.title,
      description: post.metaDescription,
      image: [`${SITE_URL}${post.coverImage}`],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      inLanguage: 'es-CO',
      articleSection: post.category,
      keywords: post.keywords,
      author: {
        '@type': 'Person',
        name: post.author.name,
        jobTitle: post.author.role,
      },
      publisher: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'PCStyle',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/IMG/pcstyle.png`,
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog Técnico',
          item: `${SITE_URL}/blog`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: canonical,
        },
      ],
    },
  ]

  if (post.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: post.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

function generateSitemapXml() {
  const latestPostDate = BLOG_POSTS.reduce(
    (latest, post) => (post.updatedAt > latest ? post.updatedAt : latest),
    '2026-11-22'
  )

  const homeImages = [
    {
      loc: `${SITE_URL}/IMG/pcstyle.png`,
      title: 'PCStyle - El Mejor Servicio Técnico de Computadores en Cúcuta y la Región',
    },
    {
      loc: `${SITE_URL}/IMG/i7.webp`,
      title: 'Mantenimiento y reparación profesional de computadores en Cúcuta y Norte de Santander',
    },
    {
      loc: `${SITE_URL}/IMG/ensamblaje.webp`,
      title: 'Ensamblaje de computadores personalizados en Cúcuta y la región - PCStyle',
    },
    {
      loc: `${SITE_URL}/IMG/reparacion_mother.webp`,
      title: 'Reparación electrónica de motherboard y hardware en Cúcuta y Norte de Santander',
    },
    {
      loc: `${SITE_URL}/IMG/web-plan-corporativo.jpg`,
      title: 'Creación de páginas web corporativas con posicionamiento SEO en Cúcuta y la región',
    },
    {
      loc: `${SITE_URL}/IMG/web-plan-landing.jpg`,
      title: 'Creación de landing pages profesionales con SEO en Cúcuta y Norte de Santander',
    },
    {
      loc: `${SITE_URL}/IMG/web-plan-medida.jpg`,
      title: 'Desarrollo y creación de páginas web a medida en Cúcuta y la región - PCStyle',
    },
  ]

  const homeImagesXml = homeImages
    .map(
      (img) => `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
    </image:image>`
    )
    .join('\n')

  const blogUrlsXml = BLOG_POSTS.map(
    (post) => `  <url>
    <loc>${escapeXml(`${SITE_URL}/blog/${post.slug}`)}</loc>
    <lastmod>${escapeXml(post.updatedAt)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${escapeXml(`${SITE_URL}${post.coverImage}`)}</image:loc>
      <image:title>${escapeXml(post.coverAlt)}</image:title>
    </image:image>
  </url>`
  ).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${escapeXml(latestPostDate)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
${homeImagesXml}
  </url>
  <url>
    <loc>${SITE_URL}/blog</loc>
    <lastmod>${escapeXml(latestPostDate)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
${blogUrlsXml}
</urlset>
`
}

function writeRouteHtml(relativeOutputPath, html) {
  const fullPath = path.resolve(distDir, relativeOutputPath)
  fs.mkdirSync(path.dirname(fullPath), { recursive: true })
  fs.writeFileSync(fullPath, html, 'utf-8')
}

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

    const indexHtmlPath = path.resolve(distDir, 'index.html')
    const template = fs.readFileSync(indexHtmlPath, 'utf-8')

    // 1. Home (/)
    const homeHtml = render('/')
    writeRouteHtml('index.html', buildPageHtml(template, homeHtml, null))
    console.log(
      `[prerender] / -> dist/index.html (${Buffer.byteLength(homeHtml, 'utf-8')} bytes)`
    )

    // 2. Blog Index (/blog)
    const blogListHtml = render('/blog')
    writeRouteHtml(
      'blog/index.html',
      buildPageHtml(template, blogListHtml, {
        title: 'Blog Técnico PCStyle | Reparación de PC, Mantenimiento y Diseño Web',
        description:
          'Guías prácticas de mantenimiento de computadores, reparación de portátiles, actualización SSD/RAM, recuperación de datos y creación de páginas web con SEO en Cúcuta.',
        keywords:
          'blog servicio técnico computadores Cúcuta, guías reparación de PC, mantenimiento portátiles, recuperación de datos, crear página web con SEO Colombia',
        canonical: `${SITE_URL}/blog`,
        ogType: 'website',
        image: `${SITE_URL}/IMG/i7.webp`,
        imageAlt: 'Blog Técnico de PCStyle - Servicio técnico de computadores y desarrollo web',
        jsonLd: createBlogIndexJsonLd(),
      })
    )
    console.log(
      `[prerender] /blog -> dist/blog/index.html (${Buffer.byteLength(blogListHtml, 'utf-8')} bytes)`
    )

    // 3. Blog Posts (/blog/<slug>)
    for (const post of BLOG_POSTS) {
      const route = `/blog/${post.slug}`
      const postHtml = render(route)
      writeRouteHtml(
        `blog/${post.slug}/index.html`,
        buildPageHtml(template, postHtml, {
          title: post.metaTitle || `${post.title} | PCStyle`,
          description: post.metaDescription,
          keywords: post.keywords,
          canonical: `${SITE_URL}${route}`,
          ogType: 'article',
          image: `${SITE_URL}${post.coverImage}`,
          imageAlt: post.coverAlt,
          jsonLd: createBlogPostJsonLd(post),
        })
      )
      console.log(
        `[prerender] ${route} -> dist/blog/${post.slug}/index.html (${Buffer.byteLength(postHtml, 'utf-8')} bytes)`
      )
    }

    // 4. Sincronizar sitemap.xml en dist/ y public/
    const sitemapXml = generateSitemapXml()
    fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf-8')
    fs.writeFileSync(path.resolve(rootDir, 'public/sitemap.xml'), sitemapXml, 'utf-8')
    console.log(
      `[prerender] sitemap.xml actualizado con ${2 + BLOG_POSTS.length} URLs indexables`
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
