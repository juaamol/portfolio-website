import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { svgLogosPath } from "../environments/environment";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterOutlet } from "@angular/router";
import { CommonBackgroundComponent } from "./components/common-background/common-background.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ComponentsService } from "./services/components.service";

@Component({
  selector: "app-root",
  imports: [FooterComponent, RouterOutlet, CommonBackgroundComponent, NavbarComponent],
  providers: [ComponentsService],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "portfolio-website";

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${svgLogosPath}/github.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${svgLogosPath}/linkedin.svg`)
    );
  }
}
