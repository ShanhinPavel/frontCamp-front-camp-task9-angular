import { Component, OnInit } from '@angular/core';

interface NewsDetails {
  imageSrc: string;
  description: string;
  publishedDate: string;
  author: string;
}

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  sourceTitle: string;
  articleDetails: NewsDetails;

  constructor() {
    this.sourceTitle = 'Suslik';
    this.articleDetails = {
      imageSrc:
        'https://cnet2.cbsistatic.com/img/hEHxbI1Pphmvod56-B5ATDBmlwY=/0x0:2438x1440/980x551/2019/10/16/db85bfaa-b206-4e8e-a468-d878d80d46cc/newc-yongqing-bao-wildlife-photographer-of-the-year.jpg',
      description: 'wild mouse runs from wolf',
      publishedDate: '2020-01-18T19:21:09.322Z',
      author: 'Pavel Shanhin'
    };
  }

  ngOnInit() {}
}
