import { Component, OnInit, Input } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Input() value: string | number = 0;
  mode: ProgressBarMode = 'determinate';
  delayedProgress: string | number = 0;

  constructor() {}

  ngOnInit() {
    of(this.value)
      .pipe(delay(0))
      .subscribe((value) => {
        this.delayedProgress = value;
      });
  }
}
