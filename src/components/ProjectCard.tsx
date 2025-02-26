
import { ArrowUpRight, Download, FileIcon, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ProjectProps } from "@/types/project";
import { toast } from "sonner";

const ProjectCard = ({ title, description, image, tags, repoUrl, demoUrl, files }: ProjectProps) => {
  const handleDownload = async (filePath: string, fileName: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('project_files')
        .download(filePath);

      if (error) {
        throw error;
      }

      if (data) {
        const url = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
        link.remove();
        toast.success('File downloaded successfully!');
      }
    } catch (error) {
      console.error('Error downloading file:', error);
      toast.error('Failed to download file. Please try again.');
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

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
        
        {files && files.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-2">Project Files:</h4>
            <div className="space-y-2">
              {files.map((file) => (
                <div 
                  key={file.id}
                  className="flex items-center justify-between bg-engineer-muted/30 p-2 rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <FileIcon className="w-4 h-4 text-engineer-light" />
                    <span className="text-sm text-white/90">{file.file_name}</span>
                    <span className="text-xs text-white/50">({formatFileSize(file.file_size)})</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-engineer-light hover:text-white hover:bg-engineer-light/20"
                    onClick={() => handleDownload(file.file_path, file.file_name)}
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
        
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
