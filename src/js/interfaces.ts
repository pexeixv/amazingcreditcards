export interface Bank {
  name: string;
  pageTitle?: string;
  slug: string;
  description: string;
  logo: Image;
  ogImage: Image;
  shortLogo: Image;
  cards: Array<Card>;
  summary?: RichText;
}

export interface Card {
  name: string;
  slug: string;
  applyUrl: string;
  rating: number;
  description?: RichText;
  summary?: RichText;
  seoDescription: string;
  content?: RichText;
  image?: Image;
  ogImage?: Image;
  bank?: Bank;
}

export interface Category {
  name: string;
  pageTitle?: string;
  featured?: boolean;
  slug: string;
  emoji?: Image;
  image?: Image;
  ogImage?: Image;
  bannerImage?: Image;
  content1?: RichText;
  content2?: RichText;
  card_category?: Array<Card>;
}

export interface Image {
  url?: string;
  handle?: string;
}

export interface RichText {
  html: string;
}
