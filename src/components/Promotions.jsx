import { CalendarX2, PercentCircle, CheckCircle2, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const perkIcons = [CalendarX2, PercentCircle]

export default function Promotions() {
  const { t } = useLanguage()

  return (
    <section id="promotions" className="relative overflow-hidden bg-gradient-to-b from-gold-50/40 via-white to-white py-24 sm:py-28">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-gold-400/10 blur-[110px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 border border-gold-500/30 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase text-gold-600">
            {t.promotions.eyebrow}
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 leading-tight">
            {t.promotions.title}
          </h2>
          <p className="mt-4 text-navy-800/70 leading-relaxed">{t.promotions.subtitle}</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {t.promotions.perks.map((perk, i) => {
            const Icon = perkIcons[i % perkIcons.length]
            return (
              <div
                key={perk.title}
                className="rounded-3xl bg-white border border-navy-900/8 p-8 shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-heading font-bold text-navy-900 text-lg leading-snug">
                  {perk.title}
                </h3>
                <p className="mt-2.5 text-sm text-navy-800/65 leading-relaxed">{perk.desc}</p>

                {i === 1 && (
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                    {t.promotions.extraServices.map((service) => (
                      <li key={service} className="flex items-start gap-1.5 text-xs text-navy-800/70">
                        <CheckCircle2 size={14} className="text-teal-600 shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 text-center">
          <p className="max-w-2xl text-xs text-navy-800/50 leading-relaxed">{t.promotions.conditions}</p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-navy-900 hover:bg-teal-600 text-white font-bold px-7 py-3.5 shadow-soft transition-all"
          >
            {t.promotions.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
