import { FrequenciaListFormComponent } from './frequencia-list-form/frequencia-list-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: FrequenciaListFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrequenciaRoutingModule { }
