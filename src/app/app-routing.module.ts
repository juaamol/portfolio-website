import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomComponentsComponent } from "./components/custom-components/custom-components.component";
import { WebsComponent } from "./components/webs/webs.component";
import { CurriculumComponent } from "./components/curriculum/curriculum.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";

const routes: Routes = [
  { path: "components", component: CustomComponentsComponent },
  { path: "pages", component: WebsComponent },
  { path: "about", component: CurriculumComponent },
  { path: "home", component: LandingPageComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
