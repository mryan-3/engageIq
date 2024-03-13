import Companies from './components/Companies.tsx'
import EngageAdvantage from './components/EngageAdvantage.tsx'
import Footer from './components/Footer.tsx'
import Hero from './components/Hero.tsx'
import MainIntegration from './components/MainIntegration.tsx'
import Act from './components/Act.tsx'
import Navbar from './components/Navbar.tsx'
import SecurityIntegration from './components/SecurityIntegration.tsx'

function App() {
  return (
      <div className='bg-primary w-full'>
        <Navbar />
      <Hero />
      <Companies />
      <EngageAdvantage />
      <Act />
      <MainIntegration />
      <SecurityIntegration />
      <Footer />
    </div>
  )
}

export default App
