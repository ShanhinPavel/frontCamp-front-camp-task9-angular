import { Component, Input } from '@angular/core';
import { NewsArticle } from 'src/app/services/types';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-edit-article-form',
  templateUrl: './create-edit-article-form.component.html',
  styleUrls: ['./create-edit-article-form.component.css']
})
export class CreateEditArticleFormComponent {
  @Input() clickSave: (form: NgForm) => void;
  @Input() clickCancel: () => void;
  @Input() articleDetails: NewsArticle;

  constructor(private httpService: HttpService) {}

  submit(form: NgForm) {
    this.clickSave(form);
  }
}
