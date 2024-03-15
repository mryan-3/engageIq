import Companies from './components/Companies.tsx'
import EngageAdvantage from './components/EngageAdvantage.tsx'
import Footer from './components/Footer.tsx'
import Hero from './components/Hero.tsx'
import MainIntegration from './components/MainIntegration.tsx'
import Act from './components/Act.tsx'
import Navbar from './components/Navbar.tsx'
import SecurityIntegration from './components/SecurityIntegration.tsx'
import Features from './components/Features.tsx'
import Centralize from './components/Centralize.tsx'
import Discover from './components/Discover.tsx'

function App() {
  return (
      <div className='bg-primary w-full'>
        <Navbar />
      <Hero />
      <Companies />
      <EngageAdvantage />
      <Centralize />
      <Discover />
      <Act />
      <Features />
      <MainIntegration />
      <SecurityIntegration />
      <Footer />
    </div>
  )
}

export default App
