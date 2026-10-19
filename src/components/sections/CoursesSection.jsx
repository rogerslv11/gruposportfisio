import { ArrowRight, Check, GraduationCap } from 'lucide-react'
import CourseCard from '../ui/CourseCard'
import Reveal from '../ui/Reveal'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { courses, site } from '../../data/site'

const perks = [
  'Formações práticas para fisioterapeutas',
  'Conteúdo prático e atualizado',
  'Aviso de novas turmas pelo WhatsApp',
]

export default function CoursesSection({ preview = false, num = '07' }) {
  return (
    <section id="cursos" className="section scroll-mt-24 bg-paper">
      <Container>
        <div className="grid gap-12 border-t border-ink-900/10 pt-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal stagger className="lg:col-span-5">
            <p data-rv className="eyebrow mb-5 text-ink-500">
              <span className="font-display text-sm font-semibold tabular-nums tracking-[0.1em] text-sport-600">
                {num}
              </span>
              <span className="h-px w-10 bg-ink-900/25" aria-hidden="true" />
              Cursos
            </p>
            <h2 data-rv className="display text-4xl text-ink-950 sm:text-5xl">
              Fique por dentro dos{' '}
              <span className="accent-word text-sport-600">nossos</span> cursos
            </h2>
            <p data-rv className="mt-5 max-w-lg text-base leading-relaxed text-ink-500">
              Formações práticas para profissionais de fisioterapia. Para mais informações, entre em
              contato pelo nosso WhatsApp.
            </p>

            <ul data-rv className="mt-8 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-4 py-3.5 text-ink-700">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-sport-600" aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>

            {preview && (
              <div data-rv className="mt-9">
                <Button to="/curso" variant="outline" icon={ArrowRight}>
                  Ver próximos cursos
                </Button>
              </div>
            )}
          </Reveal>

          <Reveal stagger data-rv className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {courses.map((c) => (
                <CourseCard key={c.title} course={c} />
              ))}
              {courses.length < 2 && (
                <div data-rv className="flex flex-col justify-center border border-dashed border-ink-300 bg-white p-7 text-left">
                  <span className="eyebrow text-ink-500">
                    <GraduationCap className="h-4 w-4 text-sport-600" aria-hidden="true" />
                    Em breve
                  </span>
                  <p className="mt-4 display text-2xl text-ink-950">Novas turmas</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    Acompanhe as próximas datas e garanta sua vaga pelo nosso WhatsApp.
                  </p>
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener"
                    className="link-underline mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink-900 hover:text-sport-700"
                  >
                    <span className="h-1 w-1 bg-sport-500" aria-hidden="true" />
                    Quero ser avisado
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
