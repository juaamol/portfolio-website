import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularMaterialModule } from './modules/material/angular-material/angular-material.module';
import { Routes, RouterModule } from '@angular/router';
import { CustomComponentsComponent } from './components/custom-components/custom-components.component';
import { OpenGraphCardComponent } from './components/open-graph-card/open-graph-card.component';

const appRoutes: Routes = [
  { path: 'custom-components', component: CustomComponentsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomComponentsComponent,
    OpenGraphCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
