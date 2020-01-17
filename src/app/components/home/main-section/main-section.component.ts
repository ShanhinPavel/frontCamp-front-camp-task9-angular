import { Component, OnInit } from '@angular/core';

interface NewsLine {
  imageSrc: string;
  description: string;
  publishedDate: string;
}

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent {
  newsLines: NewsLine[] = [
    {
      imageSrc:
        'https://cnet2.cbsistatic.com/img/hEHxbI1Pphmvod56-B5ATDBmlwY=/0x0:2438x1440/980x551/2019/10/16/db85bfaa-b206-4e8e-a468-d878d80d46cc/newc-yongqing-bao-wildlife-photographer-of-the-year.jpg',
      description: 'wild mouse runs from wolf',
      publishedDate: '2020-01-18T19:21:09.322Z'
    },
    {
      imageSrc:
        'https://cnet2.cbsistatic.com/img/hEHxbI1Pphmvod56-B5ATDBmlwY=/0x0:2438x1440/980x551/2019/10/16/db85bfaa-b206-4e8e-a468-d878d80d46cc/newc-yongqing-bao-wildlife-photographer-of-the-year.jpg',
      description: 'wild mouse runs from wolf',
      publishedDate: '2020-01-18T19:21:09.322Z'
    },
    {
      imageSrc:
        'https://cnet2.cbsistatic.com/img/hEHxbI1Pphmvod56-B5ATDBmlwY=/0x0:2438x1440/980x551/2019/10/16/db85bfaa-b206-4e8e-a468-d878d80d46cc/newc-yongqing-bao-wildlife-photographer-of-the-year.jpg',
      description: 'wild mouse runs from wolf',
      publishedDate: '2020-01-18T19:21:09.322Z'
    }
  ];
}
