import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichaTecnicaRoutingModule } from './ficha-tecnica-routing.module';
import { FichaTecnicaFormComponent } from './ficha-tecnica-form/ficha-tecnica-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FichaTecnicaListComponent } from './ficha-tecnica-list/ficha-tecnica-list.component';

@NgModule({
  declarations: [FichaTecnicaFormComponent, FichaTecnicaListComponent],
  imports: [
    CommonModule,
    FichaTecnicaRoutingModule,
    ReactiveFormsModule
  ]
})
export class FichaTecnicaModule { }
