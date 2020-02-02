import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroListComponent } from './cadastro-list/cadastro-list.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';

@NgModule({
  declarations: [CadastroListComponent, CadastroFormComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ReactiveFormsModule

  ]
})
export class CadastroModule { }
