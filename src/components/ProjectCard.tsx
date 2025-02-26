
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
}

const ProjectCard = ({ title, description, image, tags, repoUrl, demoUrl }: ProjectProps) => {
  return (
    <div className="bg-engineer-surface rounded-xl overflow-hidden shadow-lg hover-scale">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-engineer-muted px-2 py-1 rounded-full text-xs font-medium text-white/90"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 mb-6">{description}</p>
        
        <div className="flex gap-3">
          {repoUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="border-engineer-light text-engineer-light hover:bg-engineer-light hover:text-white"
              onClick={() => window.open(repoUrl, "_blank")}
            >
              <Github className="mr-1 h-4 w-4" /> Repo
            </Button>
          )}
          
          {demoUrl && (
            <Button 
              variant="default" 
              size="sm" 
              className="bg-engineer-light text-white hover:bg-engineer-light/90"
              onClick={() => window.open(demoUrl, "_blank")}
            >
              <ArrowUpRight className="mr-1 h-4 w-4" /> View Details
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
