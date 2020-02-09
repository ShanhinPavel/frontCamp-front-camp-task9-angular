import { Component, Input } from '@angular/core';
import { NewsArticle, UpdateGroupRequestData } from 'src/app/services';

@Component({
  selector: 'app-create-edit-article-form',
  templateUrl: './create-edit-article-form.component.html',
  styleUrls: ['./create-edit-article-form.component.css']
})
export class CreateEditArticleFormComponent {
  @Input() clickSave: (formFields: UpdateGroupRequestData) => void;
  @Input() clickCancel: () => void;
  @Input() articleDetails: NewsArticle;
  private imgPreview: boolean;

  private formFields: UpdateGroupRequestData = {
    title: '',
    description: '',
    publishedAt: '',
    author: '',
    urlToImage: '',
    url: '',
    content: ''
  };

  ngOnInit() {
    this.formFields.title = this.articleDetails.title;
    this.formFields.description = this.articleDetails.description;
    this.formFields.content = this.articleDetails.content;
    this.formFields.publishedAt = new Date(
      this.articleDetails.publishedAt
    ).toLocaleDateString();
    this.formFields.urlToImage = this.articleDetails.urlToImage;
    this.formFields.author = this.articleDetails.author;
    this.formFields.url = this.articleDetails.url;
  }

  handleClickSave = () => {
    this.clickSave(this.formFields);
  }
}
