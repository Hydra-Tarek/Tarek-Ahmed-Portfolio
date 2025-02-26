
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectProps } from "@/types/project";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projectsData: ProjectProps[] = [
    {
      title: "Robotic Arm Design",
      description: "A 6-axis robotic arm designed for precision manufacturing with advanced kinematics control.",
      image: "https://images.unsplash.com/photo-1580383857470-d5eff2e1ff85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Robotics", "CAD", "Automation"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Drone Propulsion System",
      description: "Lightweight propulsion system for long-duration UAV flights with improved energy efficiency.",
      image: "https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      tags: ["Aerodynamics", "Propulsion", "3D Printing"],
      demoUrl: "#"
    },
    {
      title: "Smart HVAC Controller",
      description: "Energy-efficient HVAC control system with IoT connectivity and machine learning optimization.",
      image: "https://images.unsplash.com/photo-1531125227120-1f6ab656b631?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Thermal Design", "IoT", "Control Systems"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Composite Bicycle Frame",
      description: "Lightweight carbon fiber bicycle frame with optimized stiffness-to-weight ratio.",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
      tags: ["Composites", "FEA", "Structural Design"],
      demoUrl: "#"
    },
    {
      title: "Electric Vehicle Cooling System",
      description: "Advanced thermal management system for EV battery packs to maximize performance and longevity.",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Thermal Design", "CFD", "Automotive"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Prosthetic Hand Mechanism",
      description: "Cost-effective mechanical hand prosthetic with intuitive control system for improved dexterity.",
      image: "https://images.unsplash.com/photo-1596239880863-b08be0209afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      tags: ["Biomedical", "Mechanism Design", "3D Printing"],
      demoUrl: "#"
    }
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projectsData.length));
  };
  
  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="section-padding bg-engineer-muted">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col items-center mb-12">
          <p className="text-engineer-light font-medium uppercase tracking-wider mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <div className="h-1 w-20 bg-engineer-light mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, visibleProjects).map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          {visibleProjects < projectsData.length ? (
            <Button 
              variant="outline" 
              onClick={showMoreProjects}
              className="border-engineer-light text-engineer-light hover:bg-engineer-light hover:text-white"
            >
              Show More Projects
            </Button>
          ) : (
            <Button 
              variant="outline" 
              onClick={showLessProjects}
              className="border-engineer-light text-engineer-light hover:bg-engineer-light hover:text-white"
            >
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
