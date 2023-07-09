import { RelFinanFormListComponent } from './rel-finan-form-list/rel-finan-form-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: RelFinanFormListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioFinanceiroRoutingModule { }
