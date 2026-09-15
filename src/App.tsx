import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Intro } from './components/sections/Intro';
import { Programs } from './components/sections/Programs';
import { Experience } from './components/sections/Experience';
import { ImageBreak } from './components/sections/ImageBreak';
import { Club } from './components/sections/Club';
import { Coaches } from './components/sections/Coaches';
import { Results } from './components/sections/Results';
import { Membership } from './components/sections/Membership';
import { CTA } from './components/sections/CTA';

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Intro />
        <Programs />
        <Experience />
        <ImageBreak />
        <Club />
        <Coaches />
        <Results />
        <Membership />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
