import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import {
  GlobalDataService,
  HttpService,
  NewsArticle
} from '../../../../services/';

@Component({
  selector: 'app-news-line',
  templateUrl: './news-line.component.html',
  styleUrls: ['./news-line.component.css']
})
export class NewsLineComponent {
  @Input() article: NewsArticle;
  @Input() sourceIsMine: boolean;
  @Input() fetchMySourceArticles: () => void;

  constructor(
    private globalDataService: GlobalDataService,
    private router: Router,
    private httpService: HttpService
  ) {}

  handleClickReadMore = () => {
    this.globalDataService.setArticle(this.article);
    this.router.navigate(['article/details']);
  }

  handleClickEdit = () => {
    this.globalDataService.setArticle(this.article);
    this.router.navigate(['article/edit']);
  }

  handleClickDelete = () => {
    this.httpService
      .deleteNewsArticle(`${this.article._id}`)
      .subscribe(data => data);
    this.fetchMySourceArticles();
  }
}
