import {analytics} from 'config/constants';

export const trackPageview = (url: string) => {
  if ((window as any).gtag) {
    (window as any).gtag("config", analytics.trackingId, {
      page_path: url,
    });
  }
};
