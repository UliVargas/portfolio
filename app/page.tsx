import { About } from './components/Sections/About';
import { Footer } from './components/Sections/Footer';
import { Technologies } from './components/Sections/Technologies';
import { Hero } from './components/Sections/Hero';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Footer />
    </>
  );
}

export default HomePage
