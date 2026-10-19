import {
  Phone,
  MessageCircle,
  MapPin,
  CalendarCheck,
  ArrowUpRight,
  MoveRight,
  Clock,
} from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import PageHero from '../components/ui/PageHero'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { site } from '../data/site'

const cards = [
  {
    icon: MapPin,
    title: 'Venha nos visitar',
    primary: site.address.street,
    sub: [site.address.zip, site.address.city],
    action: { label: 'Ver no mapa', href: site.mapsLink, external: true },
  },
  {
    icon: Phone,
    title: 'Ligue para nós',
    primary: site.phoneDisplay,
    sub: ['Fale diretamente com a nossa equipe'],
    action: { label: 'Ligar agora', href: site.phoneHref },
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    primary: site.whatsappDisplay,
    sub: ['Agende ou tire suas dúvidas pelo app'],
    action: { label: 'Enviar mensagem', href: site.whatsappHref, external: true },
  },
]

export default function Contato() {
  usePageMeta({
    title: 'Contato | Grupo SportFisio — Fisioterapia Esportiva em Maringá',
    description:
      'Fale com o Grupo SportFisio: Av. Nóbrega, 1084, Zona 04, Maringá — PR. Telefone (44) 3026-1100 e WhatsApp (44) 99156-7076. Agende seu horário.',
  })

  return (
    <>
      <PageHero
        eyebrow="Dúvidas?"
        num="01"
        title={
          <>
            Entre em <span className="accent-word text-sport-600">contato</span>
          </>
        }
        description="Venha nos visitar ou agende o seu horário. Nossa equipe está pronta para te atender."
        breadcrumb={[{ label: 'Contato' }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            href={site.whatsappHref}
            target="_blank"
            rel="noopener"
            icon={MessageCircle}
            size="lg"
          >
            Falar no WhatsApp
          </Button>
          <Button href={site.phoneHref} variant="outline" icon={Phone} size="lg">
            {site.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      <section className="section bg-white">
        <Container>
          <Reveal stagger className="grid gap-px border border-ink-900/10 bg-ink-900/10 md:grid-cols-3">
            {cards.map((c) => (
              <div
                key={c.title}
                data-rv
                className="group flex flex-col bg-white p-8 transition-colors duration-300 hover:bg-paper"
              >
                <span className="eyebrow text-ink-500">
                  <c.icon className="h-4 w-4 text-sport-600" aria-hidden="true" />
                  {c.title}
                </span>
                <div className="mt-6 flex-1">
                  <p className="display text-2xl text-ink-950">{c.primary}</p>
                  {c.sub.map((l) => (
                    <p key={l} className="mt-2 text-sm leading-relaxed text-ink-500">
                      {l}
                    </p>
                  ))}
                </div>
                <a
                  href={c.action.href}
                  {...(c.action.external ? { target: '_blank', rel: 'noopener' } : {})}
                  className="mt-8 inline-flex items-center gap-2 border-t border-ink-900/10 pt-5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink-900 transition-colors hover:text-sport-700"
                >
                  {c.action.external ? (
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <MoveRight className="h-4 w-4" aria-hidden="true" />
                  )}
                  {c.action.label}
                </a>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-12">
            <div className="grid gap-6 border border-ink-900/10 bg-paper p-8 sm:p-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="eyebrow text-ink-500">
                  <Clock className="h-4 w-4 text-sport-600" aria-hidden="true" />
                  Atendimento rápido
                </p>
                <h2 className="mt-4 display text-3xl text-ink-950 sm:text-4xl">
                  Ou agende seu horário{' '}
                  <span className="accent-word text-sport-600">agora</span>
                </h2>
                <p className="mt-3 text-sm text-ink-500">
                  Nossa equipe responde rápido pelo WhatsApp, de segunda a sábado.
                </p>
              </div>
              <div className="md:justify-self-end">
                <Button
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener"
                  size="lg"
                  icon={CalendarCheck}
                >
                  Agendar horário
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink-900/10 bg-paper pb-20 pt-16">
        <Container>
          <Reveal stagger>
            <p data-rv className="eyebrow mb-5 text-ink-500">
              <span className="h-px w-10 bg-ink-900/25" aria-hidden="true" />
              Veja nossa localização
            </p>
            <h2 data-rv className="display text-3xl text-ink-950 sm:text-4xl">
              Grupo SportFisio{' '}
              <span className="accent-word text-sport-600">| Fisioterapia Esportiva</span> em Maringá
            </h2>
          </Reveal>
          <Reveal className="mt-10">
            <div className="border border-ink-900/10">
              <iframe
                title="Localização do Grupo SportFisio no Google Maps"
                src={site.mapsEmbed}
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full border-0 md:h-[460px]"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
              {site.address.street} · {site.address.zip} · {site.address.city}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
