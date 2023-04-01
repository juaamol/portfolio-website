import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, OnChanges {
  @Input() value: string | number = 0;
  mode: ProgressBarMode = 'determinate';
  subject = new BehaviorSubject<number | string>(0);
  delayedProgress: Observable<number | string>;

  constructor() {
    this.delayedProgress = this.subject.asObservable().pipe(delay(0));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.subject.next(changes.value.currentValue || 0);
  }

  ngOnInit() {}
}
