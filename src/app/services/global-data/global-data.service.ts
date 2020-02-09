import { Injectable } from '@angular/core';
import { NewsArticle } from '../types';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  private article: NewsArticle;

  constructor() {}

  getArticle = () => {
    return this.article;
  }

  setArticle = (article: NewsArticle) => {
    this.article = article;
  }
}
