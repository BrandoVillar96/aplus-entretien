import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function CtaBanner() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 to-navy-900 px-8 py-12 sm:px-14 sm:py-16 text-center shadow-soft">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 15%, #fff 0%, transparent 30%), radial-gradient(circle at 85% 85%, #fff 0%, transparent 30%)',
            }}
          />
          <div className="relative">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white max-w-xl mx-auto leading-tight">
              {t.cta.title}
            </h2>
            <p className="mt-3 text-teal-50/90 max-w-md mx-auto">{t.cta.subtitle}</p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-navy-900 font-bold px-7 py-3.5 hover:bg-teal-50 transition-colors"
            >
              {t.cta.button}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
