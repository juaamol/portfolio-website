import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AngularMaterialModule } from "./modules/material/angular-material/angular-material.module";
import { Routes, RouterModule } from "@angular/router";
import { CustomComponentsComponent } from "./components/custom-components/custom-components.component";
import { OpenGraphCardComponent } from "./components/open-graph-card/open-graph-card.component";
import { ComponentsService } from "./services/components.service";
import { HttpClientModule } from "@angular/common/http";
import { WebsComponent } from './components/webs/webs.component';
import { MetadataCardsDisplayerComponent } from './components/metadata-cards-displayer/metadata-cards-displayer.component';

const appRoutes: Routes = [
  { path: "custom-components", component: CustomComponentsComponent },
  { path: "pages", component: WebsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomComponentsComponent,
    OpenGraphCardComponent,
    WebsComponent,
    MetadataCardsDisplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ComponentsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
