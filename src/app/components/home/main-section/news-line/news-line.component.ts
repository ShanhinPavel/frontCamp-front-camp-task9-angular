import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewsArticle } from 'src/app/services/types';
import { GlobalDataService } from '../../../../services/global-data.service';

@Component({
  selector: 'app-news-line',
  templateUrl: './news-line.component.html',
  styleUrls: ['./news-line.component.css']
})
export class NewsLineComponent {
  @Input() article: NewsArticle;

  constructor(
    private globalDataService: GlobalDataService,
    private router: Router
  ) {}

  handleClickReadMore = () => {
    this.globalDataService.setArticle(this.article);
    this.router.navigate(['article/1']);
  }
}
