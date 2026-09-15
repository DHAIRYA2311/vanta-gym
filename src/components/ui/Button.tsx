import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-sm px-8 py-4 font-sans text-sm font-medium tracking-wide uppercase transition-all duration-500 ease-out",
          {
            "bg-primary text-background hover:bg-[#DCD9D2]": variant === 'primary',
            "bg-transparent text-primary hover:text-accent": variant === 'secondary',
            "border border-border bg-transparent text-primary hover:bg-white/5": variant === 'outline',
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
