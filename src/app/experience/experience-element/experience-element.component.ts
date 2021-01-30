import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/IExperience';

@Component({
  selector: 'app-experience-element',
  templateUrl: './experience-element.component.html',
  styleUrls: ['./experience-element.component.css'],
})
export class ExperienceElementComponent implements OnInit {
  constructor() {}

  @Input()
  experience_detail!: Experience;

  ngOnInit(): void {}
}
