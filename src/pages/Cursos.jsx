import { MessageCircle } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import CoursesSection from '../components/sections/CoursesSection'
import CtaBand from '../components/sections/CtaBand'
import { site } from '../data/site'

export default function Cursos() {
  usePageMeta({
    title: 'Cursos | Grupo SportFisio — Fisioterapia Esportiva',
    description:
      'Conheça os próximos cursos do Grupo SportFisio. Formações práticas para profissionais de fisioterapia. Fale com a gente pelo WhatsApp.',
  })

  return (
    <>
      <PageHero
        eyebrow="Fique por dentro dos"
        num="01"
        title={
          <>
            Nossos <span className="accent-word text-sport-600">cursos</span>
          </>
        }
        description="Formações práticas para profissionais de fisioterapia. Para mais informações, entre em contato pelo nosso WhatsApp."
        breadcrumb={[{ label: 'Cursos' }]}
      >
        <Button
          href={site.whatsappHref}
          target="_blank"
          rel="noopener"
          icon={MessageCircle}
          size="lg"
        >
          Falar no WhatsApp
        </Button>
      </PageHero>

      <CoursesSection num="02" />

      <CtaBand
        title="Quer ser avisado"
        titleAccent="das próximas turmas?"
        description="Fale com a nossa equipe pelo WhatsApp e garanta sua vaga nos próximos cursos do Grupo SportFisio."
      />
    </>
  )
}
