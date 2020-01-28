import { NewsArticle } from "src/app/services/types";

const regExp = /\b([A-Za-z]+)\b/gi;

const filterNewsArticlesByWord = (
  filterString: string,
  newsArticles: NewsArticle[]
): NewsArticle[] => {
  if (!filterString) return newsArticles;

  const filteredArticlesWithPlugins = filterString
    .toLowerCase()
    .match(regExp)
    .map(word =>
      newsArticles.filter(article => {
        return article.title.toLowerCase().includes(word);
      })
    )
    .reduce((acc, current) => acc.concat(current), []);

  const setOfTitles: Set<string> = new Set();
  filteredArticlesWithPlugins.forEach(article => {
    setOfTitles.add(article.title.toLowerCase());
  });

  return newsArticles.filter(article =>
    setOfTitles.has(article.title.toLowerCase())
  );
};

export default filterNewsArticlesByWord;
