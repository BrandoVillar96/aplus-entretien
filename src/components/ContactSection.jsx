import { useState } from 'react'
import { Phone, Mail, MapPin, Clock3, CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const WEB3FORMS_ACCESS_KEY = '3503ff0e-4753-4455-938f-590c56f821a6'

export default function ContactSection() {
  const { t } = useLanguage()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', 'Nouvelle demande de soumission — A Plus Entretien')
    formData.append('from_name', 'aplusentretien.com')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const result = await response.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
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

              {status === 'success' ? (
                <div className="mt-8 flex flex-col items-center text-center py-10">
                  <CheckCircle2 size={44} className="text-teal-500" />
                  <p className="mt-4 text-navy-900 font-semibold max-w-sm">
                    {t.contactForm.success}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 grid sm:grid-cols-2 gap-5">
                  <Field
                    name="name"
                    label={t.contactForm.name}
                    placeholder={t.contactForm.namePlaceholder}
                    required
                  />
                  <Field
                    name="company"
                    label={t.contactForm.company}
                    placeholder={t.contactForm.companyPlaceholder}
                  />
                  <Field
                    name="address"
                    label={t.contactForm.address}
                    placeholder={t.contactForm.addressPlaceholder}
                  />
                  <Field
                    name="email"
                    label={t.contactForm.email}
                    placeholder={t.contactForm.emailPlaceholder}
                    type="email"
                    required
                  />
                  <Field
                    name="phone"
                    label={t.contactForm.phone}
                    placeholder={t.contactForm.phonePlaceholder}
                    type="tel"
                  />

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wide text-navy-800/70 mb-1.5">
                      {t.contactForm.service}
                    </label>
                    <select
                      name="service"
                      defaultValue=""
                      className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-shadow bg-white"
                    >
                      <option value="" disabled>
                        {t.contactForm.servicePlaceholder}
                      </option>
                      {t.contactForm.serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wide text-navy-800/70 mb-1.5">
                      {t.contactForm.message}
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder={t.contactForm.messagePlaceholder}
                      className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/35 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-shadow resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="sm:col-span-2 flex items-start gap-2.5 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
                      <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{t.contactForm.error}</p>
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 hover:bg-teal-600 text-white font-bold px-8 py-3.5 transition-colors shadow-soft disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? t.contactForm.sending : t.contactForm.submit}
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

function Field({ name, label, placeholder, type = 'text', required = false }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wide text-navy-800/70 mb-1.5">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/35 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-shadow"
      />
    </div>
  )
}
