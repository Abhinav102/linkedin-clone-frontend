import { Component, OnInit, Input } from '@angular/core';
import { Education } from 'src/app/IEducation';

@Component({
  selector: 'app-education-element',
  templateUrl: './education-element.component.html',
  styleUrls: ['./education-element.component.css'],
})
export class EducationElementComponent implements OnInit {
  constructor() {}
  @Input()
  education_detail!: Education;
  ngOnInit(): void {}
}
