import { Component, OnInit, Input } from '@angular/core';
import { Skills } from 'src/app/ISkills';

@Component({
  selector: 'app-skills-element',
  templateUrl: './skills-element.component.html',
  styleUrls: ['./skills-element.component.css']
})
export class SkillsElementComponent implements OnInit {
  constructor() { }

  @Input()
  skills_detail!: Skills;

  ngOnInit(): void {
  }

}
