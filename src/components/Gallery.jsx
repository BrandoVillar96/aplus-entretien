import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

// Free-license photos (Pexels License + Unsplash License — both free for
// commercial use). A mix of the immaculate, premium spaces A Plus Entretien
// maintains (editorial, no people) and real team-in-action shots (staff
// actively cleaning in clinical/office settings, shot in the same polished,
// professional editorial style — not casual snapshots). Weighted toward
// people-in-action shots per the client's request to foreground real
// professional cleaning staff. Swap these src URLs for the client's own
// site/team photos when available (see content.js `gallery.credit` for the
// on-page note).
const PHOTOS = [
  { source: 'pexels', id: 37036967, ext: 'jpeg' }, // pristine healthcare corridor
  { source: 'unsplash', id: '1669101602108-fa5ba89507ee' }, // team in action: clinical disinfection
  { source: 'pexels', id: 33357392, ext: 'png' }, // team in action: cleaning glass doors, modern office
  { source: 'pexels', id: 6195125, ext: 'jpeg' }, // team in action: sanitizing with vacuum & mop
  { source: 'pexels', id: 10988763, ext: 'jpeg' }, // pristine common area
  { source: 'pexels', id: 32978233, ext: 'jpeg' }, // pristine hospitality reception
]

function photoUrl(photo, w = 800) {
  if (photo.source === 'unsplash') {
    return `https://images.unsplash.com/photo-${photo.id}?auto=format&fit=crop&w=${w}&q=80`
  }
  return `https://images.pexels.com/photos/${photo.id}/pexels-photo-${photo.id}.${photo.ext}?auto=compress&cs=tinysrgb&w=${w}`
}

function GalleryPhoto({ photo, alt, caption }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-900">
      {!failed ? (
        <img
          src={photoUrl(photo)}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy-800 to-navy-950 text-slate-500">
          <ImageOff size={26} strokeWidth={1.75} />
          <span className="text-[11px] font-medium text-slate-500 px-4 text-center">{caption}</span>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent p-4 pt-10">
        <span className="text-sm font-semibold text-white">{caption}</span>
      </div>
    </div>
  )
}

export default function Gallery() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">
            {t.gallery.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 leading-tight">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-navy-800/70 leading-relaxed">{t.gallery.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {t.gallery.images.map((img, i) => (
            <GalleryPhoto key={img.caption} photo={PHOTOS[i]} alt={img.alt} caption={img.caption} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-navy-800/40">{t.gallery.credit}</p>
      </div>
    </section>
  )
}
