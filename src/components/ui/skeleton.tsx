import { cn } from '@/lib/utils';

const skeletonVariants = {
  default: 'glass bg-primary/10',
  glass: 'glass bg-white/10',
  glassDark: 'glass-dark bg-black/10',
  shimmer: 'glass bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer',
  pulse: 'glass bg-primary/10 animate-pulse-glow',
};

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof skeletonVariants;
}

function Skeleton({
  className,
  variant = 'default',
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md',
        skeletonVariants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Skeleton, skeletonVariants };
