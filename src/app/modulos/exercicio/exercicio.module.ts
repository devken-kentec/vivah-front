import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicioRoutingModule } from './exercicio-routing.module';
import { ExercicioListComponent } from './exercicio-list/exercicio-list.component';
import { ExercicioFormComponent } from './exercicio-form/exercicio-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExercicioListComponent, ExercicioFormComponent],
  imports: [
    CommonModule,
    ExercicioRoutingModule,
    ReactiveFormsModule
  ]
})
export class ExercicioModule { }
