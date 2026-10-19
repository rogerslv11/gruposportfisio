import { ClipboardCheck, Route, HeartPulse, ArrowRight, CalendarCheck, Phone } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import PageHero from '../components/ui/PageHero'
import ServiceCard from '../components/ui/ServiceCard'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import CtaBand from '../components/sections/CtaBand'
import { services, site } from '../data/site'

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Avaliação fisioterapêutica',
    text: 'Analisamos o seu caso com atenção para entender a causa da dor e as suas necessidades.',
  },
  {
    icon: Route,
    title: 'Protocolo individualizado',
    text: 'Encaminhamos você para o protocolo que melhor encaixa com a sua necessidade.',
  },
  {
    icon: HeartPulse,
    title: 'Tratamento e acompanhamento',
    text: 'Combinamos técnicas para o melhor resultado e acompanhamos a sua evolução.',
  },
]

export default function Servicos() {
  usePageMeta({
    title: 'Áreas que atuamos | Grupo SportFisio — Fisioterapia Esportiva',
    description:
      'Dry Needling, Ondas de Choque, Reabilitação do LCA, Recovery, RPG, Terapia Manual e Home Care. Conheça as áreas de atuação do Grupo SportFisio em Maringá.',
  })

  return (
    <>
      <PageHero
        eyebrow="Descubra quais são as"
        title={
          <>
            Áreas de <span className="accent-word text-sport-600">atuação</span>
          </>
        }
        description="O Grupo SportFisio atua em diversas áreas da fisioterapia. Atuamos na prevenção e reabilitação para que os nossos pacientes voltem às suas atividades o mais breve possível."
        num="01"
        breadcrumb={[{ label: 'Áreas que atuamos' }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            href={site.whatsappHref}
            target="_blank"
            rel="noopener"
            icon={CalendarCheck}
            size="lg"
          >
            Agendar horário
          </Button>
          <Button href={site.phoneHref} variant="outline" icon={Phone} size="lg">
            {site.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      {/* Como funciona — colunas editoriais numeradas */}
      <section className="section-tight bg-white">
        <Container>
          <SectionHeading
            eyebrow="Como funciona"
            num="02"
            title={
              <>
                Do primeiro contato <span className="accent-word text-sport-600">ao retorno</span>
              </>
            }
            description="Um cuidado organizado em etapas para que você saiba exatamente o que esperar em cada momento do seu tratamento."
          />

          <Reveal stagger className="mt-14 grid gap-10 divide-y divide-ink-900/10 border-y border-ink-900/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {steps.map((s, i) => (
              <div
                key={s.title}
                data-rv
                className="group relative px-0 py-8 md:px-8 md:py-4"
              >
                <div className="flex items-center gap-3">
                  <span className="display text-5xl text-ink-300 transition-colors duration-300 group-hover:text-sport-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <s.icon className="h-5 w-5 text-sport-600" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.text}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="section bg-paper">
        <Container>
          <SectionHeading
            eyebrow="Tratamentos"
            num="03"
            title={
              <>
                Escolha a área <span className="accent-word text-sport-600">que você precisa</span>
              </>
            }
            description="Veja abaixo alguns de nossos tratamentos. Em caso de dúvida, fale com a gente pelo WhatsApp."
          />

          <Reveal stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.id} data-rv className="h-full">
                <ServiceCard service={s} index={i} />
              </div>
            ))}
            <div data-rv className="h-full">
              <div className="flex h-full flex-col justify-between p-7 text-left">
                <div>
                  <span className="font-display text-sm font-semibold tabular-nums tracking-[0.08em] text-sport-600">
                    ++
                  </span>
                  <h3 className="mt-5 display text-2xl text-ink-950">
                    Não sabe por onde começar?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    Fale com a nossa equipe e receba uma orientação sobre o melhor tratamento para o
                    seu caso.
                  </p>
                </div>
                <Button
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener"
                  variant="outline"
                  icon={ArrowRight}
                  className="mt-8 w-full"
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
