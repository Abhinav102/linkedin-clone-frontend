import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { EducationAddComponent } from './education-add/education-add.component';
import { EducationEditComponent } from './education-edit/education-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EducationRoutingModule} from './education-routing.module';



@NgModule({
  declarations: [
    EducationComponent,
    EducationAddComponent,
    EducationEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EducationRoutingModule,
  ],
  exports: [
    EducationComponent,
  ]
})
export class EducationModule { }
