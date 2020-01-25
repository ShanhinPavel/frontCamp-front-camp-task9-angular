import { Component, OnInit } from "@angular/core";

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
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private newsSources: NewsSource[];
  private sourceTitle: string;
  private selectedSource: NewsSource;

  constructor() {
    this.newsSources = [];
    this.sourceTitle = "All sources";
  }

  public async ngOnInit() {
    const result = await fetch(
      "https://newsapi.org/v2/sources?apiKey=f3931451dc1247fdb198996ccfe8be09"
    );

    const { sources } = await result.json();
    this.newsSources = sources;
  }

  private handleChangeSource = (sourceId: string) => {
    const selectedNewsSource = this.newsSources.find(
      source => sourceId === source.id
    );

    this.selectedSource = selectedNewsSource;
    this.sourceTitle = selectedNewsSource.name;
  };

  private handleClickFilter = (filterWord: string) => {
    console.log(filterWord);
  };

  private handleChangeCheckbox = (checked: boolean) => {
    console.log(checked);
  };
}
