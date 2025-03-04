import { useState } from "react";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Check, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import Clock from "@/components/Clock";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  hidden: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      hidden: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Check hidden field (bot validation)
    if (values.hidden) {
      toast({
        title: "Submission blocked",
        description: "Bot activity detected.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-accent/10 text-accent rounded-full">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-foreground/80">
            Have a project in mind or want to say hello? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <p className="font-medium">aryansonone@vitstudent.ac.in</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Phone</p>
                    <p className="font-medium">+91 00000 00000</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Location</p>
                    <p className="font-medium">Vellore Institute Of Technology, Vellore</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Current Local Time</h3>
              <div className="p-4 bg-secondary rounded-lg">
                <Clock />
              </div>
            </div>
          </div>
          
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input placeholder="Name" {...field} />
                          {form.formState.dirtyFields.name && !form.formState.errors.name && (
                            <Check className="absolute right-3 top-2.5 h-4 w-4 text-green-500" />
                          )}
                          {form.formState.errors.name && (
                            <AlertCircle className="absolute right-3 top-2.5 h-4 w-4 text-destructive" />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input type="email" placeholder="email@example.com" {...field} />
                          {form.formState.dirtyFields.email && !form.formState.errors.email && (
                            <Check className="absolute right-3 top-2.5 h-4 w-4 text-green-500" />
                          )}
                          {form.formState.errors.email && (
                            <AlertCircle className="absolute right-3 top-2.5 h-4 w-4 text-destructive" />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input placeholder="Project Inquiry" {...field} />
                          {form.formState.dirtyFields.subject && !form.formState.errors.subject && (
                            <Check className="absolute right-3 top-2.5 h-4 w-4 text-green-500" />
                          )}
                          {form.formState.errors.subject && (
                            <AlertCircle className="absolute right-3 top-2.5 h-4 w-4 text-destructive" />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea 
                            placeholder="I'd like to discuss a potential project..."
                            className="min-h-32" 
                            {...field} 
                          />
                          {form.formState.dirtyFields.message && !form.formState.errors.message && (
                            <Check className="absolute right-3 top-2.5 h-4 w-4 text-green-500" />
                          )}
                          {form.formState.errors.message && (
                            <AlertCircle className="absolute right-3 top-2.5 h-4 w-4 text-destructive" />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Hidden field for bot detection */}
                <input
                  type="text"
                  {...form.register("hidden")}
                  className="hidden-validator"
                  aria-hidden="true"
                  tabIndex={-1}
                />
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
