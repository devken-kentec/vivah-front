import { RelatorioExerciciosListComponent } from './relatorio-exercicios-list/relatorio-exercicios-list.component';
import { RelatorioExerciciosFormComponent } from './relatorio-exercicios-form/relatorio-exercicios-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'buscar/:id/:dia', component: RelatorioExerciciosFormComponent},
  { path: 'consultaExer',  component: RelatorioExerciciosListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioExerciciosRoutingModule { }
