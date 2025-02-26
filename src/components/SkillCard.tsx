
import { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
}

const SkillCard = ({ title, icon, skills }: SkillCardProps) => {
  return (
    <div className="bg-engineer-surface rounded-xl p-6 hover-scale shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-engineer-light h-10 w-10">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-engineer-light"></div>
            <span className="text-white/90">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
