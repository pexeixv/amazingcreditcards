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
  cards: Array<Card>;
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

export interface Category {
  name: string;
  slug: string;
  emoji?: {
    url: string;
  };
  image?: {
    url: string;
  };
  ogImage?: {
    url: string;
  };
  card_category?: Array<Card>;
}
