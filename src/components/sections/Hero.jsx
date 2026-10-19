import { useEffect, useState } from 'react'
import { ArrowRight, MoveRight } from 'lucide-react'
import { gsap, prefersReducedMotion, useGsapContext } from '../../lib/gsap'
import { site, services } from '../../data/site'
import Button from '../ui/Button'

const rotations = [
  'voltar a treinar',
  'viver sem dor',
  'prevenir lesões',
  'recuperar a performance',
]

function RotatingLine() {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const id = setInterval(() => setI((v) => (v + 1) % rotations.length), 2800)
    return () => clearInterval(id)
  }, [])

  const longest = rotations.reduce((a, b) => (a.length >= b.length ? a : b))

  return (
    <span className="relative inline-block overflow-hidden whitespace-nowrap align-top">
      <span className="invisible" aria-hidden="true">
        {longest}
      </span>
      <span
        key={i}
        className="animate-roll-in absolute inset-y-0 left-0 text-sport-600"
      >
        {rotations[i]}
        <span aria-hidden="true">.</span>
      </span>
    </span>
  )
}

function MarqueeStrip() {
  const items = services.map((s) => s.name)
  const strip = [...items, `WhatsApp ${site.whatsappDisplay}`]

  return (
    <div className="marquee relative overflow-hidden border-y border-white/10 bg-ink-950 py-4" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex items-center">
            {strip.map((label, i) => (
              <li
                key={`${copy}-${label}-${i}`}
                className="flex items-center gap-6 px-6 font-display text-lg font-semibold uppercase tracking-[0.08em] text-white/85"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-sport-400" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const scope = useGsapContext(() => {
    if (prefersReducedMotion()) return
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } })
    tl.fromTo('[data-hero-eyebrow]', { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0 })
      .fromTo(
        '[data-hero-title] > *',
        { autoAlpha: 0, y: 36 },
        { autoAlpha: 1, y: 0, stagger: 0.12 },
        '-=0.5',
      )
      .fromTo('[data-hero-copy]', { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, stagger: 0.12 }, '-=0.55')
      .fromTo(
        '[data-hero-cta] > *',
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, stagger: 0.1 },
        '-=0.5',
      )
      .fromTo(
        '[data-hero-trust]',
        { autoAlpha: 0 },
        { autoAlpha: 1, stagger: 0.08 },
        '-=0.5',
      )
      .fromTo(
        '[data-hero-media]',
        { autoAlpha: 0, xPercent: 6 },
        { autoAlpha: 1, xPercent: 0, duration: 1.1 },
        0.25,
      )
      .fromTo('[data-hero-strip]', { autoAlpha: 0 }, { autoAlpha: 1 }, '-=0.5')

    // Parallax sutil na foto durante o scroll
    gsap.fromTo(
      '[data-hero-parallax]',
      { yPercent: -3 },
      {
        yPercent: 3,
        ease: 'none',
        scrollTrigger: {
          trigger: scope.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      },
    )
  }, [])

  return (
    <section ref={scope} className="relative bg-paper pt-[72px] md:pt-[84px]">
      <div className="border-b border-ink-900/10">
        <div className="container grid items-stretch gap-10 lg:grid-cols-12 lg:gap-0">
          {/* Cópia */}
          <div className="flex flex-col justify-center py-14 md:py-20 lg:col-span-7 lg:py-28 lg:pr-16">
            <p
              data-hero-eyebrow
              className="eyebrow mb-6 text-ink-500"
            >
              <span className="font-display text-sm font-semibold tabular-nums tracking-[0.1em] text-sport-600">
                01
              </span>
              <span className="h-px w-10 bg-ink-900/25" aria-hidden="true" />
              Fisioterapia Esportiva em Maringá
            </p>

            <h1
              data-hero-title
              className="display text-[3.4rem] text-ink-950 sm:text-7xl lg:text-8xl"
            >
              <span className="block">Reabilitação</span>
              <span className="accent-word block text-4xl leading-none text-sport-600 sm:text-5xl lg:text-6xl">
                responsável,
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl">
                do diagnóstico <span className="accent-word">ao</span> jogo
              </span>
            </h1>

            <p
              data-hero-copy
              className="mt-7 max-w-xl text-xl font-medium leading-snug text-ink-800 sm:text-2xl"
            >
              Um time completo para te ajudar a <RotatingLine />
            </p>

            <p data-hero-copy className="mt-4 max-w-xl text-base leading-relaxed text-ink-500">
              A melhor atividade física é aquela que você consegue realizar com regularidade. Não
              deixe que a lesão atrapalhe seus treinos.
            </p>

            <div data-hero-cta className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={site.whatsappHref} target="_blank" rel="noopener" size="lg">
                Agende um horário
              </Button>
              <Button to="/servico" variant="outline" icon={ArrowRight} size="lg">
                Conheça as áreas
              </Button>
            </div>

            <div
              data-hero-trust
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink-900/10 pt-6 text-xs font-medium uppercase tracking-[0.18em] text-ink-500"
            >
              <span>Desde {site.founded}</span>
              <span aria-hidden="true" className="h-1 w-1 bg-ink-300" />
              <span>+{site.professionals} profissionais</span>
              <span aria-hidden="true" className="h-1 w-1 bg-ink-300" />
              <span>Atendimento 1:1</span>
            </div>
          </div>

          {/* Foto editorial com legenda */}
          <div className="lg:col-span-5">
            <figure data-hero-media className="flex h-full flex-col">
              <div className="relative min-h-[380px] flex-1 overflow-hidden lg:min-h-[560px]">
                <img
                  src="/assets/hero/hero-athlete.webp"
                  alt="Atleta correndo na esteira durante sessão de reabilitação no Grupo SportFisio"
                  width="670"
                  height="913"
                  decoding="async"
                  fetchpriority="high"
                  data-hero-parallax
                  className="absolute left-0 top-[-13%] h-[126%] w-full object-cover"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-4 border-t border-ink-900/10 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                <span className="inline-flex items-center gap-2">
                  <MoveRight className="h-3.5 w-3.5 text-sport-600" aria-hidden="true" />
                  Sessão de reabilitação — Clínica Av. Nóbrega
                </span>
                <span aria-hidden="true" className="hidden font-display text-sm font-semibold tracking-[0.1em] text-ink-300 sm:block">
                  SportFisio
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div data-hero-strip>
        <MarqueeStrip />
      </div>
    </section>
  )
}
