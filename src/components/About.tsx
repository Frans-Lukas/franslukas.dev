
import React from 'react';
import { GraduationCap, Code, Music, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-6 opacity-0 animate-slide-in">
              I'm Frans-Lukas, a freelance full-stack developer with an MSc in Computer Science 
              from Umeå University. I previously worked as a backend engineer at Spotify where I 
              honed my skills in system design and rapid prototyping.
            </p>
            <p className="text-lg mb-6 opacity-0 animate-slide-in animation-delay-100">
              My focus is on turning ideas into functional products quickly and intuitively. 
              I prefer working solo or in very small teams, valuing clean architecture, 
              fast iteration, and flexibility.
            </p>
            <p className="text-lg opacity-0 animate-slide-in animation-delay-200">
              When I'm not coding, you might find me working with ceramics or exploring tarot—creative 
              interests that inform my approach to problem-solving and design. 
              You can see that side of me at <a href="https://franslukas.art" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">franslukas.art</a>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary p-6 rounded-lg opacity-0 animate-fade-in">
              <GraduationCap className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Education</h3>
              <p>MSc in Computer Science, Umeå University</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg opacity-0 animate-fade-in animation-delay-100">
              <Briefcase className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Experience</h3>
              <p>Backend Engineer at Spotify</p>
              <p>Freelance Developer</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg opacity-0 animate-fade-in animation-delay-200">
              <Code className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Focus Areas</h3>
              <p>System Design</p>
              <p>Rapid Prototyping</p>
              <p>Full-Stack Development</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg opacity-0 animate-fade-in animation-delay-300">
              <Music className="h-8 w-8 text-clay-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Creative Side</h3>
              <p>Ceramics</p>
              <p>Tarot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
