import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';

export const Club = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <SectionHeading title={content.club.heading} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-auto">
          {/* Large main image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 aspect-[16/10] overflow-hidden group"
          >
            <img 
              src={content.club.images[0]} 
              alt="Club environment" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>

          {/* Tall portrait image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto overflow-hidden group"
          >
            <img 
              src={content.club.images[1]} 
              alt="Club environment" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>

          {/* Two smaller images */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-4 aspect-square md:aspect-[4/3] overflow-hidden group"
          >
            <img 
              src={content.club.images[2]} 
              alt="Club environment" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-4 aspect-square md:aspect-[4/3] overflow-hidden group"
          >
            <img 
              src={content.club.images[3]} 
              alt="Club environment" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
