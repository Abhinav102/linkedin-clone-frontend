import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkillsAddComponent} from './skills-add/skills-add.component';

const routes: Routes = [
  {
    path: 'skills/:username',
    component: SkillsAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule {
}
