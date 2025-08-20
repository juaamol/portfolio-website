import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'skill-group',
  imports: [MatIcon, SkillsComponent],
  templateUrl: './skill-group.component.html',
  styleUrls: ['./skill-group.component.scss']
})
export class SkillGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
