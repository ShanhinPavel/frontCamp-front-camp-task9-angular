import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import {
  NewsSource,
  NewsSourcesResponse,
  NewsArticle,
  NewsArticlesResponse
} from "./types";
import { SOURCES_URL, NEWS_HEADLINES_URL } from "./urls";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(url: string) {
    return this.http.get(url);
  }

  getNewsSources(): Observable<NewsSource[]> {
    return this.http
      .get(SOURCES_URL, {
        params: { apiKey: environment.apiKey, language: "en" }
      })
      .pipe(map((data: NewsSourcesResponse) => data.sources));
  }

  getNewsArticlesBySourceId(
    sourseId: string
  ): Observable<NewsArticlesResponse> {
    return this.http
      .get(NEWS_HEADLINES_URL, {
        params: {
          sources: sourseId,
          language: "en",
          apiKey: environment.apiKey
        }
      })
      .pipe(map((data: NewsArticlesResponse) => data));
  }
}
