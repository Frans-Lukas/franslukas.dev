import React from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "kjellgustafsson.com",
      description: "A personal website built for artist Kjell Gustavsson, showcasing his portfolio, biography, and contact information.",
      image: "/images/kjellgustafsson_mockup_p_abstract.png",
      techs: ["Wix", "HTML", "CSS", "JavaScript"],
      link: "https://kjellgustafsson.com",
    },
    {
      title: "samrosen.art",
      description: "An art portfolio website for Sam Rosen, featuring galleries, artist statement, and exhibition history.",
      image: "/images/samrosen_mobile_mockup.png",
      techs: ["Shopify", "HTML", "CSS", "JavaScript", "Liquid"],
      link: "https://samrosen.art",
    }
  ];
  

  return (
    <section id="projects" className="section bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-center">Featured Projects</h2>
        <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        Some of my recent client projects, showcasing my web development and design expertise.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a 
              key={project.title} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow opacity-0 animate-fade-in h-full" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <span className="text-foreground/70">
                      <ArrowUpRight size={20} />
                    </span>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map(tech => (
                      <span key={tech} className="text-xs bg-background px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Visit site
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
