import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationModule } from '../education/education.module';
import { ExperienceModule } from '../experience/experience.module';
import { SkillsModule } from '../skills/skills.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [ MainComponent,],
  imports: [
    CommonModule,
    EducationModule,
    ExperienceModule,
    SkillsModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
