import { Component, OnInit } from '@angular/core';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-curriculum',
  imports: [EducationComponent, WorkExperienceComponent, ProfileComponent],
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
