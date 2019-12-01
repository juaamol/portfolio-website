import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-open-graph-card',
  templateUrl: './open-graph-card.component.html',
  styleUrls: ['./open-graph-card.component.scss']
})
export class OpenGraphCardComponent implements OnInit {

  @Input() description: string = 'this is a description'
  @Input() url: string = 'this is an url'
  @Input() imageSrc: string = 'this is an imageSrc'
  @Input() title: string = 'title'

  constructor() { }

  ngOnInit() {
  }

}
