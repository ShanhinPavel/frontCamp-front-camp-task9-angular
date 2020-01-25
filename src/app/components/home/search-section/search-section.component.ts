import { Component, Input, Output, EventEmitter } from "@angular/core";

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
  private filterWord: string;
  private checkBoxChecked: boolean;

  public constructor() {
    this.filterWord = "";
    this.checkBoxChecked = false;
  }

  onChangeSelect = (sourceId: string) => {
    this.handleChangeSource.emit(sourceId);
  };

  onClickFilter = () => {
    this.handleClickFilter.emit(this.filterWord);
  };

  onChangeCheckbox = () => {
    this.handleChangeCheckbox.emit(this.checkBoxChecked);
  };

  handleClickAddArticle = () => {
    console.log("add article");
  };
}
