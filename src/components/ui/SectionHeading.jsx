import Reveal from './Reveal'

// Editorial: kicker numerado (01 — Label) + headline condensada.
export default function SectionHeading({
  eyebrow,
  num,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
}) {
  const isCenter = align === 'center'
  const isLight = tone === 'light'

  return (
    <Reveal
      stagger
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <p
          data-rv
          className={`eyebrow mb-5 ${isCenter ? 'justify-center' : ''} ${
            isLight ? 'text-paper-dark' : 'text-ink-500'
          }`}
        >
          {num && (
            <span className={`font-display text-sm font-semibold tabular-nums tracking-[0.1em] ${isLight ? 'text-sport-300' : 'text-sport-600'}`}>
              {num}
            </span>
          )}
          <span className={`h-px w-10 ${isLight ? 'bg-paper-dark/40' : 'bg-ink-900/25'}`} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        data-rv
        className={`display text-4xl sm:text-5xl md:text-6xl ${isLight ? 'text-white' : 'text-ink-900'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          data-rv
          className={`mt-5 max-w-xl text-base leading-relaxed md:text-lg ${
            isCenter ? 'mx-auto' : ''
          } ${isLight ? 'text-ink-100/75' : 'text-ink-500'}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
