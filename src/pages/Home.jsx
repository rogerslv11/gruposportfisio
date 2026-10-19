import usePageMeta from '../hooks/usePageMeta'
import Hero from '../components/sections/Hero'
import StatsBand from '../components/sections/StatsBand'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import TeamSection from '../components/sections/TeamSection'
import StructureSection from '../components/sections/StructureSection'
import HomeCareSection from '../components/sections/HomeCareSection'
import CoursesSection from '../components/sections/CoursesSection'
import CtaBand from '../components/sections/CtaBand'

export default function Home() {
  usePageMeta({
    title: 'Grupo SportFisio | Fisioterapia Esportiva em Maringá',
    description:
      'Clínica de Fisioterapia Esportiva em Maringá. Reabilitação, RPG, Recovery, Dry Needling, Ondas de Choque e Home Care com mais de 20 profissionais desde 2012.',
  })

  return (
    <>
      <Hero />
      <StatsBand />
      <AboutSection />
      <ServicesSection limit={6} />
      <TeamSection limit={8} />
      <StructureSection limit={5} />
      <HomeCareSection />
      <CoursesSection preview />
      <CtaBand />
    </>
  )
}
