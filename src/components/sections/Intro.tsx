import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';

export const Intro = () => {
  return (
    <section className="py-32 md:py-48" id="the-club">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-5 lg:col-start-1">
            <SectionHeading 
              label={content.intro.label}
              title={content.intro.heading}
            />
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-secondary text-lg md:text-xl leading-relaxed whitespace-pre-line"
            >
              {content.intro.body}
            </motion.p>
          </div>
          
        </div>
      </div>
    </section>
  );
};
