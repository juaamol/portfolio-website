import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SkillGroupComponent } from './skill-group/skill-group.component';
import { LanguageGroupComponent } from './language-group/language-group.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [MatButtonModule, RouterLink, MatCardModule, SkillGroupComponent, LanguageGroupComponent, PersonalDataComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
