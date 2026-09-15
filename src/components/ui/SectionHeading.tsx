import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string | React.ReactNode;
  className?: string;
}

export const SectionHeading = ({ label, title, className }: SectionHeadingProps) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-secondary text-[11px] font-semibold tracking-[0.2em] uppercase"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight whitespace-pre-line"
      >
        {title}
      </motion.h2>
    </div>
  );
};
