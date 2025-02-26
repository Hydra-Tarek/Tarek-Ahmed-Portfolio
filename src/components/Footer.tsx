
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "#", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, url: "#", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, url: "mailto:alex@mechanicalportfolio.com", label: "Email" }
  ];

  return (
    <footer className="bg-engineer-dark py-12 border-t border-engineer-muted">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-engineer-light flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-white font-bold text-xl">MechEngineer</span>
            </div>
            <p className="text-white/60 mt-2 max-w-md">
              Mechanical engineering portfolio showcasing innovative designs and technical expertise.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-engineer-light transition-colors p-2 rounded-full hover:bg-engineer-light/10"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-white/60 text-sm">
              © {currentYear} Mechanical Engineer Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
