import { Component, OnInit } from "@angular/core";
import {
  ComponentsService,
  processData,
  CompleteMetadata
} from "../../services/components.service";
import { MetadataRes } from "../../models/metadata.model";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-custom-components",
  templateUrl: "./custom-components.component.html",
  styleUrls: ["./custom-components.component.scss"],
  host: {
    "aria-live": "polite"
  }
})
export class CustomComponentsComponent implements OnInit {
  private comps: ComponentsService;
  public componentsMeta: CompleteMetadata[];
  public loading: boolean;

  constructor(comps: ComponentsService) {
    this.comps = comps;
    this.loading = false;
  }

  ngOnInit() {
    this.loading = true;
    this.comps
      .getComponentsMetadata()
      .pipe(switchMap((res: MetadataRes) => processData(res)))
      .subscribe((completeMetadata: CompleteMetadata[]) => {
        this.componentsMeta = completeMetadata;
      });
  }
}
