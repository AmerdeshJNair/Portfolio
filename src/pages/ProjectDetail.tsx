import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SectionContainer } from '../components/layout/SectionContainer';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { Card, CardContent } from '../components/ui/Card';

export function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl text-text-primary mb-4">Project not found</h1>
          <Link to="/">
            <Button variant="outline"><ArrowLeft className="mr-2" size={16}/> Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const sections = [
    { title: "Problem Statement", content: project.problem },
    { title: "Objective", content: project.objective },
    { title: "Dataset", content: project.dataset },
    { title: "Methodology", content: project.methodology },
    { title: "Architecture / Workflow", content: project.architecture },
    { title: "Implementation", content: project.implementation },
    { title: "Challenges", content: project.challenges },
    { title: "Lessons Learned", content: project.lessons },
    { title: "Future Improvements", content: project.future },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <SectionContainer id="project-header" className="pb-10">
          <Link to="/" className="inline-flex items-center text-text-secondary hover:text-primary transition-colors mb-8 text-sm font-medium">
            <ArrowLeft className="mr-2" size={16} /> Back to Portfolio
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-text-secondary mb-8 max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.map(tech => (
              <Badge key={tech} variant="primary">{tech}</Badge>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">
                  <FiGithub size={18} /> View Source
                </Button>
              </a>
            )}
            {project.paperUrl && (
              <a href={project.paperUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="gap-2">
                  <ExternalLink size={18} /> Research Paper
                </Button>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <ExternalLink size={18} /> Live Demo
                </Button>
              </a>
            )}
          </div>
        </SectionContainer>

        <SectionContainer id="project-content" className="pt-0 border-t border-border/30 mt-10">
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            
            <div className="md:col-span-2 space-y-12">
              {sections.map((section, idx) => {
                if (!section.content) return null;
                return (
                  <div key={idx}>
                    <h2 className="text-2xl font-semibold text-text-primary mb-4">{section.title}</h2>
                    <p className="text-text-secondary leading-relaxed whitespace-pre-wrap">
                      {section.content}
                    </p>
                  </div>
                );
              })}
              
              {project.results && project.results.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-text-primary mb-4">Results & Visualizations</h2>
                  <ul className="space-y-4">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="bg-surface/50 p-4 rounded-lg border border-border/50 text-text-secondary">
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="md:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-4 border-b border-border/50 pb-2">Key Outcome</h3>
                  <div className="bg-primary/5 p-4 rounded-md border border-primary/20 text-primary font-medium mb-6">
                    {project.keyResult}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-text-primary mb-4 border-b border-border/50 pb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
          </div>
        </SectionContainer>
      </main>

      <Footer />
    </div>
  );
}
