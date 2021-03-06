import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { NewsArticle } from "../../services/types";
import {
  HttpService,
  GlobalDataService,
  UpdateGroupRequestData
} from "src/app/services";

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
  title: string;
  articleDetails: NewsArticle;
  modeType: string;

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

  handleClickSave = (createEditArticleForm: UpdateGroupRequestData) => {
    const body = { ...this.articleDetails, ...createEditArticleForm };

    if (this.title === MODE_TITLE.create) {
      this.https.createNewsArticle(body).subscribe(data => data);
    } else {
      this.https
        .updateNewsArticle(`${this.globalDataService.getArticle()._id}`, body)
        .subscribe(data => this.globalDataService.setArticle(data));
    }
    this.location.back();
  };

  handleClickCancel = () => {
    this.location.back();
  };
}
