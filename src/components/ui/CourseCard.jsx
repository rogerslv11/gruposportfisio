import { Info, GraduationCap } from 'lucide-react'
import { site } from '../../data/site'

export default function CourseCard({ course }) {
  return (
    <article className="group flex h-full flex-col border border-ink-900/10 bg-white transition-all duration-300 hover:border-ink-950 hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-ink-900/10 bg-paper">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-0 top-0 bg-ink-950 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white">
          {course.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <span className="eyebrow text-ink-500">
          <GraduationCap className="h-4 w-4 text-sport-600" aria-hidden="true" />
          Curso prático
        </span>
        <h3 className="mt-4 display text-2xl text-ink-950">{course.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{course.about}</p>

        <p className="mt-5 flex items-start gap-2 border-t border-ink-900/10 pt-4 text-sm text-ink-600">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-sport-600" aria-hidden="true" />
          {course.note}
        </p>

        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener"
          className="link-underline mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink-900 hover:text-sport-700"
        >
          <span className="h-1 w-1 bg-sport-500" aria-hidden="true" />
          Quero saber das próximas turmas
        </a>
      </div>
    </article>
  )
}
