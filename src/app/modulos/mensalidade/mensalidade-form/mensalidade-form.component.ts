import { MensalidadeService } from './../shared/mensalidade.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SelectsService } from '../../selects/selects.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-mensalidade-form',
  templateUrl: './mensalidade-form.component.html',
  styleUrls: ['./mensalidade-form.component.css']
})
export class MensalidadeFormComponent implements OnInit {

  mensForm: FormGroup;
  mostrar: boolean = false;
  mostrarMens: boolean = false;
  
  constructor(private fb: FormBuilder,
              private _selectService: SelectsService,
              private mensalidadeService: MensalidadeService) { }

  ngOnInit() {

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
