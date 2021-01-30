import { Component, OnInit } from '@angular/core';
import { Skills } from '../ISkills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills_list: Array<Skills> = [
    {
      language: { name: 'java' },
      id: 5,
    },
    {
      language: { name: 'python' },
      id: 6,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
