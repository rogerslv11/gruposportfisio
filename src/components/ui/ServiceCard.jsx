import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

// Card editorial flat, cantos retos, hairline — usado em grades internas.
export default function ServiceCard({ service, index, className = '' }) {
  const number = typeof index === 'number' ? String(index + 1).padStart(2, '0') : null

  return (
    <Link
      to={`/servico/${service.id}/${service.slug}`}
      className={`group flex h-full flex-col justify-between border border-ink-900/10 bg-white p-7 transition-all duration-300 ease-out hover:border-ink-950 hover:bg-ink-950 hover:shadow-card focus-visible:ring-2 focus-visible:ring-sport-500 ${className}`}
      aria-label={`Ver mais sobre ${service.name}`}
    >
      <div>
        <div className="flex items-baseline justify-between gap-4">
          {number && (
            <span className="font-display text-sm font-semibold tabular-nums tracking-[0.08em] text-ink-300 transition-colors duration-300 group-hover:text-sport-400">
              {number}
            </span>
          )}
          <ArrowUpRight
            className="h-5 w-5 text-ink-400 transition-all duration-300 group-hover:rotate-45 group-hover:text-sport-400"
            aria-hidden="true"
          />
        </div>
        <h3 className="mt-5 display text-2xl text-ink-950 transition-colors duration-300 group-hover:text-white">
          {service.name}
        </h3>
        {service.tagline && (
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-500 transition-colors duration-300 group-hover:text-paper-dark">
            {service.tagline}
          </p>
        )}
        <p className="mt-4 text-sm leading-relaxed text-ink-500 transition-colors duration-300 group-hover:text-ink-200/80">
          {service.summary}
        </p>
      </div>

      <ul className="mt-6 space-y-2 border-t border-ink-900/10 pt-5 transition-colors duration-300 group-hover:border-white/15">
        {service.bullets?.slice(0, 3).map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-ink-600 transition-colors duration-300 group-hover:text-ink-200/75">
            <span className="mt-[0.45rem] h-1 w-1 shrink-0 bg-sport-500" aria-hidden="true" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Link>
  )
}
