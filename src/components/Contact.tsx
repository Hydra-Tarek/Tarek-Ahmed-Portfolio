
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "alex@mechanicalportfolio.com",
      link: "mailto:alex@mechanicalportfolio.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      content: "San Francisco, CA",
      link: "https://maps.google.com/?q=San+Francisco,+CA"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-engineer-muted">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col items-center mb-12">
          <p className="text-engineer-light font-medium uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Me</h2>
          <div className="h-1 w-20 bg-engineer-light mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 animate-fade-in-left">
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Talk</h3>
            <p className="text-white/80 mb-8">
              Have a project in mind or want to discuss potential collaborations? Feel free to reach out through any of the channels below or use the contact form.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg bg-engineer-surface hover:bg-engineer-surface/80 transition-colors"
                >
                  <div className="rounded-full bg-engineer-light/20 p-2 text-engineer-light">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="text-white/80">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-fade-in-right">
            <div className="bg-engineer-surface rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-engineer-dark border-engineer-muted focus:border-engineer-light text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-engineer-dark border-engineer-muted focus:border-engineer-light text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-engineer-dark border-engineer-muted focus:border-engineer-light text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-engineer-dark border-engineer-muted focus:border-engineer-light text-white"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-engineer-light hover:bg-engineer-light/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
