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

export interface Blog {
  title: string;
  slug: string;
  excerpt: string;
  image: Image;
  draft: boolean;
  ogImage: Image;
  content: (TextContent | HyperlinkedImage)[];
}

export interface TextContent {
  textContent: RichText;
}

export interface HyperlinkedImage {
  image: Image;
  url?: string;
  description?: string;
}

export interface Image {
  url?: string;
  handle?: string;
}

export interface RichText {
  html: string;
}
