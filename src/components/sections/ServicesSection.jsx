import { useEffect, useRef } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { services } from '../../data/site'

// Índice editorial de áreas — linhas full-width com hover invertido
// e preview de imagem que segue o cursor (desktop).
export default function ServicesSection({
  eyebrow = 'Áreas que atuamos',
  num = '03',
  title = <>Tratamentos que devolvem <span className="accent-word text-sport-600">movimento</span></>,
  description = 'Atuamos na prevenção e reabilitação para que você volte às suas atividades o mais breve possível. Na avaliação fisioterapêutica analisamos e encaminhamos você para o protocolo que melhor encaixa com a sua necessidade.',
  limit,
}) {
  const list = limit ? services.slice(0, limit) : services
  const sectionRef = useRef(null)
  const previewRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const preview = previewRef.current
    if (!section || !preview) return
    if (prefersReducedMotion()) return
    if (!window.matchMedia('(hover: hover) and (min-width: 1024px)').matches) return

    const img = preview.querySelector('img')
    const rows = section.querySelectorAll('[data-service-row]')
    const xTo = gsap.quickTo(preview, 'x', { duration: 0.5, ease: 'power3' })
    const yTo = gsap.quickTo(preview, 'y', { duration: 0.5, ease: 'power3' })

    const track = (e) => {
      xTo(e.clientX + 32)
      yTo(e.clientY - 112)
    }

    const show = (e) => {
      const { img: src, alt } = e.currentTarget.dataset
      if (!src) return
      if (img.getAttribute('src') !== src) img.setAttribute('src', src)
      img.setAttribute('alt', alt || '')
      gsap.to(preview, { autoAlpha: 1, scale: 1, duration: 0.35, ease: 'power3.out', overwrite: 'auto' })
      gsap.fromTo(img, { scale: 1.18 }, { scale: 1, duration: 0.7, ease: 'power3.out', overwrite: 'auto' })
    }

    const hide = () => {
      gsap.to(preview, { autoAlpha: 0, scale: 0.92, duration: 0.25, ease: 'power2.out', overwrite: 'auto' })
    }

    section.addEventListener('mousemove', track)
    rows.forEach((row) => {
      row.addEventListener('mouseenter', show)
      row.addEventListener('mouseleave', hide)
    })

    return () => {
      section.removeEventListener('mousemove', track)
      rows.forEach((row) => {
        row.removeEventListener('mouseenter', show)
        row.removeEventListener('mouseleave', hide)
      })
    }
  }, [])

  return (
    <section id="areas" ref={sectionRef} className="section scroll-mt-24 bg-white">
      {/* Preview flutuante (aparece no hover em desktop) */}
      <div
        ref={previewRef}
        data-service-preview
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-30 hidden aspect-[4/3] w-60 overflow-hidden bg-paper opacity-0 shadow-lift lg:block"
      >
        <img
          src={list[0]?.image}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={eyebrow} num={num} title={title} description={description} />
          {limit && (
            <Reveal className="shrink-0">
              <Button to="/servico" variant="outline" icon={ArrowRight}>
                Ver todas as áreas
              </Button>
            </Reveal>
          )}
        </div>

        <Reveal
          stagger
          className="mt-14 divide-y divide-ink-900/10 border-y border-ink-900/10"
        >
          {list.map((s, i) => (
            <Link
              key={s.id}
              data-rv
              data-service-row
              data-img={s.image}
              data-alt={s.name}
              to={`/servico/${s.id}/${s.slug}`}
              aria-label={`Ver mais sobre ${s.name}`}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 px-2 py-6 transition-colors duration-300 hover:bg-ink-950 sm:gap-x-8 md:grid-cols-[64px_1fr_minmax(0,26rem)_auto] md:px-4 lg:gap-x-10"
            >
              <span className="font-display text-lg font-semibold tabular-nums tracking-[0.08em] text-ink-300 transition-colors duration-300 group-hover:text-sport-400 md:text-xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0">
                <span className="display block whitespace-nowrap text-2xl text-ink-950 transition-colors duration-300 group-hover:text-white sm:text-3xl md:text-4xl">
                  {s.name}
                </span>
                {s.tagline && (
                  <span className="mt-1 block truncate text-xs font-medium uppercase tracking-[0.18em] text-ink-500 transition-colors duration-300 group-hover:text-paper-dark md:mt-2">
                    {s.tagline}
                  </span>
                )}
              </span>
              {s.summary && (
                <span className="hidden truncate pr-4 text-sm leading-relaxed text-ink-500 transition-colors duration-300 group-hover:text-ink-200/80 md:block">
                  {s.summary}
                </span>
              )}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink-900/15 text-ink-800 transition-all duration-300 group-hover:rotate-90 group-hover:border-sport-400 group-hover:bg-sport-400 group-hover:text-ink-950 sm:h-12 sm:w-12">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
