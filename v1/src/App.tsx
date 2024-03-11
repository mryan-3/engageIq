import Companies from './components/Companies.tsx'
import Footer from './components/Footer.tsx'
import Hero from './components/Hero.tsx'
import Navbar from './components/Navbar.tsx'
import SecurityIntegration from './components/SecurityIntegration.tsx'

function App() {
  return (
    <>
        <Navbar />
      <Hero />
      <Companies />
      <SecurityIntegration />
      <Footer />
    </>
  )
}

export default App
