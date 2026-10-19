import { CalendarCheck, Phone, ShieldCheck, Users } from 'lucide-react'
import { site } from '../../data/site'
import { gsap, prefersReducedMotion, useGsapContext } from '../../lib/gsap'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import Container from '../ui/Container'

// Faixa final escura — full-bleed, display gigante, sem gradientes nem blobs.
export default function CtaBand({
  title = 'Pronto para voltar a treinar?',
  titleAccent = 'sem dor',
  description = 'Agende sua avaliação com o Grupo SportFisio e receba um protocolo de reabilitação feito para você.',
}) {
  const scope = useGsapContext(() => {
    if (prefersReducedMotion()) return
    gsap.to('[data-ghost-drift]', {
      xPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: scope.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])
  return (
    <section ref={scope} className="relative overflow-hidden bg-ink-950 text-white">
      {/* Ghost word decorativo */}
      <span
        data-ghost-drift
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -bottom-4 left-0 select-none whitespace-nowrap font-display text-[9rem] font-bold uppercase leading-none"
      >
        SportFisio
      </span>

      <Container className="relative">
        <div className="grid gap-10 pb-24 pt-20 md:pb-28 md:pt-24 lg:grid-cols-12">
          <Reveal stagger className="lg:col-span-7">
            <p data-rv className="eyebrow mb-6 text-paper-dark">
              <span className="h-px w-10 bg-white/25" aria-hidden="true" />
              Agende sua avaliação
            </p>
            <h2 data-rv className="display text-5xl sm:text-6xl md:text-7xl">
              {title}{' '}
              <span className="accent-word text-sport-400">{titleAccent}</span>
            </h2>
            <p data-rv className="mt-6 max-w-xl text-base leading-relaxed text-ink-100/75 md:text-lg">
              {description}
            </p>

            <ul data-rv className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-100/70">
              <li className="inline-flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-sport-400" aria-hidden="true" />
                Reabilitação responsável
              </li>
              <li className="inline-flex items-center gap-2.5">
                <Users className="h-4 w-4 text-sport-400" aria-hidden="true" />
                {site.professionals} profissionais
              </li>
            </ul>
          </Reveal>

          <Reveal className="flex flex-col gap-4 justify-self-start sm:flex-row sm:items-start lg:col-span-5 lg:justify-end">
            <div data-rv className="flex w-full flex-col gap-3 sm:w-auto">
              <Button
                href={site.whatsappHref}
                target="_blank"
                rel="noopener"
                size="lg"
                className="w-full sm:w-auto"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Agendar horário
              </Button>
              <Button
                href={site.phoneHref}
                variant="outlineLight"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {site.phoneDisplay}
              </Button>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-100/60">
                Av. Nóbrega, 1084 · Zona 04 · Maringá
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
