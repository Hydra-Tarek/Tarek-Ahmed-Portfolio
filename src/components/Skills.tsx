
import { Tool, Settings, PenTool, Brain, Database, LucideIcon } from "lucide-react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const skillCategories = [
    {
      title: "Design & Modeling",
      icon: <PenTool className="h-8 w-8" />,
      skills: [
        "SolidWorks",
        "AutoCAD",
        "Fusion 360",
        "CATIA",
        "3D Modeling",
        "Design for Manufacturing"
      ]
    },
    {
      title: "Analysis & Simulation",
      icon: <Brain className="h-8 w-8" />,
      skills: [
        "Finite Element Analysis (FEA)",
        "Computational Fluid Dynamics (CFD)",
        "ANSYS",
        "Thermal Analysis",
        "Structural Analysis",
        "Multi-physics Simulation"
      ]
    },
    {
      title: "Manufacturing & Prototyping",
      icon: <Tool className="h-8 w-8" />,
      skills: [
        "CNC Machining",
        "3D Printing",
        "Injection Molding",
        "Sheet Metal Fabrication",
        "Welding & Assembly",
        "Rapid Prototyping"
      ]
    },
    {
      title: "Technical Knowledge",
      icon: <Settings className="h-8 w-8" />,
      skills: [
        "Mechanical System Design",
        "Thermodynamics",
        "Fluid Mechanics",
        "Materials Science",
        "Mechanisms & Kinematics",
        "Mechanical Control Systems"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-engineer-dark">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col items-center mb-12">
          <p className="text-engineer-light font-medium uppercase tracking-wider mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
          <div className="h-1 w-20 bg-engineer-light mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SkillCard
                title={category.title}
                icon={category.icon}
                skills={category.skills}
              />
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Proficiency Levels</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "CAD/CAM", level: 95 },
              { name: "Structural Design", level: 90 },
              { name: "FEA/CFD Analysis", level: 85 },
              { name: "Prototyping", level: 80 },
              { name: "GD&T", level: 75 },
              { name: "Manufacturing Processes", level: 85 },
              { name: "Project Management", level: 80 },
              { name: "Materials Selection", level: 90 }
            ].map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="bg-engineer-surface rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-engineer-light font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-engineer-muted rounded-full">
                    <div 
                      className="h-full bg-engineer-light rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
