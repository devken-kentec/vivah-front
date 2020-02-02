import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrequenciaRoutingModule } from './frequencia-routing.module';
import { FrequenciaListFormComponent } from './frequencia-list-form/frequencia-list-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FrequenciaListFormComponent],
  imports: [
    CommonModule,
    FrequenciaRoutingModule,
    ReactiveFormsModule
  ]
})
export class FrequenciaModule { }
