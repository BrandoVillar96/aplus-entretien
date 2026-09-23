import { useState } from 'react'
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

// Free-license photo (Pexels — free for commercial use): a real cleaning team
// actively mopping and sanitizing a modern interior — the "in progress" shot
// that pairs with the deep-cleaning checklist for a concrete, premium visual.
const PHOTO_URL =
  'https://images.pexels.com/photos/6197116/pexels-photo-6197116.jpeg?auto=compress&cs=tinysrgb&w=900'

export default function DeepClean() {
  const { t } = useLanguage()
  const [failed, setFailed] = useState(false)

  return (
    <section className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy-950 shadow-soft">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 items-stretch">
            <div className="relative min-h-[16rem] lg:min-h-full">
              {!failed ? (
                <img
                  src={PHOTO_URL}
                  alt={t.deepClean.title}
                  loading="lazy"
                  onError={() => setFailed(true)}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-navy-800 to-navy-950 text-teal-300">
                  <Sparkles size={32} strokeWidth={1.75} />
                </div>
              )}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(100deg, rgba(8,27,46,0.85) 0%, rgba(8,27,46,0.35) 55%, rgba(8,27,46,0) 100%)',
                }}
              />
            </div>

            <div className="relative p-8 sm:p-12 lg:p-14">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-400">
                {t.deepClean.eyebrow}
              </span>
              <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {t.deepClean.title}
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed max-w-lg">{t.deepClean.subtitle}</p>

              <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {t.deepClean.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 size={18} className="text-teal-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold px-7 py-3.5 transition-colors"
              >
                {t.deepClean.cta}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
