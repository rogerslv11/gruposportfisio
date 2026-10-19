import { CalendarCheck, MapPin } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import StructureSection from '../components/sections/StructureSection'
import TeamSection from '../components/sections/TeamSection'
import CtaBand from '../components/sections/CtaBand'
import { site } from '../data/site'

export default function Estrutura() {
  usePageMeta({
    title: 'Estrutura | Grupo SportFisio — Fisioterapia Esportiva em Maringá',
    description:
      'Conheça a estrutura da clínica Grupo SportFisio na Av. Nóbrega, em Maringá: espaços e equipamentos para reabilitação e performance esportiva.',
  })

  return (
    <>
      <PageHero
        eyebrow="Nossa clínica"
        num="01"
        title={
          <>
            Conheça a nossa <span className="accent-word text-sport-600">estrutura</span>
          </>
        }
        description="Espaços e equipamentos preparados para a sua reabilitação e performance esportiva, no coração de Maringá."
        breadcrumb={[{ label: 'Estrutura' }]}
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
          <Button
            href={site.mapsLink}
            target="_blank"
            rel="noopener"
            variant="outline"
            icon={MapPin}
            size="lg"
          >
            Como chegar
          </Button>
        </div>
      </PageHero>

      <StructureSection
        num="02"
        eyebrow="Clínica Av. Nóbrega"
        title="Um ambiente pensado para a sua recuperação"
        description="Da avaliação ao retorno à atividade, cada espaço da nossa clínica apoia uma etapa do seu tratamento."
      />

      <TeamSection
        limit={8}
        num="03"
        eyebrow="Nossos profissionais"
        title="Somos mais de 20 profissionais preparados para atender você"
      />

      <CtaBand />
    </>
  )
}
