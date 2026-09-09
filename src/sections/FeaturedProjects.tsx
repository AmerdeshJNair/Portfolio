import React from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { projectsData } from '../data/projects';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function FeaturedProjects() {
  return (
    <SectionContainer 
      id="projects" 
      title="Featured Projects" 
      subtitle="Selected works demonstrating capabilities in AI/ML, data analytics, and software engineering."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <Card key={project.id} className="flex flex-col h-full">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
              </div>
              <p className="text-text-secondary text-sm mt-2 flex-grow">
                {project.shortDescription}
              </p>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-4">
                <p className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">Key Result</p>
                <p className="text-primary text-sm font-medium bg-primary/5 p-3 rounded-md border border-primary/10">
                  {project.keyResult}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="outline">+{project.technologies.length - 4}</Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-border/50 pt-4 mt-auto">
              <div>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="gap-2 px-2">
                      <FiGithub size={16} /> Code
                    </Button>
                  </a>
                )}
              </div>
              <Link to={`/project/${project.id}`}>
                <Button variant="default" size="sm" className="gap-2">
                  View Details <ArrowRight size={16} />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
