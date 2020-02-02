import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensalidadeRoutingModule } from './mensalidade-routing.module';
import { MensalidadeFormComponent } from './mensalidade-form/mensalidade-form.component';
import { MensalidadeListComponent } from './mensalidade-list/mensalidade-list.component';

@NgModule({
  declarations: [MensalidadeFormComponent, MensalidadeListComponent],
  imports: [
    CommonModule,
    MensalidadeRoutingModule,
    ReactiveFormsModule
  ]
})
export class MensalidadeModule { }
