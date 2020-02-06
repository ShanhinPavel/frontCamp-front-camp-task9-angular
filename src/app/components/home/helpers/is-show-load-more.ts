export const isShowLoadMore = (
  totalResults: number,
  page: number,
  articlesPerPage: number
) => totalResults > page * articlesPerPage;
