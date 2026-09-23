import { useState } from 'react'
import { Heart, ShieldCheck, Users, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const icons = [ShieldCheck, Heart, Users]

// Free-license photo (Pexels — free for commercial use): a real team of
// uniformed cleaning professionals at work. Used here, next to the "we treat
// our staff like family" copy, so the claim is backed by a real photo of a
// real team rather than an abstract equipment illustration.
const ABOUT_PHOTO_URL =
  'https://images.pexels.com/photos/6195120/pexels-photo-6195120.jpeg?auto=compress&cs=tinysrgb&w=800'

export default function About() {
  const { t } = useLanguage()
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="apropos" className="bg-white py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl max-w-md mx-auto overflow-hidden shadow-soft aspect-[4/5]">
              {!photoFailed ? (
                <img
                  src={ABOUT_PHOTO_URL}
                  alt={t.about.title}
                  loading="lazy"
                  onError={() => setPhotoFailed(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-navy-800 to-navy-950 text-teal-300">
                  <Sparkles size={32} strokeWidth={1.75} />
                  <span className="text-xs font-medium text-slate-400 px-8 text-center">
                    {t.about.title}
                  </span>
                </div>
              )}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(0deg, rgba(8,27,46,0.55) 0%, rgba(8,27,46,0.05) 45%, rgba(8,27,46,0) 65%)',
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none">
                <div className="rounded-2xl bg-white/95 backdrop-blur p-6 shadow-card">
                  <div className="font-heading text-3xl font-extrabold text-navy-900">15+</div>
                  <div className="text-sm font-semibold text-navy-800/70 mt-1">
                    {t.hero.stats[0].label}
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl bg-teal-500 text-white px-6 py-4 shadow-soft">
              <div className="font-heading text-xl font-extrabold">100%</div>
              <div className="text-xs font-semibold uppercase tracking-wide opacity-90">
                {t.hero.stats[1].label}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
              {t.about.eyebrow}
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 leading-tight">
              {t.about.title}
            </h2>

            <div className="mt-6 space-y-4">
              {t.about.paragraphs.map((p, i) => (
                <p key={i} className="text-navy-800/75 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-9 grid sm:grid-cols-3 gap-5">
              {t.about.highlights.map((h, i) => {
                const Icon = icons[i % icons.length]
                return (
                  <div key={h.title} className="rounded-2xl border border-navy-900/8 p-5 hover:border-teal-500/40 hover:shadow-card transition-all">
                    <Icon size={20} className="text-teal-600" strokeWidth={2.25} />
                    <div className="mt-3 font-heading font-bold text-navy-900 text-sm">{h.title}</div>
                    <p className="mt-1.5 text-xs text-navy-800/60 leading-relaxed">{h.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
