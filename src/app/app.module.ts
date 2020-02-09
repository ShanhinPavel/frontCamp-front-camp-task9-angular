import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  FooterComponent,
  HeaderComponent,
  HomeComponent,
  TitleComponent,
  ButtonComponent,
  NewsLineComponent,
  PublishedDateComponent,
  ImageComponent,
  LoadMoreComponent,
  NewsCardComponent,
  NewsDetailsComponent,
  CreateEditArticleComponent,
  CreateEditArticleFormComponent,
  MainSectionComponent,
  SearchSectionComponent
} from "./components/";
import { HttpService, GlobalDataService } from "./services";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    TitleComponent,
    SearchSectionComponent,
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
