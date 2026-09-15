import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { Button } from '../ui/Button';

export const CTA = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <img 
          src={content.cta.image} 
          alt="Premium Gym Interior" 
          className="w-full h-full object-cover filter grayscale opacity-30"
        />
      </div>
      
      <div className="container relative z-20 mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight mb-12 whitespace-pre-line"
        >
          {content.cta.heading}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-secondary text-lg md:text-xl leading-relaxed max-w-lg mb-12 whitespace-pre-line"
        >
          {content.cta.body}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="primary" className="px-10 py-5">
            {content.cta.button}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
