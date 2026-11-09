import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'
import { LanguageProvider } from './i18n/LanguageProvider'

const initialTheme = localStorage.getItem('portfolio-theme') || 'dark'
document.documentElement.setAttribute('data-theme', initialTheme)

const app = (
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
)
const root = document.getElementById('root')!
// Saved preferences can differ from the Spanish, dark build-time snapshot.
const savedLanguage = localStorage.getItem('portfolio-language')
if (root.hasChildNodes() && initialTheme === 'dark' && (!savedLanguage || savedLanguage === 'es')) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
