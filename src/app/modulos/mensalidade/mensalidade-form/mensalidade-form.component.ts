import { MensalidadeService } from './../shared/mensalidade.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SelectsService } from '../../selects/selects.service';
import { ActivatedRoute } from '@angular/router';
import { Parcela } from '../shared/parcela';

@Component({
  selector: 'app-mensalidade-form',
  templateUrl: './mensalidade-form.component.html',
  styleUrls: ['./mensalidade-form.component.css'],
  preserveWhitespaces: true
})
export class MensalidadeFormComponent implements OnInit {

  mensForm: FormGroup;
  parcForm: FormGroup;
  mostrar: boolean = false;
  mostrarMens: boolean = false;
  mostBtnParc: boolean = false;
  statusPag: string;
  parcelas: Parcela[];
  valorFloat: number;
  pegarIdFf: string;
 
  
  constructor(private fb: FormBuilder,
              private _selectService: SelectsService,
              private mensalidadeService: MensalidadeService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.params;

    this.mensForm = this.fb.group({
      matricula: ['',[]],
      login: ['',[]],
      id: ['',[]],
      nome: ['',[]],
      cpf: ['',[]],
      data_geracao: ['',[]],
      dia_vencimento: ['',[]],
      valor_mensal: ['',[]],
      status_ff: ['',[]],
      id_aluno: ['',[]],
    });

    this.parcForm = this.fb.group({
      id: ['',[]],
      data_pagamento: ['',[]],
      valor: ['',[]],
      juros: ['',[]],
      descontos: ['',[]],
      valor_total: ['',[]],
      tipo_pagamento: ['',[]],
      status_parc: ['',[]],
      obs: ['',[]],
      id_ficha_financeira: ['',[]],
    });

    if(routeParams.id != null){
      this.mensalidadeService.loadById(routeParams.id).subscribe((mensalidade:any)=>{
        this.mostrar = true,
        this.updateFicFinForm(mensalidade),
        this.mostBtnParc = true,
        this.mensForm.get("id_aluno").setValue(mensalidade.matricula),
        this.pegarIdFf = mensalidade.id,
        this.listParc(mensalidade.id),
        this.valorFloat = parseFloat(mensalidade.valor_mensal)
      
      });
    }
    
  }

  addParcela(){
    this.parcForm.get("valor").setValue(this.valorFloat);
    this.parcForm.get("id_ficha_financeira").setValue(this.pegarIdFf);
    this.statusPag ="A receber";
    this.parcForm.get("status_parc").setValue(this.statusPag);
  }

  mudaStatuaPag(){
    this.statusPag ="Pago";
    this.parcForm.get("status_parc").setValue(this.statusPag);
  }

  estornarPag(){
    this.statusPag ="A receber";
    this.parcForm.get("status_parc").setValue(this.statusPag);
  }

  valorTotal(){
   let valor: number = this.parcForm.get("valor").value;   
   let juros: number = this.parcForm.get("juros").value;
   let descontos:number = this.parcForm.get("descontos").value;

   let valorTotal: number = valor+juros-descontos;
  
    this.parcForm.get("valor_total").setValue(valorTotal);
  }

  updateFicFinForm(mensalidade){
    this.mensForm.patchValue(mensalidade);
  }

  incluirUser(){
    this._selectService.buscaUsuario(this.mensForm.value).subscribe(
      (dados: any) =>{
        this.mostrar = true;
        this.buscaUser(dados);
        this.mensForm.get("id_aluno").setValue(dados.matricula)
      }
    );
  }

  buscaUser(dados){
    this.mensForm.patchValue(dados);
  }

  onSubmit(){
    this.mensForm.get("matricula").disable();
    this.mensForm.get("login").disable();
    this.mensForm.get("nome").disable();
    this.mensForm.get("cpf").disable();
    if(this.mensForm.valid){
        this.mensalidadeService.save(this.mensForm.value).subscribe(
          success=>{console.log("Ficha financeira incluida com sucessso"),
          this.mostrarMens = true
        });
    }
    this.mostrar = false;
    this.mensForm.reset();
    this.mensForm.get("matricula").enable();
    this.mensForm.get("login").enable();
  }

  onSubmitParc(){
    this.parcForm.get("valor_total").disable();
    
    if(this.parcForm.valid){
        this.mensalidadeService.saveParc(this.parcForm.value).subscribe(
          succes=>{console.log("Ficha financeira incluida com sucessso"),
          this.mostrarMens=true }
        );
    } 
    this.parcForm.reset();
    this.parcForm.get("id_ficha_financeira").setValue(this.pegarIdFf);
  }

  close(){
   
    let id = this.parcForm.get("id_ficha_financeira").value;
    this.listParc(id);
    this.parcForm.reset();
 }

  listParc(id){
     this.mensalidadeService.loadByParcId(id).subscribe(
       dados=> this.parcelas = dados
     ); 
  }

  onEdit(parcela: any){
    this.parcForm.get("id").setValue(parcela.id);
    this.parcForm.get("data_pagamento").setValue(parcela.data_pagamento);
    this.parcForm.get("valor").setValue(parseFloat(parcela.valor));
    this.parcForm.get("juros").setValue(parseFloat(parcela.juros));
    this.parcForm.get("descontos").setValue(parseFloat(parcela.descontos));
    this.parcForm.get("tipo_pagamento").setValue(parcela.tipo_pagamento);
    this.parcForm.get("obs").setValue(parcela.obs);
    this.parcForm.get("status_parc").setValue(parcela.status_parc);
    this.statusPag = this.parcForm.get("status_parc").value;
    this.parcForm.get("id_ficha_financeira").setValue(this.pegarIdFf)
    this.valorTotal();
  }

 onDelete(){
   
 }
}
