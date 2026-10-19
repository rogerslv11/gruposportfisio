import { Link } from 'react-router-dom'
import { Phone, MapPin, MessageCircle, Clock, CalendarCheck } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { nav, services, site } from '../../data/site'

const year = new Date().getFullYear()

// Rodapé editorial escuro com wordmark fantasma gigante.
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-sport-500 bg-ink-950 text-ink-100">
      {/* Wordmark fantasma */}
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -bottom-6 right-0 select-none whitespace-nowrap font-display text-[11rem] font-bold uppercase leading-none"
      >
        SportFisio
      </span>

      <div className="container relative">
        <div className="grid gap-12 pb-16 pt-16 md:pb-20 md:pt-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-200/70">
              Fisioterapia esportiva em Maringá. Reabilitação responsável, prevenção e performance
              desde {site.founded}.
            </p>

            {/* Redes */}
            <div className="mt-6 flex gap-2">
              <a
                href={`https://instagram.com/${site.homeCareInstagram.replace('@', '')}`}
                target="_blank"
                rel="noopener"
                aria-label="Instagram do Grupo SportFisio"
                className="group flex h-10 w-10 items-center justify-center border border-white/15 text-ink-200/80 transition-colors duration-300 hover:border-sport-400 hover:bg-sport-400 hover:text-ink-950"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={site.mapsLink}
                target="_blank"
                rel="noopener"
                aria-label="Grupo SportFisio no Google Maps"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-ink-200/80 transition-colors duration-300 hover:border-sport-400 hover:bg-sport-400 hover:text-ink-950"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-ink-200/70">
              <Clock className="h-4 w-4 text-sport-400" aria-hidden="true" />
              Mais de {site.professionals} profissionais preparados para atender você
            </div>
          </div>

          <nav aria-label="Institucional" className="lg:col-span-2">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white">
              Institucional
            </h3>
            <ul className="mt-5 space-y-1 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="link-underline inline-block py-1 text-ink-200/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Áreas que atuamos" className="lg:col-span-3">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white">
              Áreas que atuamos
            </h3>
            <ul className="mt-5 space-y-1 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/servico/${s.id}/${s.slug}`}
                    className="link-underline inline-block py-1 text-ink-200/70 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white">
              Fale conosco
            </h3>
            <div className="mt-5 space-y-4 text-sm">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-ink-100 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15">
                  <Phone className="h-4 w-4 text-sky-400" aria-hidden="true" />
                </span>
                {site.phoneDisplay}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3 text-ink-100 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15">
                  <MessageCircle className="h-4 w-4 text-sport-400" aria-hidden="true" />
                </span>
                WhatsApp {site.whatsappDisplay}
              </a>
              <p className="flex items-start gap-3 text-ink-200/70">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15">
                  <MapPin className="h-4 w-4 text-sky-400" aria-hidden="true" />
                </span>
                <span>
                  {site.address.street}
                  <br />
                  {site.address.zip}
                  <br />
                  {site.address.city}
                </span>
              </p>
              <Button
                href={site.whatsappHref}
                target="_blank"
                rel="noopener"
                size="sm"
                className="mt-2 w-full"
              >
                <CalendarCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Agendar horário
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 py-6 text-xs text-ink-300/60 sm:flex-row sm:items-center">
          <p>
            © {year} Grupo SportFisio — Fisioterapia Esportiva em Maringá. Todos os direitos
            reservados.
          </p>
          <p className="uppercase tracking-[0.2em]">CREFITO-3 · Fisioterapia</p>
        </div>
      </div>
    </footer>
  )
}
