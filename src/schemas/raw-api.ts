export interface Event {
  id: number;
  title: string;
  datetime: string;
  artists: string;
  youtube_video: string;
  youtube_channel: string;
  instagram: string;
  banner: string;
  active: boolean;
  created_at: string;
  updated_at: string;
  facebook: null;
  order: number;
  categories: Category[];
}

export interface Category {
  id: number;
  key: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Request {
  url: string;
  body: any;
}
