import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-background',
        glass: 'glass hover:shadow-lg hover:shadow-primary/20 focus-visible:shadow-lg focus-visible:shadow-primary/20',
        glassDark: 'glass-dark hover:shadow-lg hover:shadow-primary/20 focus-visible:shadow-lg focus-visible:shadow-primary/20',
        gradient: 'bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 hover:from-primary/30 hover:via-primary/20 hover:to-primary/30',
        shimmer: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
      },
      hover: {
        lift: 'hover:-translate-y-1',
        scale: 'hover:scale-105',
        glow: 'hover:shadow-lg hover:shadow-primary/20',
        none: '',
      },
      animation: {
        pulse: 'animate-pulse-glow',
        shimmer: 'animate-shimmer',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      hover: 'none',
      animation: 'none',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, hover, animation, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, hover, animation }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input, inputVariants };
