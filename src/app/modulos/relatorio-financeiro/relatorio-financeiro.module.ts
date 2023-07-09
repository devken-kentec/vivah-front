import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioFinanceiroRoutingModule } from './relatorio-financeiro-routing.module';
import { RelFinanFormListComponent } from './rel-finan-form-list/rel-finan-form-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RelFinanFormListComponent],
  imports: [
    CommonModule,
    RelatorioFinanceiroRoutingModule,
    ReactiveFormsModule
  ]
})
export class RelatorioFinanceiroModule { }
