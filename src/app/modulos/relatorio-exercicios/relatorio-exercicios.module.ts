import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioExerciciosRoutingModule } from './relatorio-exercicios-routing.module';
import { RelatorioExerciciosFormComponent } from './relatorio-exercicios-form/relatorio-exercicios-form.component';
import { RelatorioExerciciosListComponent } from './relatorio-exercicios-list/relatorio-exercicios-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RelatorioExerciciosFormComponent, RelatorioExerciciosListComponent],
  imports: [
    CommonModule,
    RelatorioExerciciosRoutingModule,
    ReactiveFormsModule
  ]
})
export class RelatorioExerciciosModule { }
