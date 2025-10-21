import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Experience from '../components/Experience';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Portfolio />
      <WhyChooseUs />
      <Pricing />
      <Experience />
      <Contact />
    </>
  );
};

export default HomePage;