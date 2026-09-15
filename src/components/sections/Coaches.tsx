import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';

export const Coaches = () => {
  return (
    <section className="py-24" id="coaches">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <SectionHeading 
            label={content.coaches.label}
            title={content.coaches.heading}
            className="md:w-1/2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {content.coaches.items.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale hover:grayscale-0"
                />
              </div>
              
              <h3 className="font-display text-3xl mb-2">{coach.name}</h3>
              <p className="text-primary font-sans text-sm tracking-wider uppercase mb-3">
                {coach.role}
              </p>
              
              <div className="h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <p className="text-secondary text-sm pt-2 border-t border-border mt-2">
                  {coach.expertise}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
