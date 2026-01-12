import './App.css'
import { HeroSection } from './component/hero_session'
// import { Header } from './component/header'
import {  Footer } from './component/footers'
import { PartnersSection  } from './component/partner_session'
import { Baniere } from './component/baniere'
import { SectorsSection } from './component/sectors'
import { AnimatedLogo } from './component/animated_logo'
import { Header } from './component/headerAfterReview'
import { FooterProposition } from './component/footerProposition'
function App() {

  return (
    <>
      <Header />
      <Baniere />
      {/* <HeroSection /> */}
      <AnimatedLogo />
      <SectorsSection />
      <PartnersSection />
      <Footer />
      <FooterProposition />
    </>
  )
}

export default App
