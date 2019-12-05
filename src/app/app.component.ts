import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-website';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/github.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/linkedin.svg")
    );
  }
}
