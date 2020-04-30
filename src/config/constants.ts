export const genres = [
  { id: "axe", title: "Axé", featured: true },
  { id: "dj", title: "DJ", featured: false },
  { id: "forro", title: "Forró", featured: true },
  { id: "funk", title: "Funk", featured: true },
  { id: "gospel", title: "Gospel", featured: false },
  { id: "mpb", title: "MPB", featured: true },
  { id: "pop", title: "Pop", featured: false },
  { id: "rap", title: "Rap", featured: false },
  { id: "reggae", title: "Reggae", featured: false },
  { id: "rock", title: "Rock", featured: true },
  { id: "samba-pagode", title: "Samba/Pagode", featured: true },
  { id: "sertanejo", title: "Sertanejo", featured: true },
];

export const endpoints = {
  base: process.env.ENDPOINTS_BASE!,
  api: process.env.ENDPOINTS_API!,
  assets: process.env.ENDPOINTS_ASSETS!,
};

export const sizes = {
  appBarHeight: "65px",
  livePagePrimaryContentHeight: "175px",
};

export const routes = {
  home: "/",
};

export const messages = {
  play: "Assistir",
  videoNotAvailable:
    "Infelizmente, esta live ainda não está disponível no YouTube 😞",
  allGenres: "Todos os Gêneros",
  highlightedGenres: "Em destaque",
  otherGenres: "Outros gêneros",
  copyright: "Hoje Tem Live © 2020.",
};

export const socialNetworks = {
  twitter: "_hojetemlive",
  instagram: "_hojetemlive",
};

export const defaultValues = {
  title: "Hoje Tem Live",
  description: "🎤 Assista a todas as lives num só canto⁣!",
  image: "https://hojetem.live/banner.png",
};
