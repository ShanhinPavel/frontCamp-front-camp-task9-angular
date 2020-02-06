import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-published-date',
  templateUrl: './published-date.component.html',
  styleUrls: ['./published-date.component.css']
})
export class PublishedDateComponent {
  _publishedDate: string;

  @Input()
  set publishedDate(date: string) {
    this._publishedDate = new Date(date).toLocaleString();
  }

  get publishedDate() {
    return this._publishedDate;
  }
}
