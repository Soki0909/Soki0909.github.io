export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  image: string;
  github: string;
  demo: string;
  challenges: string[];
  learned: string[];
  // メディアファイル用の新しいフィールド
  videos?: string[];
  audios?: string[];
  demoType?: 'external' | 'video' | 'audio' | 'interactive';
}
