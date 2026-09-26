import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Header() {
  const { t, lang, toggleLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Root-relative anchors ("/#services" rather than "#services") so these
  // links behave identically on the homepage (same-document scroll, no
  // reload) but still work correctly if this Header is ever rendered on
  // another page, such as the standalone careers page.
  const links = [
    { href: '/#accueil', label: t.nav.home },
    { href: '/#promotions', label: t.nav.promotions },
    { href: '/#apropos', label: t.nav.about },
    { href: '/#services', label: t.nav.services },
    { href: '/#pourquoi', label: t.nav.why },
    { href: '/#contact', label: t.nav.contact },
  ]

  // Real navigation (not a same-page anchor): opens the standalone careers
  // page, which only tells applicants to email their resume — no form, and
  // deliberately kept off the main page per the client's request.
  const careersLink = { href: '/carrieres.html', label: t.nav.careers }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-card py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="/#accueil" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <img
            src="/logo-header.png"
            alt="A Plus Entretien"
            className="h-9 sm:h-12 lg:h-14 w-auto drop-shadow-sm shrink-0"
          />
          <span className="font-heading font-extrabold tracking-tight leading-none text-sm sm:text-lg text-navy-900 whitespace-nowrap">
            A Plus Entretien
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-navy-800/80 hover:text-teal-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={careersLink.href}
            className="text-sm font-semibold text-navy-800/80 hover:text-teal-600 transition-colors"
          >
            {careersLink.label}
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:5145629969"
            className="flex items-center gap-2 text-sm font-semibold text-navy-800/80 hover:text-teal-600 transition-colors"
          >
            <Phone size={16} />
            514-562-9969
          </a>
          <button
            onClick={toggleLang}
            className="text-xs font-bold uppercase tracking-wide rounded-full px-3 py-1.5 border border-navy-800/15 text-navy-800 hover:border-teal-500 hover:text-teal-600 transition-colors"
            aria-label="Toggle language"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <a
            href="/#contact"
            className="rounded-full bg-navy-900 text-white text-sm font-semibold px-5 py-2.5 hover:bg-teal-600 transition-colors shadow-soft"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLang}
            className="text-xs font-bold uppercase tracking-wide rounded-full px-3 py-1.5 border border-navy-800/15 text-navy-800"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="p-2 rounded-lg text-navy-900"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-navy-800/10 mt-3 shadow-card">
          <div className="flex flex-col px-5 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-navy-800"
              >
                {l.label}
              </a>
            ))}
            <a
              href={careersLink.href}
              className="text-sm font-semibold text-navy-800"
            >
              {careersLink.label}
            </a>
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-navy-900 text-white text-sm font-semibold px-5 py-2.5 text-center"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
