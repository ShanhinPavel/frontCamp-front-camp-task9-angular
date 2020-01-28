import { Component, OnInit, Input } from "@angular/core";
import { NewsArticle } from "src/app/services/types";
import { GlobalDataService } from "../../../services/global-data.service";

@Component({
  selector: "app-main-section",
  templateUrl: "./main-section.component.html",
  styleUrls: ["./main-section.component.css"]
})
export class MainSectionComponent {
  @Input() newsArticles: NewsArticle[];

  constructor() {
    this.newsArticles = [];
  }
}
