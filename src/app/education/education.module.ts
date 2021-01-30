import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { EducationElementComponent } from './education-element/education-element.component';



@NgModule({
  declarations: [
    EducationComponent,
    EducationElementComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EducationComponent,
  ]
})
export class EducationModule { }
