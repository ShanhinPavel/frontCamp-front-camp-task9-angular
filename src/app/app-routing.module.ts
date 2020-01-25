import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NewsDetailsComponent } from "./components/news-details/news-details.component";
import { CreateEditArticleComponent } from "./components/create-edit-article/create-edit-article.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "article/create",
    component: CreateEditArticleComponent,
    pathMatch: "full"
  },
  {
    path: "article/:articleId",
    component: NewsDetailsComponent,
    pathMatch: "full"
  },
  {
    path: "article/:articleId/edit",
    component: CreateEditArticleComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
