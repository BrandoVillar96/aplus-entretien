import { ShieldCheck, Smile, Building2, TrendingUp } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const icons = [ShieldCheck, Smile, Building2, TrendingUp]

export default function Impact() {
  const { t } = useLanguage()

  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
            {t.impact.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 leading-tight">
            {t.impact.title}
          </h2>
          <p className="mt-4 text-navy-800/70 leading-relaxed">{t.impact.subtitle}</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.impact.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={item.title} className="text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-teal-400 shadow-soft">
                  <Icon size={26} strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-heading font-bold text-navy-900 text-sm uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-navy-800/65 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
