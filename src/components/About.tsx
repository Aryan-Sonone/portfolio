
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", 
    "React", "Next.js", "Tailwind CSS", "Node.js"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-accent/10 text-accent rounded-full">
            About me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Background & Skills
          </h2>
          <p className="text-foreground/80">
            A passionate web developer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Who I Am</h3>
                <p className="text-foreground/80">
                  I'm a frontend developer passionate about creating web applications with appealing interfaces.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Code className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">What I Do</h3>
                <p className="text-foreground/80">
                  Build responsive, accessible,
                  web applications with the new things like React,etc.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-foreground/80">
                  Bachelor's degree in Computer Science from Vellore Institute Of Technology.
                  I'm also learning through various evets orgaised y the clubs at VIT, Vellore, internet,etc.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <p className="text-foreground/80">
                  Right now not worked with any startup.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8 space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Frontend Development</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-[95%] rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Backend Development</span>
                      <span className="text-sm font-medium">80%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-[80%] rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">UI/UX Design</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-[85%] rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Mobile Development</span>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-[75%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
