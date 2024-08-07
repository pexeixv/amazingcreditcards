export interface Bank {
  name: string;
  slug: string;
  description: string;
  logo: Image;
  ogImage: Image;
  shortLogo: Image;
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
  image?: Image;
  ogImage?: {
    url?: string;
  };
  bank?: Bank;
}

export interface Category {
  name: string;
  slug: string;
  emoji?: Image;
  image?: Image;
  ogImage?: Image;
  card_category?: Array<Card>;
}

export interface Image {
  url: string;
  handle: string;
}
