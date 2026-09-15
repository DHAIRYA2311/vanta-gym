import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/content';
import { cn } from '../../utils/cn';
import { X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar = ({ onOpenContact }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['THE CLUB', 'TRAINING', 'COACHES', 'MEMBERSHIP'];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled ? "bg-background/90 backdrop-blur-md py-4 border-b border-border" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="font-sans font-bold text-xl tracking-widest uppercase">
            {content.brand.name}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-[11px] font-semibold tracking-[0.15em] text-secondary hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button onClick={onOpenContact} className="group flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] hover:text-accent transition-colors">
              BOOK A TOUR 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em]"
            onClick={() => setMobileMenuOpen(true)}
          >
            MENU
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-background flex flex-col"
          >
            <div className="container mx-auto px-6 py-6 flex items-center justify-between border-b border-border/50">
              <span className="font-sans font-bold text-xl tracking-widest uppercase">
                {content.brand.name}
              </span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-secondary hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 container mx-auto px-6 flex flex-col justify-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-4xl sm:text-5xl uppercase tracking-tight"
                >
                  {link}
                </motion.a>
              ))}
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + links.length * 0.1, duration: 0.5 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="mt-8 flex items-center gap-2 text-sm font-bold tracking-[0.15em] text-accent text-left"
              >
                BOOK A TOUR <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
