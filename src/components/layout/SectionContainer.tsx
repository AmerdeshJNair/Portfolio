import React from 'react';
import { cn } from '../../utils/cn';

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  subtitle?: string;
}

export function SectionContainer({ id, title, subtitle, className, children, ...props }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)} {...props}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-3">
                {title}
                <span className="text-primary">.</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-text-secondary max-w-2xl text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
