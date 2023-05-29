import { Technologies } from './components/Sections/Technologies'
import { Hero } from './components/Sections/Hero'
import { Footer } from './components/Sections/Footer'
import { About } from './components/Sections/About'

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Footer />
    </>
  )
}

export default HomePage
