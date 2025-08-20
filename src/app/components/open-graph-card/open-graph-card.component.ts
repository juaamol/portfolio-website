import { Component, OnInit, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-open-graph-card',
  imports: [MatIcon, MatButton, MatCardModule],
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
