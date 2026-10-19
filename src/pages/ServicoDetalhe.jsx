import { useParams, Link } from 'react-router-dom'
import { Check, ArrowLeft, ArrowRight, CalendarCheck, Phone, MoveRight } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import ServiceCard from '../components/ui/ServiceCard'
import SectionHeading from '../components/ui/SectionHeading'
import CtaBand from '../components/sections/CtaBand'
import { services, site } from '../data/site'

export default function ServicoDetalhe() {
  const { id, slug } = useParams()
  const service = services.find((s) => String(s.id) === String(id) && s.slug === slug)

  usePageMeta({
    title: service
      ? `${service.name} | Grupo SportFisio — Fisioterapia Esportiva`
      : 'Áreas que atuamos | Grupo SportFisio',
    description: service?.summary,
  })

  if (!service) {
    return (
      <section className="section bg-paper pt-[140px] text-center">
        <Container>
          <p className="eyebrow mb-4 justify-center text-ink-500">Conteúdo não encontrado</p>
          <h1 className="display mt-4 text-4xl text-ink-950">Não encontramos esse tratamento</h1>
          <p className="mx-auto mt-4 max-w-md text-ink-500">
            O conteúdo pode ter sido movido. Veja todas as áreas que atuamos.
          </p>
          <Button to="/servico" className="mt-8" icon={ArrowRight}>
            Ver todas as áreas
          </Button>
        </Container>
      </section>
    )
  }

  const others = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={service.tagline || 'Áreas que atuamos'}
        num={service.id > 9 ? String(service.id) : `0${service.id}`}
        title={service.name}
        description={service.summary}
        breadcrumb={[
          { label: 'Áreas que atuamos', to: '/servico' },
          { label: service.name },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            href={site.whatsappHref}
            target="_blank"
            rel="noopener"
            icon={CalendarCheck}
            size="lg"
          >
            Agendar avaliação
          </Button>
          <Button to="/servico" variant="outline" icon={ArrowLeft} iconPosition="left" size="lg">
            Todas as áreas
          </Button>
        </div>
      </PageHero>

      <section className="section bg-paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Figura sticky */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <figure data-rv>
                    <img
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                      decoding="async"
                      className="aspect-square w-full object-cover"
                    />
                    {service.tagline && (
                      <figcaption className="flex items-center gap-2 border-b border-ink-900/10 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                        <MoveRight className="h-3.5 w-3.5 text-sport-600" aria-hidden="true" />
                        {service.tagline}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>

                <Reveal className="mt-6">
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center justify-center gap-3 border border-ink-900/15 px-5 py-4 text-xs font-display font-semibold uppercase tracking-[0.14em] text-ink-900 transition-colors duration-300 hover:border-ink-950 hover:bg-ink-950 hover:text-white"
                  >
                    <CalendarCheck className="h-4 w-4 text-sport-600 transition-colors group-hover:text-sport-400" aria-hidden="true" />
                    Agendar avaliação pelo WhatsApp
                  </a>
                </Reveal>
              </div>
            </div>

            {/* Texto editorial */}
            <div className="lg:col-span-7">
              <Reveal stagger>
                <p data-rv className="eyebrow mb-5 text-ink-500">
                  <span className="h-px w-10 bg-ink-900/25" aria-hidden="true" />
                  Sobre o tratamento
                </p>
                <h2 data-rv className="display text-4xl text-ink-950 sm:text-5xl">
                  O que é{' '}
                  <span className="accent-word text-sport-600">{service.name}?</span>
                </h2>
                <p data-rv className="mt-6 text-base leading-relaxed text-ink-600 md:text-lg">
                  {service.description}
                </p>

                {service.bullets?.length > 0 && (
                  <ul
                    data-rv
                    className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10"
                  >
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-4 py-3.5 text-sm text-ink-700">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-sport-600" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                <div data-rv className="mt-10 flex flex-wrap gap-3">
                  <Button
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener"
                    icon={ArrowRight}
                  >
                    Agendar avaliação
                  </Button>
                  <Button href={site.phoneHref} variant="outline" icon={Phone}>
                    {site.phoneDisplay}
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {service.techBody?.length > 0 && (
        <section className="border-y border-ink-900/10 bg-white">
          <Container className="section-tight">
            <Reveal stagger className="mx-auto max-w-3xl">
              <p data-rv className="eyebrow mb-5 text-ink-500">
                <span className="h-px w-10 bg-ink-900/25" aria-hidden="true" />
                Informações técnicas
              </p>
              <h2 data-rv className="display text-3xl text-ink-950 sm:text-4xl">
                {service.techTitle}
              </h2>
              <div data-rv className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
                {service.techBody.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="section bg-paper">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-ink-900/10 pt-8">
            <SectionHeading eyebrow="Outras áreas" title="Continue explorando" />
            <Link
              to="/servico"
              className="link-underline hidden shrink-0 items-center gap-1.5 pb-1 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-900 hover:text-sport-700 sm:inline-flex"
            >
              Ver todas <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <Reveal stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <div key={s.id} data-rv className="h-full">
                <ServiceCard service={s} />
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
