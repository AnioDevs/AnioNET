export interface BlogPost {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  author: string;
  image_url?: string;
}

export interface Regiment {
  id: number;
  name: string;
  category: string;
  brigade: string;
  overseer: string;
  commandingOfficer: string;
  executiveOfficer: string;
  info: string;
  motto: string;
  mottoTranslation?: string;
  image?: string;
}

export interface Leader {
  id: number;
  name: string;
  role: string;
  description: string;
  avatar?: string;
}