import { Component, OnInit } from '@angular/core';
import { Experience } from '../IExperience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  experience_list: Array<Experience> = [
    {
      id: 3,
      role: 'Assistant prof',
      duration: '3',
      startMonth: '2018',
      endMonth: '2020',
      description: 'vas',
      location: 'bang',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
