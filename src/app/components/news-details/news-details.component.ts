import { Component } from "@angular/core";
import { GlobalDataService } from "src/app/services/global-data.service";
import { NewsArticle } from "src/app/services/types";

@Component({
  selector: "app-news-details",
  templateUrl: "./news-details.component.html",
  styleUrls: ["./news-details.component.css"]
})
export class NewsDetailsComponent {
  private articleDetails: NewsArticle;

  constructor(private globalDataService: GlobalDataService) {
    this.articleDetails = globalDataService.getArticle();
    console.log(globalDataService.getArticle());
  }
}
