import React from 'react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { FeaturedProjects } from '../sections/FeaturedProjects';
import { Skills } from '../sections/Skills';
import { Experience } from '../sections/Experience';
import { DefenceFocus } from '../sections/DefenceFocus';
import { Contact } from '../sections/Contact';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <DefenceFocus />
        <FeaturedProjects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
