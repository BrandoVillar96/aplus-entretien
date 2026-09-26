import { Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = 2026

  // Root-relative anchors so these links also work correctly from the
  // standalone careers page (see Header.jsx for the same rationale).
  const links = [
    { href: '/#accueil', label: t.nav.home },
    { href: '/#promotions', label: t.nav.promotions },
    { href: '/#apropos', label: t.nav.about },
    { href: '/#services', label: t.nav.services },
    { href: '/#pourquoi', label: t.nav.why },
    { href: '/#contact', label: t.nav.contact },
    { href: '/carrieres.html', label: t.nav.careers },
  ]

  return (
    <footer className="bg-navy-950 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="A Plus Entretien" className="h-12 w-auto" />
              <span className="font-heading font-extrabold text-white leading-none">
                A Plus Entretien
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold text-sm mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm hover:text-teal-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold text-sm mb-4">{t.footer.servicesTitle}</h4>
            <ul className="space-y-2.5">
              {t.services.items.slice(0, 5).map((s) => (
                <li key={s.title} className="text-sm">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold text-sm mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm">
                <Phone size={15} className="text-teal-400 shrink-0" />
                <a href="tel:5145629969" className="hover:text-teal-400 transition-colors">
                  {t.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail size={15} className="text-teal-400 shrink-0" />
                <a href="mailto:aplusentretien@gmail.com" className="hover:text-teal-400 transition-colors">
                  {t.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <MapPin size={15} className="text-teal-400 shrink-0" />
                {t.contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>© {year} A Plus Entretien. {t.footer.rights}</span>
        </div>
      </div>
    </footer>
  )
}
