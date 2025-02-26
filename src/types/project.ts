
export interface ProjectFile {
  id: string;
  file_name: string;
  file_path: string;
  file_type: string;
  file_size: number;
  created_at: string;
}

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  files?: ProjectFile[];
}
