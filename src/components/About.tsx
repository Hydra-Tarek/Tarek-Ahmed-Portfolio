
import { Award, Calendar, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Senior Mechanical Engineer",
      company: "InnoTech Engineering",
      period: "2020 - Present",
      description:
        "Lead mechanical design for cutting-edge aerospace components, managing a team of 5 engineers.",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "Mechanical Design Engineer",
      company: "NextGen Solutions",
      period: "2016 - 2020",
      description:
        "Designed and optimized mechanical systems for automotive applications using CAD and simulation tools.",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "M.S. Mechanical Engineering",
      company: "Stanford University",
      period: "2014 - 2016",
      description:
        "Specialized in robotics and mechanical design with thesis on energy-efficient actuators.",
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-engineer-dark">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col items-center mb-12">
          <p className="text-engineer-light font-medium uppercase tracking-wider mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Background</h2>
          <div className="h-1 w-20 bg-engineer-light mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>
            <p className="text-white/80 mb-6">
              I'm a passionate mechanical engineer with over 7 years of experience in designing, analyzing, and optimizing mechanical systems. I specialize in precision engineering, 3D modeling, and innovative problem-solving.
            </p>
            <p className="text-white/80 mb-6">
              My approach combines technical expertise with creative thinking to develop elegant solutions to complex engineering challenges. I'm particularly interested in sustainable design and the integration of mechanical systems with new technologies.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Award className="text-engineer-light h-5 w-5" />
                <span className="text-white">7+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-engineer-light h-5 w-5" />
                <span className="text-white">20+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-engineer-light h-5 w-5" />
                <span className="text-white">5 Patents Filed</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in-right">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-engineer-surface p-6 rounded-lg border-l-4 border-engineer-light hover-scale"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="rounded-full bg-engineer-light/20 p-2 text-engineer-light">
                    {exp.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{exp.title}</h4>
                    <p className="text-engineer-light text-sm">{exp.company}</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-2">{exp.period}</p>
                <p className="text-white/80">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
