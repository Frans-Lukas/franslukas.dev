
import React from 'react';
import { GraduationCap, Code, Briefcase, Drum, Hammer, Bot } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-6 opacity-0 animate-slide-in">
              I'm Frans-Lukas, a backend engineer with an MSc in Computer Science 
              from Umeå University. I worked at Spotify for nearly three years building infrastructure 
              in Java on Kubernetes, writing C++ client code, and developing internal tools with TypeScript and React.
            </p>
            <p className="text-lg mb-6 opacity-0 animate-slide-in animation-delay-100">
              My approach centers on AI-assisted development to create prototypes quickly and effectively. 
              I use tools like Lovable, Cursor, and ChatGPT to transform ideas into functional products in 
              record time — this website itself was built in just two hours using Lovable and Cursor.
            </p>
            <p className="text-lg opacity-0 animate-slide-in animation-delay-200">
              When I'm not coding, you might find me working with ceramics or exploring tarot—creative 
              interests that inform my approach to problem-solving and design. 
              You can see that side of me at <a href="https://franslukas.art" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">franslukas.art</a>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary p-6 rounded-lg opacity-0 animate-fade-in">
              <GraduationCap className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Education</h3>
              <p>MSc in Computer Science, Umeå University</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg opacity-0 animate-fade-in animation-delay-100">
              <Briefcase className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Experience</h3>
              <p>Backend Engineer at Spotify</p>
              <p>3 years of Java & Kubernetes</p>
              <p>Android Development</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg opacity-0 animate-fade-in animation-delay-200">
              <Code className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Focus Areas</h3>
              <p>Java Backend Systems</p>
              <p>Observability & Monitoring</p>
              <p>System Design</p>
              <p>Kubernetes</p>
              <p>Grafana</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg opacity-0 animate-fade-in animation-delay-300">
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-purple-500 mr-2" />
              </div>
              <h3 className="text-xl font-medium mb-2">AI-Assisted Dev</h3>
              <p>Lovable for rapid prototyping</p>
              <p>Cursor for code refinement</p>
              <p>ChatGPT for mockups & solutions</p>
              <p>Early AI adopter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
