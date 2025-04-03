
import React from 'react';
import { CheckCircle, Server, Globe, Database, Code, Layers } from 'lucide-react';

const Skills = () => {
  const techSkills = [
    {
      category: "Frontend",
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"]
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6 text-blue-600" />,
      skills: ["Node.js", "Express", "API Design", "Microservices", "System Design"]
    },
    {
      category: "Databases",
      icon: <Database className="h-6 w-6 text-blue-600" />,
      skills: ["PostgreSQL", "MongoDB", "SQL", "Data Modeling", "Database Design"]
    },
    {
      category: "Full-Stack",
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      skills: ["Wasp", "JAMstack", "GraphQL", "REST APIs", "Authentication/Authorization"]
    },
    {
      category: "Development",
      icon: <Code className="h-6 w-6 text-blue-600" />,
      skills: ["Git", "CI/CD", "Testing", "Docker", "AWS"]
    }
  ];

  const softSkills = [
    "Rapid prototyping",
    "Clean architecture",
    "Fast iteration",
    "Problem solving",
    "Client communication",
    "Remote collaboration",
    "Technical writing",
    "System thinking"
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-medium mb-6">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {techSkills.map((tech, index) => (
                <div key={tech.category} className="bg-white p-6 rounded-lg shadow-sm border opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center mb-4">
                    {tech.icon}
                    <h4 className="text-xl ml-2 font-medium">{tech.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {tech.skills.map(skill => (
                      <li key={skill} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills & Work Approach */}
          <div>
            <h3 className="text-2xl font-medium mb-6">Work Approach</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-8 opacity-0 animate-fade-in">
              <p className="text-lg mb-4">
                My approach to work is centered around flexibility, collaboration, and efficiency. 
                I prefer working solo or in very small teams (1–2 people), which allows for:
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mt-4">
                {softSkills.map((skill, index) => (
                  <li key={skill} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg opacity-0 animate-fade-in animation-delay-200">
              <h3 className="text-xl font-medium mb-4">How I Work</h3>
              <p className="mb-3">
                I'm remote-first and value lifestyle flexibility. This means I can collaborate efficiently 
                across time zones and adapt to your project needs.
              </p>
              <p>
                My background in system design at Spotify combined with solo freelancing experience gives me 
                a unique perspective on building efficient, scalable solutions without unnecessary complexity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
