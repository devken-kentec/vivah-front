import { MensalidadeService } from './../../mensalidade/shared/mensalidade.service';
import { RelatorioExerciciosService } from './../shared/relatorio-exercicios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relatorio-exercicios-form',
  templateUrl: './relatorio-exercicios-form.component.html',
  styleUrls: ['./relatorio-exercicios-form.component.css']
})
export class RelatorioExerciciosFormComponent implements OnInit {

  fichaTec: string = '';
  aluno: string = '';
  vencimento: number;
  data_avaliacao: string = '';
  statusAluno: string = '';
  exers: [];
  hoje: string = '';

  constructor(private route: ActivatedRoute,
              private relatorioExercicoService: RelatorioExerciciosService,
              private mansalidadeService: MensalidadeService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.params;
    this.hoje = routeParams.dia;
    this.buscarFicha(routeParams.id, routeParams.dia);
  }

  buscarFicha(id, dia){
    this.relatorioExercicoService.loadById(id).subscribe((relatorio: any)=>{
        this.fichaTec = relatorio.id,
        this.aluno = relatorio.nome,
        this.data_avaliacao = relatorio.data_avaliacao,
        this.statusAluno = relatorio.status_ft,
        this.buscaDiaVencimento(relatorio.alunoId),
        this.buscarLista(relatorio.id, dia)
    }
    );
  }

  buscarLista(idFicha, diaSemana){
    this.relatorioExercicoService.listarTreinos(idFicha, diaSemana).subscribe((dados:any) => this.exers = dados );
  }

  buscaDiaVencimento(id){
    this.mansalidadeService.loadByIdAluno(id).subscribe((dados: any)=>{
      this.vencimento = dados.dia_vencimento
    }
    );
  }

}
