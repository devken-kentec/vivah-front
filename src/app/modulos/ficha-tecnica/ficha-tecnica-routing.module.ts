import { FichaTecnicaFormComponent } from './ficha-tecnica-form/ficha-tecnica-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FichaTecnicaListComponent } from './ficha-tecnica-list/ficha-tecnica-list.component';

const routes: Routes = [
  {path: '', component: FichaTecnicaListComponent},
  { path: 'new', component: FichaTecnicaFormComponent},
  { path: 'editar/:id', component: FichaTecnicaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichaTecnicaRoutingModule { }
