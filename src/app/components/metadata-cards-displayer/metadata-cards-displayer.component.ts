import { Component, OnInit, Input } from '@angular/core';
import { CompleteMetadata } from '../../services/components.service';

@Component({
  selector: 'app-metadata-cards-displayer',
  templateUrl: './metadata-cards-displayer.component.html',
  styleUrls: ['./metadata-cards-displayer.component.scss'],
})
export class MetadataCardsDisplayerComponent implements OnInit {
  @Input() metadatas: CompleteMetadata[] = [];
  constructor() {}

  ngOnInit() {}
}
