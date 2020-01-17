import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { CreateEditArticleComponent } from './components/create-edit-article/create-edit-article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:articleId', component: NewsDetailsComponent },
  { path: 'create-edit', component: CreateEditArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
