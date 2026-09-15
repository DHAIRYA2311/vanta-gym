import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { content } from '../../data/content';

export const ImageBreak = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="relative h-[80vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 scale-[1.3]"
      >
        <div className="absolute inset-0 bg-background/60 z-10" />
        <img 
          src={content.imageBreak.image} 
          alt="Atmosphere" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-primary whitespace-pre-line"
        >
          {content.imageBreak.text}
        </motion.h2>
      </div>
    </section>
  );
};
