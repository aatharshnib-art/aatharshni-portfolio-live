import Intro from '@/components/layout/Intro';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Leadership from '@/components/sections/Leadership';
import Skills from '@/components/sections/Skills';
import Entrepreneurship from '@/components/sections/Entrepreneurship';
import Interests from '@/components/sections/Interests';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Leadership />
        <Skills />
        <Entrepreneurship />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
