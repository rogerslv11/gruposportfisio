import { ArrowRight } from 'lucide-react'
import Reveal from '../ui/Reveal'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { site, structure } from '../../data/site'

const points = [
  {
    num: '01',
    text: 'Tratamento breve, responsável e sincero',
  },
  {
    num: '02',
    text: 'Grupo de profissionais altamente qualificado',
  },
  {
    num: '03',
    text: 'Reabilitação, manutenção e prevenção',
  },
]

// Editorial: texto numerado à esquerda, figura com legenda à direita.
export default function AboutSection() {
  return (
    <section id="sobre" className="section scroll-mt-24 bg-paper">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Texto */}
          <div className="lg:col-span-6">
            <Reveal stagger>
              <p data-rv className="eyebrow mb-5 text-ink-500">
                <span className="font-display text-sm font-semibold tabular-nums tracking-[0.1em] text-sport-600">
                  02
                </span>
                <span className="h-px w-10 bg-ink-900/25" aria-hidden="true" />
                Sobre o Grupo SportFisio
              </p>
              <h2
                data-rv
                className="display text-4xl text-ink-950 sm:text-5xl md:text-6xl"
              >
                Cuidar da sua saúde <span className="accent-word text-sport-600">é a nossa</span>{' '}
                missão
              </h2>
              <p data-rv className="mt-7 max-w-xl text-base leading-relaxed text-ink-600 md:text-lg">
                Proporcionar reabilitação, manutenção e prevenção dos nossos pacientes, oferecendo um
                tratamento breve e de forma responsável e sincera, suprindo as expectativas através
                de um bom atendimento por um grupo de profissionais altamente qualificado.
              </p>
            </Reveal>

            <ul data-rv className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {points.map((p) => (
                <li
                  key={p.num}
                  className="group flex items-baseline gap-6 py-4 transition-transform duration-300 ease-out hover:translate-x-1.5"
                >
                  <span className="font-display text-sm font-semibold tabular-nums tracking-[0.1em] text-sport-600 transition-colors duration-300 group-hover:text-ink-950">
                    {p.num}
                  </span>
                  <span className="text-base font-medium text-ink-800">{p.text}</span>
                </li>
              ))}
            </ul>

            <Reveal className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
              <div data-rv>
                <p className="display text-4xl text-ink-950">{site.founded}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                  Trabalho de excelência desde então
                </p>
              </div>
              <div data-rv className="ml-auto sm:ml-6">
                <Button to="/equipe" variant="outline" icon={ArrowRight}>
                  Conheça nosso time
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Figura editorial */}
          <div className="lg:col-span-6">
            <Reveal className="lg:pt-10">
              <figure data-rv>
                <div className="overflow-hidden">
                  <img
                    src="/assets/estrutura/estrutura-1.webp"
                    alt="Fachada do Grupo SportFisio na Av. Nóbrega, em Maringá"
                    loading="lazy"
                    decoding="async"
                    className="h-[400px] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03] sm:h-[540px]"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-4 border-b border-ink-900/10 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                  <span>{structure.clinicName}</span>
                  <span>
                    {site.address.street} · {site.address.city}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
