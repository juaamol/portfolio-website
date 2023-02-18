import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-line-separator',
  templateUrl: './time-line-separator.component.html',
  styleUrls: ['./time-line-separator.component.scss'],
})
export class TimeLineSeparatorComponent implements OnInit {
  @Input() position: 'center' | 'start' | 'end' = 'center';

  constructor() {}

  ngOnInit(): void {}
}
