import { Component, OnInit } from "@angular/core";
import { ComponentsService } from "../../services/components.service";
import { MetadataRes } from "../../models/metadata.model";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-custom-components",
  templateUrl: "./custom-components.component.html",
  styleUrls: ["./custom-components.component.scss"]
})
export class CustomComponentsComponent implements OnInit {
  private comps: ComponentsService;
  public metasArray: Observable<Array<CompleteMetadata>>;

  constructor(comps: ComponentsService) {
    this.comps = comps;
    this.metasArray = new Observable();
  }

  ngOnInit() {
    this.metasArray = this.comps
      .getMetadata()
      .pipe(switchMap((res: MetadataRes) => this.processData(res)));
  }

  processData(res: MetadataRes): Observable<Array<CompleteMetadata>> {
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
}

interface CompleteMetadata {
  title: string;
  url: string;
  description: string;
  imageSrc: string;
}
