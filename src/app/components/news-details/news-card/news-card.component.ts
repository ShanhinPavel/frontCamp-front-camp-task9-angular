import { Component, Input } from '@angular/core';

interface NewsDetails {
  imageSrc: string;
  description: string;
  publishedDate: string;
  author: string;
}

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
  @Input() newsDetails: NewsDetails;
}
