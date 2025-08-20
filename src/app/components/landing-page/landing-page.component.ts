import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { from, of } from 'rxjs';
import { concatMap, delay, map, scan, take } from 'rxjs/operators';

declare global {
  interface Window {
    KUTE: any;
  }
}

const TYPING_SPEED = 200;

@Component({
  selector: 'landing-page',
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements AfterViewInit {
  presentation: string = "Hello, I'm ";
  name: string = 'J. Andrés';

  writtenName$ = from(this.name.split(''))
      .pipe(
        concatMap((char) => of(char).pipe(delay(TYPING_SPEED))),
        delay(TYPING_SPEED * this.presentation.length),
        scan((acc, char) => acc + char, '')
      );

  writtenPresentation$ = from(this.presentation.split(''))
      .pipe(
        concatMap((char) => of(char).pipe(delay(TYPING_SPEED))),
        scan((acc, char) => acc + char, '')
      )

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
}
