
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-100 to-transparent opacity-70 z-[-1]"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 md:px-6 pt-16">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 opacity-0 animate-fade-in">
            Rapid Prototyping <span className="text-purple-500">&</span> <br className="hidden md:block" />
            Development with Wasp
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl opacity-0 animate-fade-in animation-delay-200">
            Turning ideas into functional products in record time. 
            Specializing in fast-paced development using Wasp, Java backends,
            and AI-assisted workflows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animation-delay-300">
            <Button asChild size="lg">
              <a href="#projects">See my work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex justify-center absolute bottom-10 left-0 right-0 animate-bounce">
        <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
