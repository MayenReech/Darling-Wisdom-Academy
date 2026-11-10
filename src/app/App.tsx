import { BrowserRouter } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { AppRouter } from './router'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <Header />

        <main id="main-content" className="site-main">
          <AppRouter />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
