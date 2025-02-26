import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "About Me",
    href: "#about"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${isScrolled ? "bg-engineer-dark/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between container-padding">
        <a href="#" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-engineer-light flex items-center justify-center border-2 border-white shadow-lg">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-white text-lg hidden sm:inline-block font-medium">Tarek Ahmed</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-white hover:text-engineer-light transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-engineer-light transition-all duration-300 group-hover:w-full"></span>
            </a>)}
          <Button variant="default" className="bg-engineer-light hover:bg-engineer-light/90 ml-2 text-white">
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="container mx-auto container-padding py-4 bg-engineer-surface/90 backdrop-blur-sm flex flex-col gap-4">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-white hover:text-engineer-light transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </a>)}
          <Button variant="default" className="bg-engineer-light hover:bg-engineer-light/90 w-full text-white">
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navbar;