export interface Live {
  id: number;
  title: string;
  datetime: string;
  genres?: Genre[];
  artists?: string[];
  banner: string;
  active: boolean;
  youtubeVideo?: string;
  youtubeChannel?: string;
  instagram?: string;
}

export interface Genre {
  id: string;
  title: string;
  featured: boolean;
}

export interface GenreMapping {
  [index: string]: Live[];
}

export interface LivesHub {
  featured: Live[];
  genres: GenreMapping;
}