import { ArrowDown } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center hero-gradient pt-16">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hi, I am <span className="text-engineer-light">Tarek</span>
              <br />
              Mechanical Engineer
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-md">
              Designing and building innovative mechanical solutions with precision and creativity.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="bg-engineer-light text-white px-6 py-3 rounded-md hover:bg-engineer-light/90 transition-colors focus-ring">
                View Projects
              </a>
              <a href="#contact" className="bg-transparent border border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors focus-ring">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in-right">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img alt="Mechanical Engineer" src="/lovable-uploads/ab4955f2-dfd9-44af-b939-8ca922cbb035.jpg" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-engineer-light rounded-full p-2">
                
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <a href="#about" className="text-white opacity-70 hover:opacity-100 transition-opacity">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;