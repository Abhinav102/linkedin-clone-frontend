import {Component, OnInit} from '@angular/core';
import {Education} from '../IEducation';
import {EducationService} from './education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  // tslint:disable-next-line:variable-name
  education_list: Array<Education> = [
    // {
    //   id: 1,
    //   role: 'BE',
    //   duration: 'year',
    //   startMonth: '2017',
    //   endMonth: '2021',
    //   description: 'Vasavi College of Engineering',
    //   location: 'hyd',
    // }
  ];

  // tslint:disable-next-line:typedef
  showEducation() {
    this.educationService.getEducation()
      .subscribe((data: Array<Education>) => (this.education_list = data));
  }

  constructor(private educationService: EducationService) {
  }

  ngOnInit(): void {
    this.showEducation();
  }
}
