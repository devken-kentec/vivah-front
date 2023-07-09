import { FrequenciaService } from './../shared/frequencia.service';
import { Usuario } from './../../selects/usuario';
import { SelectsService } from './../../selects/selects.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frequencia-list-form',
  templateUrl: './frequencia-list-form.component.html',
  styleUrls: ['./frequencia-list-form.component.css']
})
export class FrequenciaListFormComponent implements OnInit {

  freqForm: FormGroup;
  _freqForm: FormGroup;
  usuarios: Usuario;
  id: string;
  nome: string;
  data = new Date();
  dias = new Array('Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado');
  semana: string;
  hora: string;
  data_mes: string;
  mostrarMens = false;

  constructor(private fb: FormBuilder,
              private _selectService: SelectsService,
              private frequenciaService: FrequenciaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.freqForm = this.fb.group({
      matricula: ['',[]],
      login: ['',[]]
    });

    this._freqForm = this.fb.group({
      id_aluno: ['',[]],
      dia_semana: ['',[]],
      data_mes: ['',[]],
      hora_dia: ['',[]],
      status: ['',[]]
    });
  }

  buscaUser(){
    this._selectService.buscaUsuario(this.freqForm.value).subscribe(
      (dados:any) => { this.id = dados.matricula, 
                this.nome = dados.nome,
                this.semana = this.dias[this.data.getDay()],
                this.data_mes = this.data.getDate() + '/' + (this.data.getMonth()+1) + '/' + this.data.getFullYear(),
                this.hora = this.data.getHours() + ':' + this.data.getMinutes() + ':' + this.data.getSeconds(),

                this._freqForm.get("dia_semana").setValue(this.semana);
                this._freqForm.get("data_mes").setValue(this.data_mes);
                this._freqForm.get("hora_dia").setValue(this.hora);
                this._freqForm.get("status").setValue("Ativo");
                this._freqForm.get("id_aluno").setValue(this.id);
              }
    );
  }

    onSubmit(){

      let id = this._freqForm.get("id_aluno").value;
      let diaSemana = this._freqForm.get("dia_semana").value;

      if(this._freqForm.valid){
      this.frequenciaService.create(this._freqForm.value).subscribe(     
        success=>{console.log("Ficha Técnica incluida com sucesso"),
        this.mostrarMens = true;
    });
    }

    
      this.freqForm.reset();
      this._freqForm.reset();
      this.data = new Date();

      this.id = "";
      this.nome = "";
      this.semana = "";
      this.data_mes = "";
      this.hora = "";

      this.router.navigate(['relatorioexercicios/buscar', id, diaSemana]);
    }

}

