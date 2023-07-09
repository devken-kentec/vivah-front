import { RelatorioFinanceiroService } from './../shared/relatorio-financeiro.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RelatorioFinanceiro } from '../shared/relatorio-financeiro';

@Component({
  selector: 'app-rel-finan-form-list',
  templateUrl: './rel-finan-form-list.component.html',
  styleUrls: ['./rel-finan-form-list.component.css'],
  preserveWhitespaces: true
})
export class RelFinanFormListComponent implements OnInit {

  relFinanFormList: FormGroup;
  relatoriosFinanceiro: RelatorioFinanceiro [];
  teste: boolean;

  constructor(private fb: FormBuilder,
              private relatorioFinanceiroService: RelatorioFinanceiroService) { }

  ngOnInit() {

    this.relFinanFormList = this.fb.group({
      matricula: ['',[]],
      login: ['',[]],
      dataInicial: ['',[]],
      dataFinal: ['', []],
      statusPag: ['', []]
    });
  }

  buscarData(){
    let i = this.relFinanFormList.get("dataInicial").value;
    let f = this.relFinanFormList.get("dataFinal").value;
    
    this.relatorioFinanceiroService.loadByFinanData(i, f).subscribe(
      dados => {this.relatoriosFinanceiro = dados}
    );
  }

  buscarAluno(){
    let m = this.relFinanFormList.get("matricula").value;
    let l = this.relFinanFormList.get("login").value;

    this.relatorioFinanceiroService.loadByUsuario(m, l).subscribe(
      dados => {this.relatoriosFinanceiro = dados}
    );

  }

  buscarStatusPag(){
    let i = this.relFinanFormList.get("dataInicial").value;
    let f = this.relFinanFormList.get("dataFinal").value;
    let s = this.relFinanFormList.get("statusPag").value;

    this.relatorioFinanceiroService.loadByFinanStatusPag(i, f, s).subscribe(
      dados => {this.relatoriosFinanceiro = dados}
    );
  }

  mudarCor(statusParcela: string){
    return statusParcela == "Pago"? 'blue': 'red';
  }

  formatarCpf(cpf){
    let str:string = cpf; 
    let p1 = str.substring(0,3);
    let p2 = str.substring(3, 6);
    let p3 = str.substring(6, 9);
    let p4 = str.substring(9, 11);
      cpf = p1 + "." + p2 + "." + p3 + "-" + p4;
    return cpf
   }

}
