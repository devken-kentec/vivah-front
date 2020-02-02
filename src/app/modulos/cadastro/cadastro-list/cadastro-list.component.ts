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
  

  constructor(private _cadastroService: CadastroService,
              private router: Router,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this._cadastroService.list().subscribe(
      dados => this.cadastros = dados
    );
  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  onDelete(id){
    const confirma = confirm("Deseja excluir o registro de " + id + " ?");

    if(confirma){
     // window.location.reload();
      this._cadastroService.remove(id).subscribe(
        success=>{console.log("Item excluido!"), this.mostrarMens = true},
        error=>{console.log("Erro ao excluir!!")},
        ()=>console.log("Completo")
      );
    }
  }

}
