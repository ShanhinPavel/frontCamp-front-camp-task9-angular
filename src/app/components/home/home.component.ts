import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import {
  HttpService,
  AMOUNT_PAGES_ARTICLES
} from '../../services/http.service';
import {
  NewsSource,
  NewsArticle,
  NewsArticlesResponse
} from '../../services/types';
import filterNewsArticlesByWord from './helpers/filter-news-articles-by-word';
import { isShowLoadMore } from './helpers/is-show-load-more';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private newsSources: NewsSource[];
  private sourceTitle: string;
  private selectedSource: NewsSource;
  private newsArticles: NewsArticle[];
  private routeSubscription: Subscription;
  private filteredNewsArticles: NewsArticle[];
  private newsArticlesPage: number;
  private showingLoadMoreButton: boolean;
  private totalResults: number;
  private mySource: NewsSource;
  private sourceIsMine: boolean;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.newsSources = [];
    this.newsArticles = [];
    this.filteredNewsArticles = [];
    this.sourceTitle = 'All sources';
    this.newsArticlesPage = 1;
    this.showingLoadMoreButton = false;
    this.sourceIsMine = false;
  }

  private fetchMySourceArticles = () => {
    this.showingLoadMoreButton = false;
    this.selectedSource = this.mySource;
    this.httpService
      .getAllNewsMySource()
      .subscribe((myNewsArticles: NewsArticle[]) => {
        this.newsArticles = myNewsArticles;
        this.filteredNewsArticles = myNewsArticles;
      });
  }

  private fechNewsArticles = (newsSourceId: string, page: number) => {
    this.httpService
      .getNewsArticlesBySourceId(newsSourceId, page)
      .subscribe((data: NewsArticlesResponse) => {
        const { articles, totalResults } = data;

        this.showingLoadMoreButton = isShowLoadMore(
          totalResults,
          page,
          AMOUNT_PAGES_ARTICLES
        );

        if (page > 1) {
          const newsArticles = this.newsArticles.concat(articles);

          this.newsArticles = newsArticles;
          this.filteredNewsArticles = newsArticles;
        } else {
          this.newsArticles = articles;
          this.filteredNewsArticles = articles;
        }
      });
  }

  public ngOnInit() {
    this.httpService.getNewsSources().subscribe(data => {
      const firstSource = data[0];
      this.fechNewsArticles(firstSource.id, this.newsArticlesPage);
      this.sourceTitle = firstSource.name;
      this.newsSources = data;
      this.selectedSource = firstSource;
    });

    this.httpService.getMySource().subscribe(data => {
      this.mySource = data[0];
    });
  }

  private handleChangeSource = (sourceIndex: string) => {
    this.newsArticlesPage = 1;
    let selectedSource: NewsSource;

    if (sourceIndex === 'my') {
      this.fetchMySourceArticles();
      selectedSource = this.mySource;
      this.sourceIsMine = true;
    } else {
      this.fechNewsArticles(this.newsSources[sourceIndex].id, 1);
      this.sourceIsMine = false;
      selectedSource = this.newsSources[sourceIndex];
    }
    this.selectedSource = selectedSource;

    this.sourceTitle = selectedSource.name;
  }

  private handleClickFilter = (filterString: string) => {
    this.filteredNewsArticles = filterNewsArticlesByWord(
      filterString,
      this.newsArticles
    );
  }

  private handleChangeCheckbox = (checked: boolean) => {
    this.fetchMySourceArticles();
  }

  private handleClickLoadMoreButton = () => {
    const nextPage = this.newsArticlesPage + 1;
    this.newsArticlesPage = nextPage;
    this.showingLoadMoreButton = isShowLoadMore(
      this.totalResults,
      this.newsArticlesPage,
      AMOUNT_PAGES_ARTICLES
    );
    this.newsArticlesPage = nextPage;

    this.fechNewsArticles(this.selectedSource.id, nextPage);
  }
}
