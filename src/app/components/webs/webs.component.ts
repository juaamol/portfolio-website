import { Component, OnInit } from "@angular/core";
import { ComponentsService, processData, CompleteMetadata } from "../../services/components.service";
import { MetadataRes } from "../../models/metadata.model";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-webs",
  templateUrl: "./webs.component.html",
  styleUrls: ["./webs.component.scss"]
})
export class WebsComponent implements OnInit {
  private comps: ComponentsService;
  public pagesMeta: Observable<Array<CompleteMetadata>>;

  constructor(comps: ComponentsService) {
    this.comps = comps;
    this.pagesMeta = new Observable();
  }

  ngOnInit() {
    this.pagesMeta = this.comps
      .getPagesMetadata()
      .pipe(switchMap((res: MetadataRes) => processData(res)));
  }
}
