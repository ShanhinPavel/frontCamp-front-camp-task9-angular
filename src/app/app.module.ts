import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/common/footer/footer.component";
import { HeaderComponent } from "./components/common/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchSectionComponent } from "./components/home/search-section/search-section.component";
import { TitleComponent } from "./components/common/title/title.component";
import { MainSectionComponent } from "./components/home/main-section/main-section.component";
import { ButtonComponent } from "./components/common/button/button.component";
import { NewsLineComponent } from "./components/home/main-section/news-line/news-line.component";
import { PublishedDateComponent } from "./components/common/published-date/published-date.component";
import { ImageComponent } from "./components/common/image/image.component";
import { LoadMoreComponent } from "./components/home/main-section/load-more/load-more.component";
import { NewsCardComponent } from "./components/news-details/news-card/news-card.component";
import { NewsDetailsComponent } from "./components/news-details/news-details.component";
import { CreateEditArticleComponent } from "./components/create-edit-article/create-edit-article.component";
import { CreateEditArticleFormComponent } from "./components/create-edit-article/create-edit-article-form/create-edit-article-form.component";
import { GlobalDataService } from "./services/global-data.service";
import { HttpService } from "./services/http.service";
import { HomeContentComponent } from "./components/home/home-content/home-content.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SearchSectionComponent,
    MainSectionComponent,
    HomeContentComponent,
    SearchSectionComponent,
    TitleComponent,
    MainSectionComponent,
    ButtonComponent,
    NewsLineComponent,
    PublishedDateComponent,
    ImageComponent,
    LoadMoreComponent,
    NewsCardComponent,
    NewsDetailsComponent,
    CreateEditArticleComponent,
    CreateEditArticleFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [GlobalDataService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
