export const sizes = {
  appBarHeight: "65px",
  livePagePrimaryContentHeight: "175px",
};

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

export const messages = {
  play: "Assistir",
  share: "Compartilhar",
  videoNotAvailable:
    "Infelizmente, esta live ainda não está disponível no YouTube 😞",
  allGenres: "Todos os Gêneros",
  highlightedGenres: "Em destaque",
  otherGenres: "Outros gêneros",
  copyright: "Hoje Tem Live © 2020.",
  shareMessage: {
    generic: "Tô amando essa live! 😍",
    twitter: "Tô amando essa live! 😍",
    whatsapp: "Oi, dá uma olhada nessa live! 😍",
    telegram: "Oi, dá uma olhada nessa live! 😍",
    mail: "Oi, dá uma olhada nessa live! 😍",
  },
  donate: {
    callForAction: "CLIQUE AQUI PARA DOAR",
    message: "Quer ajudar a acabar com a fome no Brasil?",
  },
};

export const errorStatus = [
  { image: 1, message: "Aff 😭" },
  { image: 2, message: "Ooops 😅" },
  { image: 3, message: "Tivemos um probleminha aqui 😅" },
  { image: 4, message: "Em breve você poderá curtir essa live 😊" },
  { image: 5, message: "Volte daqui alguns segundos, por favor  🙏" },
];

export const defaultValues = {
  title: "Hoje Tem Live",
  description: "🎤 Assista a todas as lives num só canto⁣!",
  image: "https://hojetem.live/banner.png",
};

export const socialNetworks = {
  twitter: "_hojetemlive",
  instagram: "_hojetemlive",
};

export const endpoints = {
  base: process.env.ENDPOINTS_BASE!,
  api: process.env.ENDPOINTS_API!,
  assets: process.env.ENDPOINTS_ASSETS!,
};

export const urls = {
  main: "https://hojetem.live",
  donate: "https://www.fomedemusica.com/",
};

export const routes = {
  home: "/",
};

export const analytics = {
  trackingId: "UA-58120604-11",
};
