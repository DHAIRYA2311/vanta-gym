import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';

export const Experience = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img 
              src={content.experience.image} 
              alt="The Experience" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col justify-center py-12">
            <SectionHeading 
              label={content.experience.label}
              title={content.experience.heading}
              className="mb-12"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-secondary text-lg leading-relaxed whitespace-pre-line mb-16 max-w-lg"
            >
              {content.experience.body}
            </motion.p>
            
            <div className="flex flex-col">
              {content.experience.features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="py-6 border-t border-border font-sans text-sm tracking-[0.15em] font-semibold text-primary uppercase last:border-b"
                >
                  {feature}
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
