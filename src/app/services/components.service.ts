import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { MetadataRes } from "../models/metadata.model";

@Injectable({
  providedIn: "root"
})
export class ComponentsService {
  constructor(private http: HttpClient) {}

  getMetadata(): Observable<MetadataRes> {
    const response = this.http.post<MetadataRes>(
      "http://localhost:8081/scrape",
      {
        urls: [
          "https://juaamol.github.io/html-css-examples/index-component/index-component.html",
          "https://juaamol.github.io/html-css-examples/dual-card/dual-card.html",
          "https://juaamol.github.io/html-css-examples/open-card/open-card.html",
          "https://juaamol.github.io/html-css-examples/game-radial-menu/game-radial-menu.html",
          "https://juaamol.github.io/html-css-examples/login-form/login-form.html",
        ]
      }
    );

    return response;
  }
}
