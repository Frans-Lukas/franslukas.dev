import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import ContactForm from '@/components/ui/contact-form';

const Contact = () => {
  return (
    <section id="contact" className="section bg-primary text-primary-foreground">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-center">Let's Work Together</h2>
        <p className="text-lg text-center text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
          Have a project in mind? Get in touch and let's turn your ideas into reality.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:contact@franslukas.dev" 
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground"
                >
                  <Mail className="h-5 w-5" />
                  <span>contact@franslukas.dev</span>
                </a>
                
                <a 
                  href="https://github.com/frans-lukas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground"
                >
                  <Github className="h-5 w-5" />
                  <span>github.com/frans-lukas</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/franslukas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground"
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
                className="inline-flex items-center gap-2 text-primary-foreground hover:underline"
              >
                franslukas.art
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="bg-white text-foreground rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-medium mb-4">Send me a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
