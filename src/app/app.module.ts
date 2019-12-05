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
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { WorkExperienceComponent } from './components/curriculum/work-experience/work-experience.component';
import { EducationComponent } from './components/curriculum/education/education.component';
import { ProfileComponent } from './components/curriculum/profile/profile.component';
import { DetailsComponent } from './components/curriculum/details/details.component';
import { PersonalDataComponent } from './components/curriculum/profile/personal-data/personal-data.component';
import { SkillsComponent } from './components/curriculum/profile/skills/skills.component';
import { SkillGroupComponent } from './components/curriculum/profile/skill-group/skill-group.component';
import { LanguageGroupComponent } from './components/curriculum/profile/language-group/language-group.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: "custom-components", component: CustomComponentsComponent },
  { path: "pages", component: WebsComponent },
  { path: "about", component: CurriculumComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomComponentsComponent,
    OpenGraphCardComponent,
    WebsComponent,
    MetadataCardsDisplayerComponent,
    CurriculumComponent,
    WorkExperienceComponent,
    EducationComponent,
    ProfileComponent,
    DetailsComponent,
    PersonalDataComponent,
    SkillsComponent,
    SkillGroupComponent,
    LanguageGroupComponent,
    LandingPageComponent,
    FooterComponent
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
