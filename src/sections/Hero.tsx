import React from 'react';
import { personalData } from '../data/personal';
import { Button } from '../components/ui/Button';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">
            Data • Analytics • Security
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-text-primary mb-6 leading-tight">
            {personalData.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-text-secondary font-light mb-8 max-w-2xl leading-relaxed">
            Building rigorous technical solutions across <span className="text-text-primary font-medium">Computer Science</span>, <span className="text-text-primary font-medium">Data</span>, <span className="text-text-primary font-medium">AI</span>, and <span className="text-text-primary font-medium">Defence Technology</span>.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
            <a href="#projects">
              <Button size="lg" variant="primary" className="gap-2">
                View Projects <ArrowRight size={16} />
              </Button>
            </a>
            <a href={personalData.resume} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2">
                Download Resume <Download size={16} />
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href={personalData.github} className="text-text-secondary hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
              <FiGithub size={20} /> <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href={personalData.linkedin} className="text-text-secondary hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
              <FiLinkedin size={20} /> <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href={`mailto:${personalData.email}`} className="text-text-secondary hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
              <Mail size={20} /> <span className="hidden sm:inline">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
