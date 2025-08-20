import { Component, OnInit } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: "language-group",
  imports: [MatIcon, SkillsComponent],
  templateUrl: "./language-group.component.html",
  styleUrls: ["./language-group.component.scss"]
})
export class LanguageGroupComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
