import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

interface NewsSource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

@Component({
  selector: "app-search-section",
  templateUrl: "./search-section.component.html",
  styleUrls: ["./search-section.component.css"]
})
export class SearchSectionComponent {
  @Input() newsSources: NewsSource[];
  @Output() handleChangeSource = new EventEmitter<string>();
  @Output() handleClickFilter = new EventEmitter<string>();
  @Output() handleChangeCheckbox = new EventEmitter<boolean>();
  private filterString: string;
  private checkBoxChecked: boolean;

  public constructor(private router: Router) {
    this.filterString = "";
    this.checkBoxChecked = false;
  }

  onChangeSelect = (sourceId: string) => {
    this.filterString = "";
    this.handleChangeSource.emit(sourceId);
  };

  onClickFilter = () => {
    this.handleClickFilter.emit(this.filterString);
  };

  onChangeCheckbox = () => {
    this.handleChangeCheckbox.emit(this.checkBoxChecked);
  };

  handleClickAddArticle = () => {
    this.router.navigate(["article/create"]);
  };
}
