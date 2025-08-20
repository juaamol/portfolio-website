import { Component, OnInit } from '@angular/core';
import {
  ComponentsService,
  CompleteMetadata,
} from '../../services/components.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MetadataCardsDisplayerComponent } from '../metadata-cards-displayer/metadata-cards-displayer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-components',
  imports: [CommonModule, MatProgressSpinner, MetadataCardsDisplayerComponent],
  templateUrl: './custom-components.component.html',
  styleUrls: ['./custom-components.component.scss'],
  host: {
    'aria-live': 'polite',
  },
})
export class CustomComponentsComponent implements OnInit {
  private comps: ComponentsService;
  public componentsMeta: CompleteMetadata[] = [];
  public loading: boolean;

  constructor(comps: ComponentsService) {
    this.comps = comps;
    this.loading = false;
  }

  ngOnInit() {
    this.loading = true;
    this.comps
      .getComponentsMetadata()
      .subscribe((completeMetadata: CompleteMetadata[]) => {
        this.componentsMeta = completeMetadata;
        this.loading = false;
      });
  }
}
