export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string[];
  readingTime: string;
  published: boolean;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}
