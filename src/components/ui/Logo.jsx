export default function Logo({ light = false, className = '', iconClass = 'h-9' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={light ? '/assets/logo/icon-light.png' : '/assets/logo/icon-dark.png'}
        alt=""
        aria-hidden="true"
        className={`${iconClass} w-auto shrink-0`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[0.5rem] font-semibold uppercase tracking-[0.32em] ${
            light ? 'text-white/60' : 'text-ink-400'
          }`}
        >
          Grupo
        </span>
        <span className="text-xl font-bold leading-none tracking-tight">
          <span className="text-sky-500">Sport</span>
          <span className={light ? 'text-white' : 'text-ink-900'}>Fisio</span>
        </span>
      </span>
    </span>
  )
}
