import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NewsArticle, HttpService } from "src/app/services";

@Component({
  selector: "app-news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: ["./news-card.component.css"]
})
export class NewsCardComponent {
  @Input() articleDetails: NewsArticle;
  sourceIsMine: boolean;

  constructor(private httpService: HttpService, private router: Router) {}

  ngDoCheck() {
    this.sourceIsMine = this.articleDetails.source.id === "my-source";
  }

  handleClickDelete = () => {
    this.httpService
      .deleteNewsArticle(`${this.articleDetails._id}`)
      .subscribe(data => data);
    this.router.navigate([""]);
  };

  handleClickEdit = () => {
    this.router.navigate(["article/edit"]);
  };
}
