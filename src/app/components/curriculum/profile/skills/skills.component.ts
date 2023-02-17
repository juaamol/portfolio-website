import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @Input() value: string | number = 0;
  mode: ProgressBarMode = 'determinate';
  delayedProgress: string | number = 0;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.delayedProgress = this.value;
  }
}
