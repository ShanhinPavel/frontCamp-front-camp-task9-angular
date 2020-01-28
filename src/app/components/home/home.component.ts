import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { HttpService } from "../../services/http.service";
import { NewsSource, NewsArticle } from "../../services/types";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private newsSources: NewsSource[];
  private sourceTitle: string;
  private selectedSource: NewsSource;
  private newsArticles: NewsArticle[];
  private routeSubscription: Subscription;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.newsSources = [];
    this.newsArticles = [];
    this.sourceTitle = "All sources";
  }

  private fechNewsArticles = (newsSourceId: string) => {
    this.httpService
      .getNewsArticlesBySourceId(newsSourceId)
      .subscribe(data => (this.newsArticles = data.articles));
  };

  public ngOnInit() {
    this.httpService.getNewsSources().subscribe(data => {
      const firstSource = data[0];
      this.fechNewsArticles(firstSource.id);
      this.sourceTitle = firstSource.name;
      this.newsSources = data;
    });
  }

  private handleChangeSource = (sourceIndex: string) => {
    if (sourceIndex === "my") {
    } else {
      const selectedNewsSource: NewsSource = this.newsSources[sourceIndex];
      this.fechNewsArticles(selectedNewsSource.id);

      this.selectedSource = selectedNewsSource;
      this.sourceTitle = selectedNewsSource.name;
    }
  };

  private handleClickFilter = (filterWord: string) => {
    console.log(filterWord);
  };

  private handleChangeCheckbox = (checked: boolean) => {
    console.log(checked);
  };
}
