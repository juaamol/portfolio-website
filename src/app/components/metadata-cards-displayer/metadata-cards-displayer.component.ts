import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-metadata-cards-displayer',
  templateUrl: './metadata-cards-displayer.component.html',
  styleUrls: ['./metadata-cards-displayer.component.scss'],
})
export class MetadataCardsDisplayerComponent implements OnInit {
  @Input() metadatas: Array<CompleteMetadata> = [];
  constructor() {}

  ngOnInit() {}
}

interface CompleteMetadata {
  title: string;
  url: string;
  description: string;
  imageSrc: string;
}
