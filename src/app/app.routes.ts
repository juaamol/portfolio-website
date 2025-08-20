import { Routes } from '@angular/router';
import { CustomComponentsComponent } from './components/custom-components/custom-components.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { SkillsDetailsComponent } from './components/curriculum/skills-details/skills-details.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { WebsComponent } from './components/webs/webs.component';

export const routes: Routes = [
  { path: "components", component: CustomComponentsComponent },
  { path: "pages", component: WebsComponent },
  { path: "profile", component: CurriculumComponent },
  { path: "home", component: LandingPageComponent },
  { path: "skills-details", component: SkillsDetailsComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];
