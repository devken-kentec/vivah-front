import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExercicioListComponent } from './exercicio-list/exercicio-list.component';
import { ExercicioFormComponent } from './exercicio-form/exercicio-form.component';

const routes: Routes = [
  { path: '', component: ExercicioListComponent},
  { path: 'new', component: ExercicioFormComponent},
  { path: 'editar/:id', component: ExercicioFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicioRoutingModule { }
