import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills-soft-skills.component.html',
  styleUrls: ['./skills-soft-skills.component.scss'],
})
export class SkillsSoftSkillsComponent implements OnInit {
  competences = [
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'NodeJS',
    'MySQL',
    'MongoDB',
  ];
  soft_skills = [
    'Autonomie',
    'Persévérance',
    'Rigueur',
    'Adaptabilité',
    'Curiosité',
    'Collaboration',
  ];
  constructor() {}

  ngOnInit(): void {}
}
