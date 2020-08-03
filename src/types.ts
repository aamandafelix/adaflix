export interface LinkExtra {
  text: string;
  url: string;
}

export interface Category {
  id: number;
  title: string;
  link?: string;
  color: string;
  link_extra?: LinkExtra;
  videos: Video[];
}

export interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
}
