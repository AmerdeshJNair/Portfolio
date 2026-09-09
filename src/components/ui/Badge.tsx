import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'primary';
}

export function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
  
  const variants = {
    default: "bg-surface-light text-text-primary hover:bg-surface-light/80 border border-border",
    outline: "text-text-primary border border-border hover:bg-surface-light/50",
    primary: "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
