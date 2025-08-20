import { Component, OnInit, Input } from '@angular/core';
import { CompleteMetadata } from '../../services/components.service';
import { OpenGraphCardComponent } from '../open-graph-card/open-graph-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metadata-cards-displayer',
  imports: [CommonModule, OpenGraphCardComponent],
  templateUrl: './metadata-cards-displayer.component.html',
  styleUrls: ['./metadata-cards-displayer.component.scss'],
})
export class MetadataCardsDisplayerComponent implements OnInit {
  @Input() metadatas: CompleteMetadata[] = [];
  constructor() {}

  ngOnInit() {}
}
