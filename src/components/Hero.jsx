import { useState } from 'react'
import { ShieldCheck, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import DynamicLines from './illustrations/DynamicLines'

// Free-license photo (Unsplash — free for commercial use): a real professional
// cleaner actively sanitizing an office workstation, shot in a polished,
// editorial style. Chosen so the hero itself — the very first thing a visitor
// sees — shows real trained staff at work, not an empty room, to sell the
// "premium, professional team" positioning the client asked for.
const HERO_PHOTO_URL =
  'https://images.unsplash.com/photo-1627905646269-7f034dcc5738?auto=format&fit=crop&w=1000&q=80'

export default function Hero() {
  const { t } = useLanguage()
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="accueil" className="relative overflow-hidden bg-gradient-to-b from-white to-slate-100 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <DynamicLines className="opacity-70" />
      <div className="absolute -top-32 -right-16 h-[26rem] w-[26rem] rounded-full bg-teal-400/10 blur-[110px]" />
      <div className="absolute -bottom-40 -left-24 h-[24rem] w-[24rem] rounded-full bg-gold-400/10 blur-[110px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="max-w-xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-600/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-700 uppercase mb-6">
              <ShieldCheck size={14} />
              {t.hero.eyebrow}
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.08] tracking-tight text-navy-900">
              {t.hero.title}
            </h1>

            <p className="mt-6 text-lg text-navy-800/70 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-navy-900 hover:bg-teal-600 text-white font-bold px-7 py-3.5 shadow-soft transition-all"
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-navy-900/20 text-navy-900 font-semibold px-7 py-3.5 hover:bg-navy-900/5 transition-colors"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-navy-900/10 pt-8">
              {t.hero.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900">{s.value}</div>
                  <div className="text-xs sm:text-sm text-navy-800/55 mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-6 -z-10">
                <DynamicLines />
              </div>

              {/* Offset panel peeking out behind the photo — reads as an
                  intentionally designed, layered composition rather than a
                  single image dropped on the page. */}
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] bg-gradient-to-br from-teal-50 to-amber-50/40 border border-teal-600/15 -z-10" />

              {/* White "mat" frame around the photo, like a printed/framed
                  photograph rather than a bare <img> — the small margin plus
                  its own shadow is what makes the photo feel placed on
                  purpose instead of pasted on top of the background. */}
              <div className="relative rounded-[2rem] bg-white p-3 shadow-soft ring-1 ring-navy-900/10">
                <div className="relative aspect-[4/5] rounded-[1.4rem] overflow-hidden">
                  {!photoFailed ? (
                    <img
                      src={HERO_PHOTO_URL}
                      alt={t.hero.title}
                      onError={() => setPhotoFailed(true)}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-navy-800 to-navy-950 text-teal-300">
                      <ShieldCheck size={32} strokeWidth={1.75} />
                      <span className="text-xs font-medium text-slate-400 px-8 text-center">
                        {t.hero.title}
                      </span>
                    </div>
                  )}
                  <div
                    className="absolute inset-0 mix-blend-multiply pointer-events-none"
                    style={{
                      background: 'linear-gradient(200deg, rgba(8,27,46,0.14) 0%, rgba(8,27,46,0) 45%)',
                    }}
                  />
                  <div className="absolute inset-0 rounded-[1.4rem] ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>

                {/* Floating "certified team" badge — the same premium, layered
                    card treatment used elsewhere on the page (see About's
                    stat badges), giving the hero photo a concrete trust
                    signal instead of just a pretty picture. */}
                <div className="absolute -left-5 bottom-8 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-card ring-1 ring-navy-900/10 max-w-[15rem]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-600">
                    <ShieldCheck size={20} strokeWidth={2.25} />
                  </span>
                  <div>
                    <div className="font-heading font-bold text-navy-900 text-sm leading-snug">
                      {t.hero.badge.title}
                    </div>
                    <div className="text-[11px] text-navy-800/55 leading-snug">{t.hero.badge.desc}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
