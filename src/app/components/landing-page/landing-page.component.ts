import { AfterViewInit, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';

declare global {
  interface Window {
    KUTE: any;
  }
}

const TYPING_SPEED = 200;

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  presentation: string = "Hello, I'm ";
  name: string = 'J. Andrés';
  writtenPresentation: string = '';
  writtenName: string = '';

  constructor() {}

  ngAfterViewInit(): void {
    if (window.KUTE && window.KUTE.fromTo) {
      const tween = window.KUTE.fromTo(
        '#egg1',
        { path: '#egg1' },
        { path: '#egg2' },
        { repeat: 100, duration: 3000, yoyo: true }
      );

      tween.start();
    }
  }

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
