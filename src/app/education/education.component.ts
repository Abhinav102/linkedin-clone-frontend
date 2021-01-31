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
      role: 'BE',
      duration: 'year',
      startMonth: '2017',
      endMonth: '2021',
      description: 'Vasavi College of Engineering',
      location: 'hyd',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
