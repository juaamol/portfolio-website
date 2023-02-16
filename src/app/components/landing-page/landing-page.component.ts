import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';

const TYPING_SPEED = 200;

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  presentation: string = "Hello, I'm ";
  name: string = 'J. Andrés';
  writtenPresentation: string = '';
  writtenName: string = '';

  constructor() {}

  ngOnInit() {
    interval(TYPING_SPEED)
      .pipe(
        take(this.presentation.length + 1),
        map((i) => this.presentation.substring(0, i))
      )
      .subscribe((written) => {
        this.writtenPresentation = written;
      });

    interval(TYPING_SPEED)
      .pipe(
        take(this.name.length + 1),
        map((i) => this.name.substring(0, i)),
        delay(TYPING_SPEED * (this.name.length + 1))
      )
      .subscribe((written) => {
        this.writtenName = written;
      });
  }
}
