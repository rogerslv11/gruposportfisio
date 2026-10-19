import { Home as HomeIcon, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { nav } from '../data/site'

export default function NotFound() {
  usePageMeta({
    title: 'Página não encontrada | Grupo SportFisio',
    description: 'A página que você procura não foi encontrada.',
  })

  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden border-b border-ink-900/10 bg-paper pt-[72px] md:pt-[84px]">
      {/* 404 fantasma gigante */}
      <span
        aria-hidden="true"
        className="text-outline-dark pointer-events-none absolute -right-6 bottom-0 select-none font-display text-[16rem] font-bold leading-none sm:text-[22rem]"
      >
        404
      </span>

      <Container className="relative py-20">
        <p className="eyebrow text-ink-500">
          <span className="h-px w-10 bg-ink-900/25" aria-hidden="true" />
          Erro 404
        </p>
        <h1 className="display mt-6 text-5xl text-ink-950 sm:text-6xl md:text-7xl">
          Página{' '}
          <span className="accent-word text-sport-600">não encontrada</span>
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
          O endereço que você acessou não existe ou foi movido. Use os links abaixo para continuar.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button to="/" icon={HomeIcon} iconPosition="left" size="lg">
            Voltar para a página inicial
          </Button>
        </div>

        <ul className="mt-12 flex flex-wrap gap-2.5">
          {nav.slice(1).map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="group inline-flex items-center gap-2 border border-ink-900/15 px-4 py-2.5 text-sm text-ink-600 transition-colors duration-300 hover:border-ink-950 hover:bg-ink-950 hover:text-white"
              >
                {item.label}
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
