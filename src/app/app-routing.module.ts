import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomComponentsComponent } from "./components/custom-components/custom-components.component";
import { WebsComponent } from "./components/webs/webs.component";
import { CurriculumComponent } from "./components/curriculum/curriculum.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";

const routes: Routes = [
  { path: "home", component: LandingPageComponent, data: { animation: "0" } },
  { path: "pages", component: WebsComponent, data: { animation: "1" } },
  { path: "components", component: CustomComponentsComponent, data: { animation: "2" } },
  { path: "about", component: CurriculumComponent, data: { animation: "3" } },
  { path: "**", redirectTo: "home", pathMatch: "full", data: { animation: "0" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
