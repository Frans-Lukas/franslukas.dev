
import React from 'react';
import { CheckCircle, Server, Globe, Database, Code, Layers, Bot, Zap } from 'lucide-react';

const Skills = () => {
  const techSkills = [
    {
      category: "Backend",
      icon: <Server className="h-6 w-6 text-blue-600" />,
      skills: ["Java", "Kubernetes", "Microservices", "System Design", "Observability"]
    },
    {
      category: "Frontend",
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      skills: ["React", "TypeScript", "C++", "Android", "HTML/CSS"]
    },
    {
      category: "Databases",
      icon: <Database className="h-6 w-6 text-blue-600" />,
      skills: ["PostgreSQL", "SQL", "Data Modeling", "Database Design"]
    },
    {
      category: "Monitoring",
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      skills: ["Grafana", "Metrics", "Logging", "Alerting", "Dashboards"]
    },
    {
      category: "AI Tools",
      icon: <Bot className="h-6 w-6 text-blue-600" />,
      skills: ["Lovable", "Cursor", "ChatGPT", "AI-Assisted Development"]
    }
  ];

  const softSkills = [
    "Rapid prototyping",
    "Fast innovation",
    "Problem solving",
    "System thinking",
    "Technical writing",
    "Remote collaboration",
    "Early AI adoption",
    "Quick implementation"
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
                I help clients solve problems quickly and effectively through AI-assisted development. 
                My approach combines backend expertise with cutting-edge AI tools to:
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
                <span className="font-medium flex items-center"><Zap className="h-4 w-4 mr-1 inline text-purple-500" /> Problem to Solution:</span> Give me a problem, and I'll solve it quickly using my combined experience with backend systems and AI-assisted development.
              </p>
              <p>
                <span className="font-medium flex items-center"><Zap className="h-4 w-4 mr-1 inline text-purple-500" /> AI Workflow:</span> I use Lovable to create the initial framework, Cursor for refining code, and ChatGPT for mockups, copy, and technical challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
