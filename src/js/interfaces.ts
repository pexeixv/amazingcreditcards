export interface Bank {
  name: string;
  slug: string;
  logo: {
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
  image: {
    url: string;
  };
  bank?: Bank;
}
