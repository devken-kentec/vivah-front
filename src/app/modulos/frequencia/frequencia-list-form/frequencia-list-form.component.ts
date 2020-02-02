import { Usuario } from './../../selects/usuario';
import { SelectsService } from './../../selects/selects.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder,
              private _selectService: SelectsService) { }

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
      dados => { this.id = dados.matricula, 
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
      console.log(this._freqForm.value);
      this.freqForm.reset();
      this._freqForm.reset();
      this.data = new Date();

      this.id = "";
      this.nome = "";
      this.semana = "";
      this.data_mes = "";
      this.hora = "";
    }

}

