import Companies from './components/Companies.tsx'
import Footer from './components/Footer.tsx'
import Hero from './components/Hero.tsx'
import MainIntegration from './components/MainIntegration.tsx'
import Navbar from './components/Navbar.tsx'
import SecurityIntegration from './components/SecurityIntegration.tsx'

function App() {
  return (
    <>
        <Navbar />
      <Hero />
      <Companies />
      <MainIntegration />
      <SecurityIntegration />
      <Footer />
    </>
  )
}

export default App
