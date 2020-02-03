import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { NewsArticle } from "../../services/types";
import { HttpService } from "src/app/services/http.service";
import { GlobalDataService } from "src/app/services/global-data.service";

const MODE_TITLE = {
  create: "Create",
  edit: "Edit"
};

const getInitialArcticleDetails = (state?: NewsArticle) => {
  const initialState = {
    source: {
      id: "my-source",
      name: "My source"
    },
    title: "",
    description: "",
    content: "",
    url: "",
    urlToImage: "",
    author: "",
    publishedAt: new Date().toLocaleDateString()
  };

  return state || initialState;
};

@Component({
  selector: "app-create-edit-article",
  templateUrl: "./create-edit-article.component.html",
  styleUrls: ["./create-edit-article.component.css"]
})
export class CreateEditArticleComponent {
  private title: string;
  private articleDetails: NewsArticle;
  private modeType: string;

  constructor(
    private route: ActivatedRoute,
    private https: HttpService,
    private location: Location,
    private globalDataService: GlobalDataService
  ) {
    this.modeType = this.route.snapshot.url[1].path;
    this.articleDetails =
      this.modeType === "create"
        ? getInitialArcticleDetails()
        : globalDataService.getArticle();
    this.title = MODE_TITLE[this.modeType];
  }

  private handleClickSave = (form: NewsArticle) => {
    if (this.title === MODE_TITLE.create) {
      this.https.createNewsArticle(form);
    } else {
      this.https
        .updateNewsArticle(`${this.globalDataService.getArticle().id}`, form)
        .subscribe(data => this.globalDataService.setArticle(data));
    }

    this.location.back();
  };

  private handleClickCancel = () => {
    this.location.back();
  };
}
