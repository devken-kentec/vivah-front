import { RelatorioExerciciosService } from './../shared/relatorio-exercicios.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-exercicios-list',
  templateUrl: './relatorio-exercicios-list.component.html',
  styleUrls: ['./relatorio-exercicios-list.component.css']
})
export class RelatorioExerciciosListComponent implements OnInit {

  listaExerForm: FormGroup;
  exers: [];

  constructor(private fb: FormBuilder,
              private relatorioExerciciosService: RelatorioExerciciosService) { }

  ngOnInit() {

    this.listaExerForm = this.fb.group({
      fichaTecnica: ['',[]],
      diaSemana: ['',[]]
    });
  }

  buscarExercicios(){
     let ficha = this.listaExerForm.get('fichaTecnica').value;
     let dia = this.listaExerForm.get('diaSemana').value;

    this.relatorioExerciciosService.listarTreinos(ficha, dia).subscribe((dados: any)=>{
        this.exers = dados
    });
  }

}
