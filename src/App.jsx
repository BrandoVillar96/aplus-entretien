import { useEffect } from 'react'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Services from './components/Services'
import Impact from './components/Impact'
import DeepClean from './components/DeepClean'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import Promotions from './components/Promotions'
import CtaBanner from './components/CtaBanner'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function DocumentTitle() {
  const { t, lang } = useLanguage()
  useEffect(() => {
    document.title = t.meta.title
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
        <Hero />
        <Promotions />
        <TrustBar />
        <About />
        <Services />
        <Impact />
        <DeepClean />
        <Gallery />
        <WhyUs />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  )
}
