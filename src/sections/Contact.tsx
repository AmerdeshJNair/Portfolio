import React from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { personalData } from '../data/personal';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export function Contact() {
  return (
    <SectionContainer id="contact" title="Get in Touch" subtitle="Currently exploring opportunities in Defence, Aerospace, AI/ML, and Data Analytics.">
      <div className="max-w-2xl mx-auto mt-8">
        <Card className="bg-surface/50 border-primary/20">
          <CardContent className="p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-text-primary">Ready to collaborate?</h3>
              <p className="text-text-secondary max-w-md">
                I am open to discussions regarding roles that challenge my technical capabilities and align with my strategic interests.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <a href={`mailto:${personalData.email}`}>
                <Button variant="primary" className="w-full gap-2 justify-center">
                  <Mail size={18} /> Email Me
                </Button>
              </a>
              <div className="flex gap-4">
                <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full justify-center">
                    <FiLinkedin size={18} />
                  </Button>
                </a>
                <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full justify-center">
                    <FiGithub size={18} />
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  );
}
