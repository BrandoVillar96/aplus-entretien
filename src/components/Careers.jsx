import { Mail, ArrowLeft, ShieldAlert, Send } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Careers() {
  const { t } = useLanguage()
  const c = t.careers
  const subject = encodeURIComponent(c.title)
  const mailtoHref = `mailto:${c.email}?subject=${subject}`

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-100 pt-32 pb-24 sm:pt-40 sm:pb-28 min-h-[70vh]">
      <div className="absolute -top-32 -right-16 h-[26rem] w-[26rem] rounded-full bg-teal-400/10 blur-[110px]" />
      <div className="absolute -bottom-40 -left-24 h-[24rem] w-[24rem] rounded-full bg-gold-400/10 blur-[110px]" />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800/60 hover:text-teal-600 transition-colors"
        >
          <ArrowLeft size={16} />
          {c.back}
        </a>

        <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-600/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-700 uppercase">
          {c.eyebrow}
        </span>

        <h1 className="mt-5 font-heading text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-navy-900">
          {c.title}
        </h1>
        <p className="mt-4 text-lg text-navy-800/70 leading-relaxed">{c.intro}</p>

        <div className="mt-10 w-full rounded-3xl bg-white p-8 sm:p-10 shadow-soft ring-1 ring-navy-900/10 text-left">
          <p className="text-navy-800/75 leading-relaxed">{c.instructions}</p>

          <div className="mt-7 flex items-center gap-4 rounded-2xl bg-slate-50 border border-navy-900/8 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-600">
              <Mail size={20} strokeWidth={2.25} />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-bold uppercase tracking-wide text-navy-800/50">{c.emailLabel}</div>
              <a
                href={mailtoHref}
                className="block truncate font-heading font-bold text-navy-900 hover:text-teal-600 transition-colors"
              >
                {c.email}
              </a>
            </div>
          </div>

          <a
            href={mailtoHref}
            className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 hover:bg-teal-600 text-white font-bold px-7 py-3.5 shadow-soft transition-all"
          >
            {c.cta}
            <Send size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <div className="mt-6 flex items-start gap-2.5 text-xs text-navy-800/55 leading-relaxed">
            <ShieldAlert size={16} className="text-gold-500 shrink-0 mt-0.5" />
            <span>{c.note}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
