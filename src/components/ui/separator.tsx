import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const separatorVariants = cva(
  'shrink-0 transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-border',
        glass: 'glass bg-white/10 backdrop-blur-md',
        glassDark: 'glass-dark bg-black/10 backdrop-blur-md',
        gradient: 'bg-gradient-to-r from-transparent via-border to-transparent animate-shimmer',
        glow: 'bg-primary/20 animate-pulse-glow',
      },
      orientation: {
        horizontal: 'h-[1px] w-full',
        vertical: 'h-full w-[1px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      orientation: 'horizontal',
    },
  }
);

type SeparatorVariantProps = VariantProps<typeof separatorVariants>;

interface SeparatorProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>, 'orientation'> {
  decorative?: boolean;
  variant?: SeparatorVariantProps['variant'];
  orientation?: 'horizontal' | 'vertical';
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { className, orientation = 'horizontal', decorative = true, variant, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(separatorVariants({ orientation, variant }), className)}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator, separatorVariants };
