import { BadgeCheck } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function TrustBar() {
  const { t } = useLanguage()

  return (
    <div className="bg-white border-b border-navy-900/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {t.trustBar.map((item) => (
          <div key={item} className="flex items-center gap-2 text-navy-800/80">
            <BadgeCheck size={18} className="text-teal-600 shrink-0" />
            <span className="text-sm font-semibold">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
