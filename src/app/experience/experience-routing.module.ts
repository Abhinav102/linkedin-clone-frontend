import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExperienceAddComponent} from './experience-add/experience-add.component';
import {ExperienceEditComponent} from './experience-edit/experience-edit.component';


const routes: Routes = [
  {
    path: 'experience/:username',
    component: ExperienceAddComponent,
  },
  {
    path: 'experience/:username/edit/:id',
    component: ExperienceEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule {
}
