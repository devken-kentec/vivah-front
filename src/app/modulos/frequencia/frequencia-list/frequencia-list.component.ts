import { FrequenciaService } from './../shared/frequencia.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequencia-list',
  templateUrl: './frequencia-list.component.html',
  styleUrls: ['./frequencia-list.component.css']
})
export class FrequenciaListComponent implements OnInit {

  freqListForm: FormGroup
  frequencias: [];

  constructor(private fb: FormBuilder,
              private frequenciaService: FrequenciaService) { }

  ngOnInit() {

    this.freqListForm = this.fb.group({
      matricula: ['',[]],
      login: ['',[]]
    });
  }


  buscarUser(){
    this.frequenciaService.buscarUser(this.freqListForm.value).subscribe((dados:any)=>{
      this.frequencias = dados
    });
  }

}
