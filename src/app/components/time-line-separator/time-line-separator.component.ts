import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-time-line-separator',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './time-line-separator.component.html',
  styleUrls: ['./time-line-separator.component.scss'],
})
export class TimeLineSeparatorComponent implements OnInit {
  @Input() position: 'center' | 'start' | 'end' = 'center';

  constructor() {}

  ngOnInit(): void {}
}
