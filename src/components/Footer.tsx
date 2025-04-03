
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-serif font-medium">Frans-Lukas</h3>
            <p className="text-background/80 text-sm mt-1">Full-Stack Developer & System Designer</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <a href="#about" className="text-background/80 hover:text-background transition-colors">
              About
            </a>
            <a href="#projects" className="text-background/80 hover:text-background transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-background/80 hover:text-background transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-background/80 hover:text-background transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-background/70">
            &copy; {currentYear} Frans-Lukas. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 text-sm text-background/70">
            <a 
              href="https://franslukas.art" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-background transition-colors"
            >
              View my creative work
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
