import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

export const Membership = () => {
  return (
    <section className="py-24" id="membership">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 flex flex-col items-center">
          <SectionHeading 
            title={content.membership.heading}
            className="items-center text-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {content.membership.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={cn(
                "p-8 md:p-10 flex flex-col h-full border transition-colors duration-500",
                plan.recommended 
                  ? "bg-white/5 border-primary/30" 
                  : "bg-transparent border-border hover:border-white/20"
              )}
            >
              <h3 className="font-sans text-lg font-bold tracking-widest uppercase mb-4">
                {plan.name}
              </h3>
              
              <p className="text-secondary text-sm leading-relaxed mb-12 flex-1">
                {plan.description}
              </p>
              
              <div className="pt-8 border-t border-border mt-auto">
                <p className="font-sans text-sm tracking-widest uppercase text-primary">
                  {plan.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Button variant="primary">
            {content.membership.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
