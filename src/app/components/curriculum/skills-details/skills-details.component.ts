import { Component } from "@angular/core";

export interface SkillDetails {
  skill: string;
  description: string;
}

const SKILL_DATA: SkillDetails[] = [
  {
    skill: "HTML, HTML5",
    description: `Knowledge about HTML.</br>
      <strong>Tags</strong>: semantic and non-semantic tags<br/>
      <strong>Accesibility</strong>: aria attributes, accesibility configurations (breadcrumbs, colors, skip to content, ...), accesible tables, ...
      `
  },
  {
    skill: "CSS, CSS3",
    description: `
      Knowledge about styling with CSS and CSS3.</br>
      <strong>CSS</strong>: Styles expected in a website (colors, fonts, ...).</br>
      <strong>CSS3</strong>: Composition of layouts with Grids and Flex-box, animations and transitions.
      `
  },
  { skill: "SCSS", description: `
      CSS extension</br>
      Sass modules, mixins, functions, nesting, ...
      `
  },
  { skill: "Javascript", description: `
    Frontend and Backend (Node.js)
    <strong>General language knowledge</strong>: Data structures, control flow statements, DOM modifications, syntax, ...</br>
    <strong>Other</strong>: Clean code, basic design patterns knowledge, performance awareness.
  ` },
  { skill: "Typescript", description: `
    Same experience as in Javascript but also applied to specific frameworks like <strong>Angular</strong> and <strong>React</strong>.
  ` },
  { skill: "Angular", description: "Beryllium" },
  { skill: "Angular Material", description: "Nitrogen" },
  { skill: "React", description: "Boron" },
  { skill: "React bootstrap", description: "Oxygen" },
  { skill: "JQuery", description: "Carbon" },
  { skill: "Electronjs", description: "Fluorine" },
  { skill: "Bootstrap 4", description: "Basic styling knowledge using Boostrap 4" },
  { skill: "Flutter", description: "Neon" },
  { skill: "Ionic 4 + Capacitor", description: "Neon" },
  { skill: "Git", description: "Neon" },
  { skill: "Github", description: "Neon" }
];

@Component({
  selector: "skills-details",
  templateUrl: "./skills-details.component.html",
  styleUrls: ["./skills-details.component.scss"]
})
export class SkillsDetailsComponent {
  displayedColumns: string[] = ["skill", "description"];
  dataSource = SKILL_DATA;
}
