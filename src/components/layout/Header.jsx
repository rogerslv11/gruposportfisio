import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, CalendarCheck, Phone, MapPin, MessageCircle } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { nav, site } from '../../data/site'

export default function Header() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const progressRef = useRef(null)

  // Barra de progresso de scroll
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const p = max > 0 ? Math.min(1, doc.scrollTop / max) : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`
    }
    const request = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu and reset scroll lock on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkBase =
    'relative text-sm font-medium transition-colors duration-200 text-ink-600 hover:text-ink-950'
  const linkActive = 'text-ink-950'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-ink-900/10 bg-paper/90 shadow-soft backdrop-blur-md'
          : 'border-transparent bg-paper'
      }`}
    >
      <div
        ref={progressRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-50 h-[2.5px] origin-left scale-x-0 bg-sport-500"
      />
      <div className="container">
        <div className="flex h-[72px] items-center justify-between gap-6 md:h-[84px]">
          <Link
            to="/"
            aria-label="Grupo SportFisio — Página inicial"
            className="shrink-0 rounded-none"
          >
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `${linkBase} ${isActive ? linkActive : ''} link-underline py-1 font-medium ${
                        isActive
                          ? 'after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-sport-500'
                          : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              to="/contato"
              size="sm"
              icon={CalendarCheck}
              className="hidden sm:inline-flex"
            >
              Agendar horário
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-ink-900/15 text-ink-800 transition-colors hover:border-ink-950 hover:bg-ink-950 hover:text-white lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`overflow-hidden bg-paper transition-[max-height,opacity] duration-500 ease-out ${
            open ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav aria-label="Navegação mobile" className="container py-6">
            <ul className="flex flex-col divide-y divide-ink-900/10">
              {nav.map((item, i) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `flex items-baseline gap-4 py-3.5 text-base font-medium transition-colors ${
                        isActive ? 'text-ink-950' : 'text-ink-600 hover:text-ink-900'
                      }`
                    }
                  >
                    <span className="font-display text-xs font-semibold tabular-nums tracking-[0.1em] text-sport-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 pb-4">
              <Button to="/contato" icon={CalendarCheck} className="w-full">
                Agendar horário
              </Button>
              <div className="flex flex-col gap-2 pt-2 text-sm text-ink-500">
                <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-ink-900">
                  <Phone className="h-4 w-4 text-sport-600" /> {site.phoneDisplay}
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 hover:text-ink-900"
                >
                  <MessageCircle className="h-4 w-4 text-sport-600" /> WhatsApp {site.whatsappDisplay}
                </a>
                <p className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-sport-600" /> {site.address.street}, {site.address.city}
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
