import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillsAddComponent } from './skills-add/skills-add.component';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import {SkillsRoutingModule} from './skills-routing.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    SkillsComponent,
    SkillsAddComponent,
    SkillsEditComponent,
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    SkillsComponent,
  ]
})
export class SkillsModule {

}
