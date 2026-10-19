import { ArrowRight } from 'lucide-react'
import TeamCard from '../ui/TeamCard'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { team } from '../../data/site'

export default function TeamSection({
  eyebrow = 'Profissionais',
  num = '04',
  title = 'Somos mais de 20 profissionais preparados para atender você',
  description = 'Proporcionar reabilitação, manutenção e prevenção dos nossos pacientes, com um tratamento breve, responsável e sincero — suprindo as expectativas através de um bom atendimento por um grupo de profissionais altamente qualificado. Desde 2012 oferecendo um trabalho de excelência.',
  limit,
  columns = 'grid-cols-2 lg:grid-cols-4',
}) {
  const list = limit ? team.slice(0, limit) : team

  return (
    <section className="section bg-paper">
      <Container>
        <div className="flex flex-col gap-8 border-t border-ink-900/10 pt-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={eyebrow} num={num} title={title} description={description} />
          {limit && (
            <Reveal className="shrink-0">
              <Button to="/equipe" variant="dark" icon={ArrowRight}>
                Conheça nosso time
              </Button>
            </Reveal>
          )}
        </div>

        {limit && (
          <Reveal data-rv className="mt-8 text-sm leading-relaxed text-ink-500">
            <span className="font-semibold text-ink-900">Time multidisciplinar</span> —
            fisioterapeutas e nutricionista com registro profissional, prontos para cuidar da sua
            reabilitação e performance.
          </Reveal>
        )}

        <Reveal stagger className={`mt-10 grid gap-x-5 gap-y-10 ${columns}`}>
          {list.map((m) => (
            <div key={m.name} data-rv>
              <TeamCard member={m} />
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
