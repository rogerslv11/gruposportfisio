import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { gsap, useGsapContext, prefersReducedMotion } from '../../lib/gsap'

// Cabeçalho interno das páginas — editorial claro, hairline inferior, kicker numerado.
export default function PageHero({ eyebrow, num, title, description, breadcrumb = [], children }) {
  const scope = useGsapContext(() => {
    if (prefersReducedMotion()) return
    gsap.fromTo(
      '[data-ph-line]',
      { autoAlpha: 0, y: 22 },
      { autoAlpha: 1, y: 0, stagger: 0.09, duration: 0.8, ease: 'power3.out', delay: 0.05 },
    )
    gsap.to('[data-ph-ghost]', {
      xPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: scope.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <section
      ref={scope}
      className="relative overflow-hidden border-b border-ink-900/10 bg-paper pt-[72px] md:pt-[84px]"
    >
      <div className="container py-16 md:py-24">
        {breadcrumb.length > 0 && (
          <nav data-ph-line aria-label="Você está aqui">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-400">
              <li>
                <Link to="/" className="transition-colors hover:text-ink-900">
                  Início
                </Link>
              </li>
              {breadcrumb.map((b) => (
                <li key={b.label} className="flex items-center gap-2">
                  <span aria-hidden="true" className="font-display text-ink-300">
                    /
                  </span>
                  {b.to ? (
                    <Link to={b.to} className="transition-colors hover:text-ink-900">
                      {b.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-ink-700">
                      {b.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="mt-10 md:mt-14">
          {eyebrow && (
            <p data-ph-line className="eyebrow mb-5 text-ink-500">
              {num && (
                <span className="font-display text-sm font-semibold tabular-nums tracking-[0.1em] text-sport-600">
                  {num}
                </span>
              )}
              <span className="h-px w-10 bg-ink-900/25" aria-hidden="true" />
              {eyebrow}
            </p>
          )}

          <h1
            data-ph-line
            className="display max-w-4xl text-5xl leading-[0.95] text-ink-950 sm:text-6xl md:text-7xl"
          >
            {title}
          </h1>

          {description && (
            <p data-ph-line className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500 md:text-lg">
              {description}
            </p>
          )}

          {children && <div data-ph-line className="mt-9">{children}</div>}
        </div>
      </div>

      {/* Ghost word decorativo */}
      <div
        data-ph-ghost
        aria-hidden="true"
        className="text-outline-dark pointer-events-none absolute bottom-6 right-0 hidden select-none font-display text-[7rem] font-bold uppercase leading-none lg:block"
      >
        {eyebrow || 'SportFisio'}
      </div>
    </section>
  )
}
