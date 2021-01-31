import { Component, OnInit } from '@angular/core';
import { Education } from '../IEducation';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  education_list: Array<Education> = [
    {
      id: 1,
      role: 'professor',
      duration: 'year',
      startMonth: 'jan',
      endMonth: 'dec',
      description: 'ES',
      location: 'hyd',
    },
    {
      id: 2,
      role: 'professor',
      duration: 'year',
      startMonth: 'feb',
      endMonth: 'nov',
      description: 'DA',
      location: 'hyd',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
