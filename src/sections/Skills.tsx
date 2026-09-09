import React from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { skillsData } from '../data/skills';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export function Skills() {
  const skillCategories = [
    { title: "Programming", skills: skillsData.programming },
    { title: "Data Analytics", skills: skillsData.dataAnalytics },
    { title: "Machine Learning / AI", skills: skillsData.machineLearning },
    { title: "Tools & Development", skills: skillsData.tools },
    { title: "Other Technologies", skills: skillsData.other },
  ];

  return (
    <SectionContainer 
      id="skills" 
      title="Technical Capabilities" 
      subtitle="A comprehensive overview of programming languages, frameworks, and analytical tools."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.title} className="bg-surface/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-primary">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
