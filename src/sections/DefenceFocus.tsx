import React from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { Crosshair, ShieldAlert, Cpu } from 'lucide-react';

export function DefenceFocus() {
  const focuses = [
    {
      title: "Defence Technology",
      description: "Interested in the application of modern software engineering and systems architecture to solve complex challenges in defence and security domains.",
      icon: <Crosshair className="w-8 h-8 text-primary" />
    },
    {
      title: "Security & Intelligence",
      description: "Focused on robust data pipelines and analytical models that can provide actionable intelligence and threat detection capabilities.",
      icon: <ShieldAlert className="w-8 h-8 text-primary" />
    },
    {
      title: "Aerospace Systems",
      description: "Keen interest in the intersection of AI/ML with aerospace technologies, including predictive maintenance and autonomous systems.",
      icon: <Cpu className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <SectionContainer 
      id="defence-focus" 
      className="bg-surface/30 border-y border-border/50 relative overflow-hidden"
    >
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
          Strategic Focus
        </h2>
        <p className="text-text-secondary text-lg">
          Beyond general software engineering, my interests align with sectors that require high-reliability systems, rigorous data analysis, and advanced algorithmic problem-solving.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {focuses.map((focus, i) => (
          <div key={i} className="flex flex-col items-center text-center p-6 bg-background/50 rounded-xl border border-border/30 hover:border-primary/30 transition-colors">
            <div className="p-4 bg-surface rounded-full mb-6 border border-border shadow-lg">
              {focus.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-text-primary">{focus.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{focus.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
