import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-link',
  templateUrl: './custom-link.component.html',
  styleUrls: ['./custom-link.component.scss']
})
export class CustomLinkComponent implements OnInit {
  @Input() to: '/';

  constructor() { }

  ngOnInit() {
  }

}
