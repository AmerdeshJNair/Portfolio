import React from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { experienceData } from '../data/experience';
import { Card, CardContent } from '../components/ui/Card';
import { GraduationCap, Briefcase } from 'lucide-react';

export function Experience() {
  const education = experienceData.filter(item => item.type === 'education');
  const experience = experienceData.filter(item => item.type === 'experience');

  const TimelineItem = ({ item, icon: Icon }: { item: any, icon: any }) => (
    <div className="relative pl-8 pb-8 last:pb-0 border-l border-border/50 ml-4">
      <div className="absolute -left-3 top-0 bg-surface border border-primary text-primary p-1 rounded-full">
        <Icon size={14} />
      </div>
      <Card className="bg-surface/40 border-border/50">
        <CardContent className="p-5">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h4 className="font-semibold text-lg text-text-primary">{item.title}</h4>
            <span className="text-sm font-medium text-primary mt-1 sm:mt-0">{item.period}</span>
          </div>
          <p className="text-text-primary font-medium mb-4">{item.organization}</p>
          <ul className="space-y-2">
            {item.description.map((desc: string, i: number) => (
              <li key={i} className="text-sm text-text-secondary flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                {desc}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <SectionContainer id="experience" title="Experience & Education">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-text-primary flex items-center gap-3">
            <Briefcase className="text-primary" /> Professional Experience
          </h3>
          <div className="space-y-4">
            {experience.length > 0 ? (
              experience.map(item => <TimelineItem key={item.id} item={item} icon={Briefcase} />)
            ) : (
              <p className="text-text-secondary italic ml-4">Experience details to be added.</p>
            )}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-text-primary flex items-center gap-3">
            <GraduationCap className="text-primary" /> Education
          </h3>
          <div className="space-y-4">
            {education.map(item => <TimelineItem key={item.id} item={item} icon={GraduationCap} />)}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
