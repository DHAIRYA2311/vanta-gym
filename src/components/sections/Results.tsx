import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';

export const Results = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <SectionHeading 
              title={content.results.heading}
              className="mb-16"
            />
            
            <div className="flex flex-col gap-12">
              {content.results.testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="pl-6 md:pl-10 border-l border-border"
                >
                  <p className="font-display text-2xl md:text-3xl leading-snug mb-6">
                    "{testimonial.quote}"
                  </p>
                  <span className="text-secondary text-sm font-semibold tracking-widest uppercase">
                    — {testimonial.author}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              {content.results.stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <span className="font-display text-5xl md:text-6xl text-primary">
                    {stat.value}
                  </span>
                  <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase border-t border-border pt-4 mt-2">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
