import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center pt-24 overflow-hidden">
      {/* Background Image with Parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-background/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <img 
          src={content.hero.image}
          alt="Premium Gym Environment" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-start justify-center h-full pb-20">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-secondary text-[11px] font-semibold tracking-[0.2em] uppercase">
            {content.hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1 
          className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {content.hero.title.split('\n').map((line, i) => (
            <motion.span 
              key={i} 
              className="block overflow-hidden"
            >
              <motion.span 
                className="block"
                variants={{
                  hidden: { y: "100%" },
                  visible: { 
                    y: 0,
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
              >
                {line}
              </motion.span>
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col gap-10 md:flex-row md:items-center"
        >
          <p className="text-secondary font-sans text-lg leading-relaxed whitespace-pre-line max-w-md">
            {content.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button variant="primary">
              {content.hero.primaryCta}
            </Button>
            <Button variant="outline">
              {content.hero.secondaryCta}
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="w-full h-full bg-white absolute top-0 left-0"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
