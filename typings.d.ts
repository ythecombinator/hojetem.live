interface ShareConfig {
  title: string;
  text?: string;
  url: string;
}

interface Navigator {
  share: (config: ShareConfig) => Promise<void>;
}

declare module "react-social-sharing";
