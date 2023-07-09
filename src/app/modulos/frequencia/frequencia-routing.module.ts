import { FrequenciaListFormComponent } from './frequencia-list-form/frequencia-list-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrequenciaListComponent } from './frequencia-list/frequencia-list.component';

const routes: Routes = [
  { path: '', component: FrequenciaListFormComponent },
  { path: 'listarfrequencia', component: FrequenciaListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrequenciaRoutingModule { }
