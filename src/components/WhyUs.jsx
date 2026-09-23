import {
  UserCheck,
  Leaf,
  ShieldCheck,
  EyeOff,
  Clock,
  ClipboardCheck,
  FileCheck2,
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const icons = [UserCheck, Leaf, ShieldCheck, EyeOff, Clock, ClipboardCheck, FileCheck2]

export default function WhyUs() {
  const { t } = useLanguage()

  return (
    <section id="pourquoi" className="relative bg-navy-950 py-24 sm:py-28 overflow-hidden">
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-400">
            {t.why.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            {t.why.title}
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.why.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.07] hover:border-teal-400/30 transition-colors"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                  <Icon size={20} strokeWidth={2.1} />
                </span>
                <h3 className="mt-4 font-heading font-bold text-white text-sm leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
