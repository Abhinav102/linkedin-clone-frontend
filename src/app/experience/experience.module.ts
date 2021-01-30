import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { ExperienceElementComponent } from './experience-element/experience-element.component';



@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceElementComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ExperienceComponent,
  ]
})
export class ExperienceModule { }
