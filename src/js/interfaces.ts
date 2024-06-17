export interface Bank {
  name: string;
  slug: string;
  description: string;
  logo: {
    url: string;
  };
  ogImage: {
    url: string;
  };
  shortLogo: {
    url: string;
  };
}

export interface Card {
  name: string;
  slug: string;
  applyUrl: string;
  rating: number;
  description?: string;
  content?: {
    html: string;
  };
  image?: {
    url: string;
  };
  ogImage?: {
    url?: string;
  };
  bank?: Bank;
}
