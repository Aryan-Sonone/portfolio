
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold text-gradient">
              Portfolio
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center transition-colors hover:bg-foreground/10">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center transition-colors hover:bg-foreground/10">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center transition-colors hover:bg-foreground/10">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center transition-colors hover:bg-foreground/10">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-foreground/60">
            © {currentYear} Portfolio. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
