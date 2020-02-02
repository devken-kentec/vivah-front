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


  constructor(private _exercicioService: ExercicioService,
            private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
    this._exercicioService.list().subscribe(
      dados => this.exercicios = dados
    );
  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});
   
  }

  onDelete(id){
    const confirma = confirm("Deseja excluir o registro de " + id + " ?");

    if(confirma){
      this._exercicioService.remove(id).subscribe(
        success=>{console.log("Item excluido!"), this.mostrarMens = true},
        error=>{console.log("Erro ao excluir!!")},
        ()=>console.log("Completo")
      );
    }
  }
  
}
