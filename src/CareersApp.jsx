import { useEffect } from 'react'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import Header from './components/Header'
import Careers from './components/Careers'
import Footer from './components/Footer'

function DocumentTitle() {
  const { t, lang } = useLanguage()
  useEffect(() => {
    document.title = t.careers.meta.title
    document.documentElement.lang = lang
  }, [t, lang])
  return null
}

function Page() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <DocumentTitle />
      <Header />
      <main>
        <Careers />
      </main>
      <Footer />
    </div>
  )
}

export default function CareersApp() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  )
}
