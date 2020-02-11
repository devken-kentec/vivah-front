import { CadastroService } from './../shared/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../shared/cadastro';
import { Router, ActivatedRoute } from '@angular/router';
import { getLocaleDayPeriods } from '@angular/common';

@Component({
  selector: 'app-cadastro-list',
  templateUrl: './cadastro-list.component.html',
  styleUrls: ['./cadastro-list.component.css'],
  preserveWhitespaces: true
})
export class CadastroListComponent implements OnInit {

  cadastros: Cadastro[];
  mostrarMens: boolean = false;
  _nome: string = "";
  _id: string = "";
  

  constructor(private _cadastroService: CadastroService,
              private router: Router,
              private route: ActivatedRoute) { }


  ngOnInit() {
   this.list();
  }

  list(){
    this._cadastroService.list().subscribe(
      dados => this.cadastros = dados
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

    this._cadastroService.remove(this._id).subscribe(
      success=>{console.log("Item excluido!"), this.mostrarMens = true},
      error=>{console.log("Erro ao excluir!!")},
      ()=>console.log("Completo"));
  }

  close(){
    this.list();
  }

}
