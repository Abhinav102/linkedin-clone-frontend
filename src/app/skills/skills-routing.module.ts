import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkillsAddComponent} from './skills-add/skills-add.component';
import {SkillsEditComponent} from './skills-edit/skills-edit.component';

const routes: Routes = [
  {
    path: 'skills/:username',
    component: SkillsAddComponent,
  },
  {
    path: 'skills/:username/edit/:id',
    component: SkillsEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule {
}
