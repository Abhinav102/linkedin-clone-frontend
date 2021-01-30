import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsElementComponent } from './skills-element/skills-element.component';
import { SkillsComponent } from './skills.component';



@NgModule({
  declarations: [
    SkillsComponent,
    SkillsElementComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SkillsComponent,
  ]
})
export class SkillsModule {

}
