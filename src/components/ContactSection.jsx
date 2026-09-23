import { useState } from 'react'
import { Phone, Mail, MapPin, Clock3, CheckCircle2, Send } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function ContactSection() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Static demo site: no backend wired up yet. Replace with a real
    // submission handler (API route, email service, etc.) when ready.
    setSubmitted(true)
  }

  const infoItems = [
    { icon: Phone, label: t.contact.phone, href: 'tel:5145629969' },
    { icon: Mail, label: t.contact.email, href: 'mailto:aplusentretien@gmail.com' },
    { icon: MapPin, label: t.contact.location, sub: t.contact.locationDesc },
    { icon: Clock3, label: t.contact.hoursTitle, sub: t.contact.hours },
  ]

  return (
    <section id="contact" className="bg-slate-50 py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
              {t.contact.eyebrow}
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 leading-tight">
              {t.contact.title}
            </h2>

            <div className="mt-9 space-y-5">
              {infoItems.map((item) => {
                const Icon = item.icon
                const Wrapper = item.href ? 'a' : 'div'
                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className="flex items-start gap-4 group"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-teal-400 group-hover:bg-teal-500 group-hover:text-navy-950 transition-colors">
                      <Icon size={19} strokeWidth={2.1} />
                    </span>
                    <div>
                      <div className="font-heading font-bold text-navy-900 text-sm">{item.label}</div>
                      {item.sub && <div className="text-xs text-navy-800/60 mt-0.5">{item.sub}</div>}
                    </div>
                  </Wrapper>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-white border border-navy-900/8 shadow-card p-7 sm:p-9">
              <h3 className="font-heading text-xl font-extrabold text-navy-900">
                {t.contactForm.title}
              </h3>
              <p className="mt-1.5 text-sm text-navy-800/60">{t.contactForm.subtitle}</p>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center text-center py-10">
                  <CheckCircle2 size={44} className="text-teal-500" />
                  <p className="mt-4 text-navy-900 font-semibold max-w-sm">
                    {t.contactForm.success}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 grid sm:grid-cols-2 gap-5">
                  <Field label={t.contactForm.name} placeholder={t.contactForm.namePlaceholder} required />
                  <Field label={t.contactForm.company} placeholder={t.contactForm.companyPlaceholder} />
                  <Field
                    label={t.contactForm.email}
                    placeholder={t.contactForm.emailPlaceholder}
                    type="email"
                    required
                  />
                  <Field label={t.contactForm.phone} placeholder={t.contactForm.phonePlaceholder} type="tel" />

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wide text-navy-800/70 mb-1.5">
                      {t.contactForm.message}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t.contactForm.messagePlaceholder}
                      className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/35 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-shadow resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 hover:bg-teal-600 text-white font-bold px-8 py-3.5 transition-colors shadow-soft"
                    >
                      {t.contactForm.submit}
                      <Send size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, placeholder, type = 'text', required = false }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wide text-navy-800/70 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/35 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-shadow"
      />
    </div>
  )
}
