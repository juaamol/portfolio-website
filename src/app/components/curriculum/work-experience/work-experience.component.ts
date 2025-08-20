import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TimeLineSeparatorComponent } from '../../time-line-separator/time-line-separator.component';
import { DetailsComponent } from '../details/details.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-work-experience',
  imports: [MatIcon, TimeLineSeparatorComponent, DetailsComponent, MatCardModule],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
