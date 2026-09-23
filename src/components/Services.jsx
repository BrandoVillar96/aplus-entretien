import {
  Building2,
  Briefcase,
  HardHat,
  Building,
  Stethoscope,
  UtensilsCrossed,
  Factory,
  GraduationCap,
  Dumbbell,
  ShoppingBag,
  Droplets,
  Sparkles,
  KeyRound,
  Layers,
  PaintBucket,
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const icons = [
  Building2,
  Briefcase,
  HardHat,
  Building,
  Stethoscope,
  UtensilsCrossed,
  Factory,
  GraduationCap,
  Dumbbell,
  ShoppingBag,
  Droplets,
  Sparkles,
  KeyRound,
  Layers,
  PaintBucket,
]

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="bg-slate-50 py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
            {t.services.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 leading-tight">
            {t.services.title}
          </h2>
          <p className="mt-4 text-navy-800/70 leading-relaxed">{t.services.subtitle}</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={item.title}
                className="group rounded-2xl bg-white border border-navy-900/8 p-6 hover:shadow-card hover:-translate-y-0.5 hover:border-teal-500/40 transition-all duration-200"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <Icon size={20} strokeWidth={2.1} />
                </span>
                <h3 className="mt-4 font-heading font-bold text-navy-900 text-base">{item.title}</h3>
                <p className="mt-2 text-sm text-navy-800/65 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
