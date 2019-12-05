import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {

  @Input() value = 50;
  mode = "determinate";
  bufferValue = 75;

  constructor() {}

  ngOnInit() {}
}
