import React from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { personalData } from '../data/personal';
import { Card, CardContent } from '../components/ui/Card';
import { Shield, Database, Brain, Rocket } from 'lucide-react';

export function About() {
  const interestIcons = [
    <Shield className="w-6 h-6 text-primary mb-4" />,
    <Brain className="w-6 h-6 text-primary mb-4" />,
    <Database className="w-6 h-6 text-primary mb-4" />,
    <Shield className="w-6 h-6 text-primary mb-4" />,
    <Rocket className="w-6 h-6 text-primary mb-4" />,
    <Database className="w-6 h-6 text-primary mb-4" />
  ];

  return (
    <SectionContainer id="about" title="About">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          <p>{personalData.about}</p>
          <div className="border-l-2 border-primary/50 pl-4 py-1">
            <p className="text-text-primary italic">
              "Focused on building resilient, scalable, and data-driven systems for critical applications."
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6 text-text-primary">Areas of Focus</h3>
          <div className="grid grid-cols-2 gap-4">
            {personalData.interests.map((interest, idx) => (
              <Card key={idx} className="bg-surface/30 border-border/50 hover:border-primary/30">
                <CardContent className="p-5 flex flex-col items-start">
                  {interestIcons[idx % interestIcons.length]}
                  <span className="font-medium text-sm text-text-primary">{interest}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
