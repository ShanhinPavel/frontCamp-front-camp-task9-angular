import { Component, Input, OnInit } from "@angular/core";
import { NewsArticle } from "src/app/services/types";
import { NgForm } from "@angular/forms";
import { HttpService } from "src/app/services/http.service";

import { GlobalDataService } from "src/app/services/global-data.service";

@Component({
  selector: "app-create-edit-article-form",
  templateUrl: "./create-edit-article-form.component.html",
  styleUrls: ["./create-edit-article-form.component.css"]
})
export class CreateEditArticleFormComponent {
  @Input() clickSave: (form: NgForm) => void;
  @Input() clickCancel: () => void;
  @Input() articleDetails: NewsArticle;

  private heading: string;
  private description: string;
  private date: string;
  private author: string;
  private image: string;
  private source: string;
  private content: string;

  ngOnInit() {
    const {
      author,
      content,
      urlToImage,
      title,
      source,
      publishedAt,
      description,
      id,
      url
    } = this.articleDetails;
    this.heading = title;
    this.description = description;
    this.content = content;
    this.date = publishedAt;
    this.image = urlToImage;
    this.author = author;
    this.source = url;
  }

  submit(form: NgForm) {
    this.clickSave(form);
  }
}
