export interface NewsSource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface NewsSourcesResponse {
  status: string;
  sources: NewsSource[];
}

export interface NewsArticle {
  _id?: string;
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsArticlesResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}

export interface UpdateGroupRequestData {
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  urlToImage: string;
  url: string;
  content: string;
}
