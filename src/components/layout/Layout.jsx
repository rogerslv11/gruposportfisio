import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import ScrollToTop from './ScrollToTop'

// Outlet remontado por rota, com fade-up — respeita reduced-motion via CSS
function AnimOutlet() {
  const { pathname } = useLocation()
  return (
    <div key={pathname} className="animate-fade-up">
      <Outlet />
    </div>
  )
}

// Transição suave a cada troca de rota
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo" className="flex-1">
        <AnimOutlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
