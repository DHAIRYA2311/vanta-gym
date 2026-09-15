import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Programs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24" id="training">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24">
          <SectionHeading 
            label={content.programs.label}
            title={content.programs.heading}
          />
        </div>

        <div className="flex flex-col border-t border-border">
          {content.programs.items.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-border py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer"
            >
              {/* Desktop Hover Image Reveal */}
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] pointer-events-none z-10 overflow-hidden">
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full h-full"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex items-start gap-8 md:gap-16 relative z-20">
                <span className={cn(
                  "font-sans text-sm tracking-widest font-bold transition-colors duration-300",
                  hoveredIndex === index ? "text-accent" : "text-secondary"
                )}>
                  {item.id}
                </span>
                
                <h3 className={cn(
                  "font-display text-4xl md:text-5xl lg:text-6xl tracking-tight transition-transform duration-500",
                  hoveredIndex === index ? "md:translate-x-4" : ""
                )}>
                  {item.title}
                </h3>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 relative z-20 md:w-1/2 justify-end">
                <p className={cn(
                  "text-secondary text-sm md:text-base leading-relaxed max-w-sm transition-all duration-500",
                  hoveredIndex === index ? "md:-translate-x-4 text-primary" : ""
                )}>
                  {item.description}
                </p>
                
                <div className={cn(
                  "hidden md:flex w-12 h-12 rounded-full border border-border items-center justify-center transition-all duration-300",
                  hoveredIndex === index ? "bg-primary text-background border-primary" : "bg-transparent text-primary"
                )}>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
