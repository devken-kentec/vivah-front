import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensalidadeFormComponent } from './mensalidade-form/mensalidade-form.component';
import { MensalidadeListComponent } from './mensalidade-list/mensalidade-list.component';

const routes: Routes = [

  { path: '', component: MensalidadeListComponent},
  { path: 'new', component: MensalidadeFormComponent},
  { path: 'editar/:id', component: MensalidadeFormComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensalidadeRoutingModule { }
