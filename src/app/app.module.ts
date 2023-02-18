import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AngularMaterialModule } from "./modules/material/angular-material/angular-material.module";
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
import { CommonBackgroundComponent } from './components/common-background/common-background.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomLinkComponent } from './components/navbar/custom-link/custom-link.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SkillsDetailsComponent } from './components/curriculum/skills-details/skills-details.component';
import { TimeLineSeparatorComponent } from './components/time-line-separator/time-line-separator.component';



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
    CommonBackgroundComponent,
    FooterComponent,
    CustomLinkComponent,
    LandingPageComponent,
    SkillsDetailsComponent,
    TimeLineSeparatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ComponentsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
