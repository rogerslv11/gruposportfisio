import { ArrowRight, MapPin } from 'lucide-react'
import { gsap, prefersReducedMotion, useGsapContext } from '../../lib/gsap'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { structure, site } from '../../data/site'

const layout = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-4 row-span-1',
]

// Galeria editorial bento — cantos retos, legenda tipográfica sem vidro, parallax na foto.
export default function StructureSection({
  limit,
  eyebrow = 'Estrutura',
  num = '05',
  title = 'Conheça a nossa <accent>estrutura</accent>',
  description = 'Um espaço pensado para reabilitação e performance esportiva, com equipamentos e ambientes que apoiam cada etapa do seu tratamento.',
}) {
  const scope = useGsapContext(() => {
    if (prefersReducedMotion()) return
    gsap.utils.toArray('[data-parallax]').forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -3 },
        {
          yPercent: 3,
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    })
  }, [])

  const images = limit ? structure.images.slice(0, limit) : structure.images

  return (
    <section id="estrutura" ref={scope} className="section scroll-mt-24 bg-white">
      <Container>
        <div className="flex flex-col gap-8 border-t border-ink-900/10 pt-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={eyebrow}
            num={num}
            title={
              <>
                Um espaço pensado para{' '}
                <span className="accent-word text-sport-600">a sua recuperação</span>
              </>
            }
            description={description}
          />
          {limit && (
            <Reveal className="shrink-0">
              <Button to="/estrutura" variant="outline" icon={ArrowRight}>
                Ver galeria completa
              </Button>
            </Reveal>
          )}
        </div>

        <Reveal
          stagger
          className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[190px] md:grid-cols-4"
        >
          {images.map((img, i) => (
            <figure
              key={img.src}
              data-rv
              className={`group relative overflow-hidden bg-ink-100 ${
                layout[i] || 'col-span-1 row-span-1'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                data-parallax
                className="absolute left-0 top-[-8%] h-[116%] w-full object-cover"
              />

              {img.feature && (
                <span className="absolute left-0 top-0 inline-flex items-center gap-2 bg-ink-950 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white">
                  <MapPin className="h-3.5 w-3.5 text-sport-400" aria-hidden="true" />
                  {structure.clinicName} · Zona 04
                </span>
              )}

              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-ink-950/85 via-ink-950/25 to-transparent p-4">
                <span className="text-sm font-semibold text-white">{img.label}</span>
                <span className="font-display text-xs font-semibold tabular-nums tracking-[0.1em] text-white/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </figcaption>
            </figure>
          ))}
        </Reveal>

        {!limit && (
          <Reveal className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
            <MapPin className="h-4 w-4 text-sport-600" aria-hidden="true" />
            {site.address.street} · {site.address.city}
          </Reveal>
        )}
      </Container>
    </section>
  )
}
