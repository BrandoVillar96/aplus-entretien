import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

// Free-license photos (Pexels License — free for commercial use, no
// attribution required) of real cleaning/service staff, in uniform.
// One distinct photo per service item (content.js `services.items`, in the
// same order), each picked to actually match that category's setting —
// no repeats, no unrelated environments.
const PHOTOS = [
  { id: 9462206, ext: 'jpeg' }, // Nettoyage commercial
  { id: 9462679, ext: 'jpeg' }, // Bureaux administratifs
  { id: 6195966, ext: 'jpeg' }, // Nettoyage post-construction
  { id: 9462636, ext: 'jpeg' }, // Immeubles et copropriétés
  { id: 5888186, ext: 'jpeg' }, // Cliniques et laboratoires
  { id: 3772615, ext: 'jpeg' }, // Hôtellerie et restauration
  { id: 31335994, ext: 'jpeg' }, // Secteur industriel
  { id: 28761314, ext: 'jpeg' }, // Écoles et centres éducatifs
  { id: 8007588, ext: 'jpeg' }, // Centres sportifs
  { id: 37941666, ext: 'jpeg' }, // Commerces de détail
  { id: 6195115, ext: 'jpeg' }, // Lavage de vitres
  { id: 6197043, ext: 'jpeg' }, // Nettoyage en profondeur
  { id: 9462761, ext: 'jpeg' }, // Conciergerie
  { id: 6195273, ext: 'jpeg' }, // Entretien de tapis
  { id: 4263067, ext: 'jpeg' }, // Décapage et cirage de planchers
]

function photoUrl(photo, w = 500) {
  return `https://images.pexels.com/photos/${photo.id}/pexels-photo-${photo.id}.${photo.ext}?auto=compress&cs=tinysrgb&w=${w}`
}

function ServiceCard({ item, photo }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="group overflow-hidden rounded-2xl bg-white border border-navy-900/8 hover:shadow-card hover:-translate-y-0.5 hover:border-teal-500/40 transition-all duration-200">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
        {photo && !failed ? (
          <img
            src={photoUrl(photo)}
            alt={item.title}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy-800 to-navy-950 text-slate-500">
            <ImageOff size={22} strokeWidth={1.75} />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-heading font-bold text-navy-900 text-base">{item.title}</h3>
        <p className="mt-2 text-sm text-navy-800/65 leading-relaxed">{item.desc}</p>
      </div>
    </div>
  )
}

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
          {t.services.items.map((item, i) => (
            <ServiceCard key={item.title} item={item} photo={PHOTOS[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
