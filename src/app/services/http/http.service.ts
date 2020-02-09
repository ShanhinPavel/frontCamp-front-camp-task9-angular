import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  NewsSource,
  NewsSourcesResponse,
  NewsArticlesResponse,
  NewsArticle
} from '../types';
import {
  SOURCES_URL,
  NEWS_EVERYTHING_URL,
  MY_NEWS_URL,
  MY_SOURCE_URL
} from './urls';
import { environment } from 'src/environments/environment';

export const AMOUNT_PAGES_ARTICLES = 5;

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(url: string) {
    return this.http.get(url);
  }

  getNewsSources(): Observable<NewsSource[]> {
    return this.http
      .get(SOURCES_URL, {
        params: { apiKey: environment.apiKey, language: 'en' }
      })
      .pipe(map((data: NewsSourcesResponse) => data.sources));
  }

  getNewsArticlesBySourceId(
    sourseId: string,
    page: number
  ): Observable<NewsArticlesResponse> {
    return this.http
      .get(NEWS_EVERYTHING_URL, {
        params: {
          sources: sourseId,
          language: 'en',
          pageSize: `${AMOUNT_PAGES_ARTICLES}`,
          page: `${page}`,
          apiKey: environment.apiKey
        }
      })
      .pipe(map((data: NewsArticlesResponse) => data));
  }

  getAllNewsMySource = (): Observable<NewsArticle[]> => {
    return this.http.get(MY_NEWS_URL).pipe(map((data: NewsArticle[]) => data));
  }

  getMySource = (): Observable<NewsSource[]> => {
    return this.http.get(MY_SOURCE_URL).pipe(map((data: NewsSource[]) => data));
  }

  createNewsArticle = (newsArticle: NewsArticle): Observable<NewsArticle> => {
    return this.http
      .post(MY_NEWS_URL, newsArticle)
      .pipe(map((data: NewsArticle) => data));
  }

  deleteNewsArticle = (newsArticleId: string): Observable<NewsArticle> => {
    const url = MY_NEWS_URL + `/${newsArticleId}`;
    return this.http.delete(url).pipe(map((data: NewsArticle) => data));
  }

  updateNewsArticle = (
    newsArticleId: string,
    article: NewsArticle
  ): Observable<NewsArticle> => {
    const url = MY_NEWS_URL + `/${newsArticleId}`;
    return this.http.put(url, article).pipe(map((data: NewsArticle) => data));
  }
}
