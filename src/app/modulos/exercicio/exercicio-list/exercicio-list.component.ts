import { ExercicioService } from './../shared/exercicio.service';
import { Component, OnInit } from '@angular/core';
import { Exercicio } from '../shared/exercicio';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercicio-list',
  templateUrl: './exercicio-list.component.html',
  styleUrls: ['./exercicio-list.component.css'],
  preserveWhitespaces: true
})
export class ExercicioListComponent implements OnInit {

  exercicios: Exercicio[];
  mostrarMens: boolean = false;
  _nome: string = "";
  _id: string = "";


  constructor(private _exercicioService: ExercicioService,
            private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
   this.list();
  }

  list(){
    this._exercicioService.list().subscribe(
      dados => this.exercicios = dados
    );
  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  pegaDados(id, nome){  
    this._nome = nome;
    this._id = id;
 }

  onDelete(){

      this._exercicioService.remove(this._id).subscribe(
        success=>{console.log("Item excluido!"), this.mostrarMens = true},
        error=>{console.log("Erro ao excluir!!")},
        ()=>console.log("Completo"));
  }

  close(){
    this.list();
  }  
  
}
