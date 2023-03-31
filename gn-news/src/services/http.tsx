import axios from "axios";

axios.defaults.baseURL = "https://newsapi.org/v2";
export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}
export interface Data {
  articles: Article[];
  status: string;
  totalResults: number;
}
export default async function getNews(country: string) {
  var articles: Article[] = [];
  try {
    const result = axios.get<Data>("/top-headlines", {
      params: {
        country: country,
        apiKey: "6fe557eb34a344c28953566157d60463",
        // apiKey: "1b9df81f2946499483cf3e468af67ac9",
      },
    });
    articles = (await result).data.articles;
    return articles;
  } catch (error) {
    console.error(error);
  }
}
