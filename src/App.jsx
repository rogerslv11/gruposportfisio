import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ScrollTrigger } from './lib/gsap'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Equipe from './pages/Equipe'
import Servicos from './pages/Servicos'
import ServicoDetalhe from './pages/ServicoDetalhe'
import Estrutura from './pages/Estrutura'
import Cursos from './pages/Cursos'
import Contato from './pages/Contato'
import NotFound from './pages/NotFound'

export default function App() {
  // Keep scroll-trigger positions accurate as images/fonts settle.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const t = setTimeout(refresh, 700)
    return () => {
      window.removeEventListener('load', refresh)
      clearTimeout(t)
    }
  }, [])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/servico" element={<Servicos />} />
        <Route path="/servico/:id/:slug" element={<ServicoDetalhe />} />
        <Route path="/estrutura" element={<Estrutura />} />
        <Route path="/curso" element={<Cursos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
