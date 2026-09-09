import React from 'react';
import { personalData } from '../../data/personal';
import { Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10 mt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href={personalData.github} className="text-text-secondary hover:text-primary transition-colors" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href={personalData.linkedin} className="text-text-secondary hover:text-primary transition-colors" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href={`mailto:${personalData.email}`} className="text-text-secondary hover:text-primary transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
