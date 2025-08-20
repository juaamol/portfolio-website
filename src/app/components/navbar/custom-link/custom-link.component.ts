import { Component, OnInit, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'custom-link',
  imports: [RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './custom-link.component.html',
  styleUrls: ['./custom-link.component.scss'],
})
export class CustomLinkComponent implements OnInit {
  @Input() to: string = '/';

  constructor() {}

  ngOnInit() {}
}
