import { Component } from '@angular/core';

export interface SkillDetails {
  skill: string;
  description: string;
}

const SKILL_DATA: SkillDetails[] = [
  {
    skill: 'HTML, HTML5',
    description: `Knowledge about HTML.</br>
      <strong>Tags</strong>: semantic and non-semantic tags<br/>
      <strong>Accesibility</strong>: aria attributes, accesibility configurations (breadcrumbs, colors, skip to content, ...), accesible tables, ...
      `,
  },
  {
    skill: 'CSS, CSS3',
    description: `
      Styling with CSS and CSS3.</br>
      <strong>CSS</strong>: Styles expected in a website (colors, fonts, ...).</br>
      <strong>CSS3</strong>: Composition of layouts with Grids and Flex-box, animations and transitions.
      `,
  },
  {
    skill: 'SCSS',
    description: `
      CSS extension</br>
      Sass modules, mixins, functions, nesting, ...
      `,
  },
  {
    skill: 'Javascript',
    description: `
    Frontend and Backend (Node.js)</br>
    <strong>General language knowledge</strong>: Data structures, control flow statements, DOM modifications, syntax, ...</br>
    <strong>Other</strong>: Clean code, basic design patterns knowledge, performance awareness.
  `,
  },
  {
    skill: 'Typescript',
    description: `
    Same experience as in Javascript but also applied to specific frameworks like <strong>Angular</strong> and <strong>React</strong>.
  `,
  },
  {
    skill: 'Angular',
    description:
      'Angular basics, styling, routing, services, RxJs Observables NgRx state management',
  },
  {
    skill: 'Angular Material',
    description: 'Experience with material components and components API',
  },
  {
    skill: 'React',
    description:
      'React basics, state management (Redux and Library-specific), React Hooks, Routing, class and function components, access to http content, React typescript, styling.',
  },
  {
    skill: 'React bootstrap',
    description: 'Basic styling knowledge using React Boostrap',
  },
  {
    skill: 'JQuery',
    description: 'JQuery basics, DOM manipulation, AJAX, HTML events',
  },
  {
    skill: 'Electronjs',
    description:
      'Building applications for Windows. IpcMain and IpcRender comunication',
  },
  {
    skill: 'Bootstrap 4',
    description: 'Basic styling knowledge using Boostrap 4',
  },
  {
    skill: 'Ionic 4 + Capacitor',
    description:
      'Basic framework knowledge. Capacitor as tool to build mobile applications.',
  },
  {
    skill: 'Express.js',
    description: 'Library used to make REST API.',
  },
  {
    skill: 'Amazon Web Services',
    description:
      'Basic knowledge of AWS API Gateway, AWS Lambdas, DynamoDB, AppSync (Graphql)',
  },
  { skill: 'Git', description: '' },
  { skill: 'Github', description: '' },
  { skill: 'Flutter', description: '' },
  {
    skill: 'Jira',
    description: 'Jira is a issue tracking and project management tool.',
  },
];

@Component({
  selector: 'skills-details',
  templateUrl: './skills-details.component.html',
  styleUrls: ['./skills-details.component.scss'],
})
export class SkillsDetailsComponent {
  displayedColumns: string[] = ['skill', 'description'];
  dataSource = SKILL_DATA;
}
