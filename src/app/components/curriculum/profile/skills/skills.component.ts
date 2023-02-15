import { Component, OnInit, Input } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Input() value: string | number = 50;
  mode: ProgressBarMode = 'determinate';
  bufferValue = 75;

  constructor() {}

  ngOnInit() {}
}
