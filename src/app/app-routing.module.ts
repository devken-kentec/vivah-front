import { AuthGuard } from './modulos/guards/auth-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
    {path: 'cadastro', loadChildren: './modulos/cadastro/cadastro.module#CadastroModule', canActivate:[AuthGuard]},
    {path: 'exercicio', loadChildren:'./modulos/exercicio/exercicio.module#ExercicioModule', canActivate:[AuthGuard]},
    {path: 'login', loadChildren:'./modulos/login/login.module#LoginModule'},
    {path: 'frequencia', loadChildren: './modulos/frequencia/frequencia.module#FrequenciaModule'},
    {path: 'fichatecnica', loadChildren: './modulos/ficha-tecnica/ficha-tecnica.module#FichaTecnicaModule'},
    {path: 'listaexercicio', loadChildren: './modulos/lista-exercicio/lista-exercicio.module#ListaExercicioModule'},
    {path: 'mensalidade', loadChildren: './modulos/mensalidade/mensalidade.module#MensalidadeModule'},
    {path: 'senha', loadChildren: './modulos/senha/senha.module#SenhaModule'},
    {path: 'relatorioexercicios', loadChildren: './modulos/relatorio-exercicios/relatorio-exercicios.module#RelatorioExerciciosModule'},
    {path: 'relatoriofinanceiro', loadChildren: './modulos/relatorio-financeiro/relatorio-financeiro.module#RelatorioFinanceiroModule'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
