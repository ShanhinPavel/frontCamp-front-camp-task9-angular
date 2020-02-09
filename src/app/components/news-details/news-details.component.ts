import { Component } from '@angular/core';
import { GlobalDataService, NewsArticle } from 'src/app/services/';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent {
  private articleDetails: NewsArticle;

  constructor(private globalDataService: GlobalDataService) {
    this.articleDetails = globalDataService.getArticle();
  }
}
