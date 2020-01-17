import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/common/footer/footer.component";
import { HeaderComponent } from "./components/common/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchSectionComponent } from "./components/home/home-content/search-section/search-section.component";
import { HomeContentComponent } from "./components/home/home-content/home-content.component";
import { TitleComponent } from "./components/common/title/title.component";
import { MainSectionComponent } from "./components/home/home-content/main-section/main-section.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SearchSectionComponent,
    HomeContentComponent,
    TitleComponent,
    MainSectionComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
