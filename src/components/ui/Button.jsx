import { Link } from 'react-router-dom'

// Editorial buttons: retangulares, label em caps com tracking largo.
const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-none font-display font-semibold uppercase tracking-[0.14em] transition-all duration-300 ease-out focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60'

const sizes = {
  sm: 'px-4 py-2 text-[0.7rem]',
  md: 'px-6 py-3 text-xs',
  lg: 'px-8 py-4 text-sm',
}

const variants = {
  // Signature green CTA — dark ink text keeps WCAG AA contrast on the brand green.
  primary:
    'bg-sport-500 text-ink-950 hover:bg-sport-600 hover:text-white active:translate-y-px',
  dark: 'bg-ink-950 text-white hover:bg-ink-700 active:translate-y-px',
  sky: 'bg-sky-500 text-ink-950 hover:bg-sky-400 active:translate-y-px',
  outline:
    'border border-ink-300/70 bg-transparent text-ink-900 hover:border-ink-900 hover:bg-ink-950 hover:text-white active:translate-y-px',
  outlineLight:
    'border border-white/35 bg-transparent text-white hover:border-white hover:bg-white hover:text-ink-950 active:translate-y-px',
  ghost: 'text-ink-700 hover:bg-ink-50 hover:text-ink-900',
  white: 'bg-white text-ink-900 hover:bg-paper-dark active:translate-y-px',
}

export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon: Icon,
  iconPosition = 'right',
  ...rest
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />}
      <span className="whitespace-nowrap">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon
          className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  const Tag = as || 'button'
  return (
    <Tag className={classes} {...rest}>
      {content}
    </Tag>
  )
}
