import { MensalidadeService } from './../shared/mensalidade.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SelectsService } from '../../selects/selects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mensalidade-form',
  templateUrl: './mensalidade-form.component.html',
  styleUrls: ['./mensalidade-form.component.css']
})
export class MensalidadeFormComponent implements OnInit {

  mensForm: FormGroup;
  parcForm: FormGroup;
  mostrar: boolean = false;
  mostrarMens: boolean = false;
  mostBtnParc: boolean = false;
  statusPag: string = "A receber";
  
  constructor(private fb: FormBuilder,
              private _selectService: SelectsService,
              private mensalidadeService: MensalidadeService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.params;
    console.log(routeParams.id);

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

    this.parcForm.get("status_parc").setValue(this.statusPag);

    this.mensalidadeService.loadById(routeParams.id).subscribe((mensalidade:any)=>{
      console.log(mensalidade),
      this.mostrar = true,
      this.updateFicFinForm(mensalidade),
      this.mostBtnParc = true,
      this.mensForm.get("id_aluno").setValue(mensalidade.matricula),
      this.parcForm.get("valor").setValue(mensalidade.valor_mensal),
      this.parcForm.get("id_ficha_financeira").setValue(mensalidade.id)
    }
    );
  }

  mudaStatuaPag(){
    this.statusPag ="Pago";
    this.parcForm.get("status_parc").setValue(this.statusPag);
  }

  valorTotal(){
   let valor: number = this.parcForm.get("valor").value;   
   let juros: number = this.parcForm.get("juros").value;
   let descontos: number = this.parcForm.get("descontos").value;

   let valorTotal = valor+juros-descontos;
  
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
    console.log(this.mensForm.value);
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
}
