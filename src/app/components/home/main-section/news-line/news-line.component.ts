import { Component, Input } from "@angular/core";

@Component({
  selector: "app-news-line",
  templateUrl: "./news-line.component.html",
  styleUrls: ["./news-line.component.css"]
})
export class NewsLineComponent {
  @Input() imgSource: string;
  @Input() description: string;
  @Input() publishedDate: string;
  @Input() title: string;
}
