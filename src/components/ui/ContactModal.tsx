import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { cn } from '../../utils/cn';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: "100%", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: "100%", scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-6 pointer-events-none"
          >
            <div 
              className="w-full max-w-2xl bg-[#0F0F0F] border border-border p-8 md:p-12 relative pointer-events-auto overflow-y-auto max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-secondary hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {!submitted ? (
                <div className="flex flex-col gap-10">
                  <div>
                    <span className="text-secondary text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 block">
                      Join The Club
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
                      BOOK A PRIVATE TOUR.
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">
                          First Name
                        </label>
                        <input 
                          type="text" 
                          required
                          className="bg-transparent border-b border-border/50 py-3 text-primary focus:outline-none focus:border-primary transition-colors text-sm font-sans"
                          placeholder="Your first name"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">
                          Last Name
                        </label>
                        <input 
                          type="text" 
                          required
                          className="bg-transparent border-b border-border/50 py-3 text-primary focus:outline-none focus:border-primary transition-colors text-sm font-sans"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          required
                          className="bg-transparent border-b border-border/50 py-3 text-primary focus:outline-none focus:border-primary transition-colors text-sm font-sans"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          className="bg-transparent border-b border-border/50 py-3 text-primary focus:outline-none focus:border-primary transition-colors text-sm font-sans"
                          placeholder="+91 00000 00000"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">
                        Primary Goal
                      </label>
                      <select className="bg-transparent border-b border-border/50 py-3 text-primary focus:outline-none focus:border-primary transition-colors text-sm font-sans appearance-none rounded-none cursor-pointer">
                        <option value="performance" className="bg-background text-primary">Performance & Strength</option>
                        <option value="weight-loss" className="bg-background text-primary">Body Composition</option>
                        <option value="mobility" className="bg-background text-primary">Mobility & Recovery</option>
                        <option value="other" className="bg-background text-primary">Other / General Fitness</option>
                      </select>
                    </div>

                    <Button type="submit" variant="primary" className="mt-4 w-full">
                      REQUEST INVITATION
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
                  <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-4">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                    REQUEST RECEIVED.
                  </h2>
                  <p className="text-secondary text-sm leading-relaxed max-w-sm">
                    Thank you for your interest in VANTA. A member of our team will contact you shortly to schedule your private tour.
                  </p>
                  <Button variant="outline" className="mt-8" onClick={onClose}>
                    CLOSE
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
