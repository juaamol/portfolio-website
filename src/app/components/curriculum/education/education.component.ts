import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TimeLineSeparatorComponent } from '../../time-line-separator/time-line-separator.component';
import { DetailsComponent } from '../details/details.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-education',
  imports: [MatIcon, TimeLineSeparatorComponent, DetailsComponent, MatCardModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
