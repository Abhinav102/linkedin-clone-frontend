import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExperienceComponent} from './experience.component';
import {ExperienceAddComponent} from './experience-add/experience-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ExperienceRoutingModule} from './experience-routing.module';
import { ExperienceEditComponent } from './experience-edit/experience-edit.component';


@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceAddComponent,
    ExperienceEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExperienceRoutingModule,
  ],
  exports: [
    ExperienceComponent,
  ]
})
export class ExperienceModule {
}
