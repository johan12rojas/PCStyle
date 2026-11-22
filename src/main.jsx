import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// createRoot evita desajustes de hidratación con Framer Motion (useScroll/whileInView)
// mientras dist/index.html conserva el HTML pre-renderizado completo para SEO y primer pintado.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
