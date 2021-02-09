import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EducationAddComponent} from './education-add/education-add.component';
import {EducationEditComponent} from './education-edit/education-edit.component';


const routes: Routes = [
  {
    path: 'education/:username',
    component: EducationAddComponent
  },
  {
    path: 'education/:username/edit/:id',
    component: EducationEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule {
}
