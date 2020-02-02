import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExercicioRoutingModule } from './lista-exercicio-routing.module';
import { ListaExercicioFormComponent } from './lista-exercicio-form/lista-exercicio-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaExercicioFormComponent],
  imports: [
    CommonModule,
    ListaExercicioRoutingModule,
    ReactiveFormsModule
  ]
})
export class ListaExercicioModule { }
