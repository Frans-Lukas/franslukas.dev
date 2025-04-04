
import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import ContactForm from '@/components/ui/contact-form';

const Contact = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate the distance from the center with much reduced intensity
      const distX = (e.clientX - centerX) / 100; // Significantly reduced rotation
      const distY = (e.clientY - centerY) / 100; // Significantly reduced rotation
      
      setPosition({ x: distX, y: distY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section id="contact" className="section bg-purple-200 bg-opacity-80 text-primary-foreground">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-center text-foreground">Let's Work Together</h2>
        <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          Have a problem that needs solving? Let's turn it into a functional solution quickly.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 text-foreground">
            <div>
              <h3 className="text-2xl font-medium mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:contact@franslukas.dev" 
                  className="flex items-center gap-3 text-foreground/80 hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                  <span>contact@franslukas.dev</span>
                </a>
                
                <a 
                  href="https://github.com/frans-lukas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/80 hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                  <span>github.com/frans-lukas</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/franslukas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/80 hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/franslukas</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-medium mb-4">Creative Side</h3>
              <p className="mb-4">
                Interested in my creative work with ceramics and tarot? Visit my art portfolio:
              </p>
              <a 
                href="https://franslukas.art" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground hover:underline"
              >
                franslukas.art
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div 
            ref={cardRef}
            className="bg-white text-foreground rounded-lg p-6 shadow-lg transition-transform duration-200 ease-out"
            style={{ 
              transform: `perspective(2000px) rotateX(${position.y * -1}deg) rotateY(${position.x}deg) scale3d(1.01, 1.01, 1.01)`,
              boxShadow: `0 15px 35px rgba(0, 0, 0, 0.1), 
                          ${position.x * 0.2}px ${position.y * 0.2}px 25px rgba(0, 0, 0, 0.05)`
            }}
          >
            <h3 className="text-2xl font-medium mb-4">Send me a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
