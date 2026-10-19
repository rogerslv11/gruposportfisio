import { site } from '../../data/site'

export default function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp com o Grupo SportFisio"
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-card transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:bottom-7 md:right-7"
    >
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring"
        aria-hidden="true"
      />
      <img
        src="/assets/geral/whatsapp.svg"
        alt=""
        aria-hidden="true"
        className="relative h-7 w-7"
        loading="lazy"
      />
    </a>
  )
}
