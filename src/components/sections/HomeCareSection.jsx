import { Check, Instagram, MoveRight } from 'lucide-react'
import Reveal from '../ui/Reveal'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { services, site, homeCareHighlights } from '../../data/site'

const homeCare = services.find((s) => s.slug === 'home_care')

// Faixa full-bleed com fotografia real + overlay navy.
export default function HomeCareSection() {
  if (!homeCare) return null

  return (
    <section id="home-care" className="relative scroll-mt-24 overflow-hidden bg-ink-950">
      {/* Word fantasma decorativo */}
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -top-4 right-0 select-none whitespace-nowrap font-display text-[10rem] font-bold uppercase leading-none"
      >
        Home Care
      </span>

      <Container className="relative">
        <div className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal stagger>
              <p data-rv className="eyebrow mb-5 text-paper-dark">
                <span className="font-display text-sm font-semibold tabular-nums tracking-[0.1em] text-sport-300">
                  06
                </span>
                <span className="h-px w-10 bg-white/25" aria-hidden="true" />
                SportFisio Home Care
              </p>
              <h2
                data-rv
                className="display text-4xl text-white sm:text-5xl md:text-6xl"
              >
                Você não precisa sair de casa,{' '}
                <span className="accent-word text-sport-300">nós vamos</span> até você
              </h2>
              <p data-rv className="mt-6 max-w-xl text-base leading-relaxed text-ink-100/80">
                {homeCare.description}
              </p>

              {/* Figura do serviço quando visível em telas menores */}
              <div data-rv className="mt-10 lg:hidden">
                <img
                  src={homeCare.image}
                  alt="Profissional do SportFisio Home Care atendendo paciente em domicílio"
                  loading="lazy"
                  decoding="async"
                  className="h-[300px] w-full object-cover"
                />
              </div>

              <ul data-rv className="mt-10 divide-y divide-white/15 border-y border-white/15">
                {homeCareHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-4 text-ink-100">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-sport-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div data-rv className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener"
                  size="lg"
                >
                  Agendar Home Care
                </Button>
                <a
                  href={`https://instagram.com/${site.homeCareInstagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 px-2 py-3 text-sm font-semibold text-ink-100/80 transition-colors hover:text-white"
                >
                  <Instagram className="h-4 w-4 text-sport-300" aria-hidden="true" />
                  {site.homeCareInstagram}
                  <MoveRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Figura sticky do serviço em desktop */}
          <div className="hidden lg:col-span-6 lg:block">
            <Reveal>
              <figure data-rv>
                <img
                  src={homeCare.image}
                  alt="Profissional do SportFisio Home Care atendendo paciente em domicílio"
                  loading="lazy"
                  decoding="async"
                  className="h-[460px] w-full object-cover"
                />
                <figcaption className="flex items-center justify-between gap-4 border-t border-white/15 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ink-100/70">
                  <span>Atendimento em domicílio</span>
                  <span>Horários flexíveis</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
