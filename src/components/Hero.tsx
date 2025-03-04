
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-accent/10 text-accent rounded-full animate-fade-in [animation-delay:0.2s] opacity-0" style={{animationFillMode: 'forwards'}}>
            Welcome
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in [animation-delay:0.4s] opacity-0" style={{animationFillMode: 'forwards'}}>
            Welcome to my <span className="text-gradient">Portfolio</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in [animation-delay:0.6s] opacity-0" style={{animationFillMode: 'forwards'}}>
            I'm a passionate web developer focused on crafting clean, user-friendly interfaces that solve real problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:0.8s] opacity-0" style={{animationFillMode: 'forwards'}}>
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View my work
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center flex-col animate-fade-in [animation-delay:1s] opacity-0" style={{animationFillMode: 'forwards'}}>
        <span className="text-sm text-foreground/60 mb-2">Scroll down</span>
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-foreground/60 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
