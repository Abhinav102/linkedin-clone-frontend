import { Component, OnInit } from '@angular/core';
import { Experience } from '../IExperience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experience_list: Array<Experience> = [
    {
      id: 3,
      role: 'watchmen',
      duration: 'year',
      startMonth: 'apr',
      endMonth: 'jan',
      description: 'vas',
      location: 'bang',
    },
    {
      id: 3,
      role: 'Assistant prof',
      duration: 'year',
      startMonth: 'apr',
      endMonth: 'jan',
      description: 'vas',
      location: 'bang',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
