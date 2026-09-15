import { useState } from 'react';
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
import { Credits } from './components/ui/Credits';
import { ContactModal } from './components/ui/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div className="bg-background min-h-screen relative">
      <Navbar onOpenContact={handleOpenContact} />
      
      <main>
        <Hero onOpenContact={handleOpenContact} />
        <Intro />
        <Programs />
        <Experience />
        <ImageBreak />
        <Club />
        <Coaches />
        <Results />
        <Membership onOpenContact={handleOpenContact} />
        <CTA onOpenContact={handleOpenContact} />
      </main>

      <Footer />
      <Credits />
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}

export default App;
