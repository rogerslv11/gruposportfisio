import { ArrowRight, CalendarCheck } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import TeamSection from '../components/sections/TeamSection'
import CtaBand from '../components/sections/CtaBand'
import { site } from '../data/site'

export default function Equipe() {
  usePageMeta({
    title: 'Profissionais | Grupo SportFisio — Fisioterapia Esportiva em Maringá',
    description:
      'Conheça nossa equipe: mais de 20 fisioterapeutas e profissionais qualificados, desde 2012 oferecendo um trabalho de excelência em Maringá.',
  })

  return (
    <>
      <PageHero
        eyebrow="Equipe SportFisio"
        num="01"
        title={
          <>
            Cuidar da sua saúde{' '}
            <span className="accent-word text-sport-600">é a nossa missão</span>
          </>
        }
        description="Proporcionar reabilitação, manutenção e prevenção dos nossos pacientes, oferecendo um tratamento breve e de forma responsável e sincera. Desde 2012, oferecendo um trabalho de excelência aos nossos pacientes."
        breadcrumb={[{ label: 'Profissionais' }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            href={site.whatsappHref}
            target="_blank"
            rel="noopener"
            icon={CalendarCheck}
            size="lg"
          >
            Agendar avaliação
          </Button>
          <Button to="/servico" variant="outline" icon={ArrowRight} size="lg">
            Ver áreas que atuamos
          </Button>
        </div>
      </PageHero>

      <TeamSection
        num="02"
        eyebrow="Nossos profissionais"
        title="Um time completo, proporcionando qualidade de vida aos nossos pacientes"
        description="Fisioterapeutas e profissionais altamente qualificados, com registro no CREFITO, prontos para cuidar da sua reabilitação e performance."
        columns="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      />

      <CtaBand
        title="Quer ser atendido"
        titleAccent="por esse time?"
        description="Agende sua avaliação e descubra o protocolo ideal para o seu caso com o Grupo SportFisio."
      />
    </>
  )
}
