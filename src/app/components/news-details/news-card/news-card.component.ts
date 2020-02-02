import { Component, Input } from '@angular/core';
import { NewsArticle } from 'src/app/services/types';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
  @Input() articleDetails: NewsArticle;
}
