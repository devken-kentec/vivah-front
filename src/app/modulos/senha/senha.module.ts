import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SenhaRoutingModule } from './senha-routing.module';
import { SenhaFormComponent } from './senha-form/senha-form.component';
import { SenhaListComponent } from './senha-list/senha-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SenhaFormComponent, SenhaListComponent],
  imports: [
    CommonModule,
    SenhaRoutingModule,
    ReactiveFormsModule
  ]
})
export class SenhaModule { }
