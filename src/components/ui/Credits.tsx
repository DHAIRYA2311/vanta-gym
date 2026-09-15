import { motion } from 'framer-motion';

export const Credits = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-6 right-6 z-[100]"
    >
      <div className="bg-background/80 backdrop-blur-md border border-border/50 px-4 py-2 rounded shadow-2xl">
        <p className="font-sans text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-primary/80 uppercase hover:text-primary transition-colors cursor-default">
          Made By Dhairya
        </p>
      </div>
    </motion.div>
  );
};
