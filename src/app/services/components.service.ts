import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { MetadataRes } from "../models/metadata.model";

@Injectable({
  providedIn: "root"
})
export class ComponentsService {
  private componentUrls = [
    "https://juaamol.github.io/html-css-examples/index-component/index-component.html",
    "https://juaamol.github.io/html-css-examples/dual-card/dual-card.html",
    "https://juaamol.github.io/html-css-examples/open-card/open-card.html",
    "https://juaamol.github.io/html-css-examples/game-radial-menu/game-radial-menu.html",
    "https://juaamol.github.io/html-css-examples/login-form/login-form.html"
  ];

  private pageUrls = [
    "https://juaamol.github.io/react-recipes/",
    "https://juaamol.github.io/react-burger-builder/",
    "https://juaamol.github.io/angular-band-template/",
    "https://juaamol.github.io/portfolio-website/"
  ];

  constructor(private http: HttpClient) {}

  getMetadata(urls: Array<string>) {
    const response = this.http.post<MetadataRes>(
      "https://juaamol-content-og-scrap.glitch.me/scrape",
      { urls }
    );

    return response;
  }

  getPagesMetadata(): Observable<MetadataRes> {
    return this.getMetadata(this.pageUrls);
  }

  getComponentsMetadata(): Observable<MetadataRes> {
    return this.getMetadata(this.componentUrls);
  }
}

export function processData(
  res: MetadataRes
): Observable<Array<CompleteMetadata>> {
  let allMetas: Array<CompleteMetadata> = [];

  for (const key of Object.keys(res.foundMetas)) {
    let metaObtained: CompleteMetadata = {
      title: "",
      url: "",
      description: "",
      imageSrc: ""
    };
    for (const meta of res.foundMetas[key]) {
      if (meta.property == "og:title") {
        metaObtained.title = meta.content;
      }

      if (meta.property == "og:image") {
        metaObtained.imageSrc = meta.content;
      }

      if (meta.property == "og:description") {
        metaObtained.description = meta.content;
      }

      if (meta.property == "og:url") {
        metaObtained.url = meta.content;
      }
    }

    allMetas.push(metaObtained);
  }

  return new Observable<Array<CompleteMetadata>>(subs => subs.next(allMetas));
}

export interface CompleteMetadata {
  title: string;
  url: string;
  description: string;
  imageSrc: string;
}
