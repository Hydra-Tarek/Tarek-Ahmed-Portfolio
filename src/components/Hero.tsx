
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center hero-gradient pt-16">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hi, I am <span className="text-engineer-light">Alex</span>
              <br />
              Mechanical Engineer
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-md">
              Designing and building innovative mechanical solutions with precision and creativity.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-engineer-light text-white px-6 py-3 rounded-md hover:bg-engineer-light/90 transition-colors focus-ring"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors focus-ring"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in-right">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                  alt="Mechanical Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-engineer-light rounded-full p-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6461/6461431.png"
                  alt="Engineering Icon"
                  className="w-12 h-12"
                />
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
    </section>
  );
};

export default Hero;
