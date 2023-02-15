import { Component, OnInit } from '@angular/core';
import {
  ComponentsService,
  CompleteMetadata,
} from '../../services/components.service';

@Component({
  selector: 'app-webs',
  templateUrl: './webs.component.html',
  styleUrls: ['./webs.component.scss'],
  host: {
    'aria-live': 'polite',
  },
})
export class WebsComponent implements OnInit {
  private comps: ComponentsService;
  public pagesMeta: CompleteMetadata[] = [];
  public loading: boolean;

  constructor(comps: ComponentsService) {
    this.comps = comps;
    this.loading = false;
  }

  ngOnInit() {
    this.loading = true;
    this.comps
      .getPagesMetadata()
      .subscribe((completeMetadata: CompleteMetadata[]) => {
        this.pagesMeta = completeMetadata;
        this.loading = false;
      });
  }
}
