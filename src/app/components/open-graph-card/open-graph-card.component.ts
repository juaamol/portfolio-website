import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-open-graph-card',
  templateUrl: './open-graph-card.component.html',
  styleUrls: ['./open-graph-card.component.scss'],
})
export class OpenGraphCardComponent implements OnInit {
  @Input() description: string = '';
  @Input() url: string = '';
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() github: string = '';

  constructor() {}

  ngOnInit() {}
}
