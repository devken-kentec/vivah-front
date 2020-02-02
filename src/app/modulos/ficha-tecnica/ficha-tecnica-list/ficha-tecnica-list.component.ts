import { FichaTecnica } from './../shared/ficha-tecnica';
import { Component, OnInit } from '@angular/core';
import { FichaTecnicaService } from '../shared/ficha-tecnica.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha-tecnica-list',
  templateUrl: './ficha-tecnica-list.component.html',
  styleUrls: ['./ficha-tecnica-list.component.css'],
  preserveWhitespaces: true
})
export class FichaTecnicaListComponent implements OnInit {

  fichasTecnica: FichaTecnica[];
  mostrarMens: boolean = false;
  ficTecListForm: FormGroup;
  nome: string = "";

  constructor(private _fichaTecnicaService: FichaTecnicaService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this._fichaTecnicaService.list().subscribe(
      dados => this.fichasTecnica = dados
    );

    this.ficTecListForm = this.fb.group({
      login: ['',[]]
    });
  }

  buscaAluno(){
   
    this._fichaTecnicaService.loadByPesquisa(this.ficTecListForm.get('login').value).subscribe(
      res => { console.log(res),
              this.fichasTecnica = res
              } 
      );
  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  onDelete(id){
    const confirma = confirm("Deseja excluir o registro de " + id + " ?");

    if(confirma){
      this._fichaTecnicaService.remove(id).subscribe(
        success=>{console.log("Item excluido!"), this.mostrarMens = true},
        error=>{console.log("Erro ao excluir!!")},
        ()=>console.log("Completo")
      );
    }
  }
}
