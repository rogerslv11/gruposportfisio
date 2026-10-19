// Card de equipe editorial: foto quadrada em preto e branco que ganha cor no hover,
// hairline que se estende e seta que entra em cena.
export default function TeamCard({ member }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-100">
        <img
          src={member.photo}
          alt={`${member.name}, ${member.role} do Grupo SportFisio`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top grayscale transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      </div>
      <div className="relative border-b border-ink-900/10 py-4">
        {/* Hairline que cresce no hover */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-[2px] w-0 bg-sport-500 transition-all duration-500 ease-out group-hover:w-full"
        />
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-base font-semibold leading-snug text-ink-900 transition-colors duration-300 group-hover:text-ink-950">
              {member.name}
            </h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
              {member.role}
            </p>
            <p className="mt-0.5 text-xs text-ink-400">{member.crefito}</p>
          </div>
          <span
            aria-hidden="true"
            className="mt-0.5 shrink-0 -translate-x-1.5 text-sport-600 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
          >
            →
          </span>
        </div>
      </div>
    </article>
  )
}
