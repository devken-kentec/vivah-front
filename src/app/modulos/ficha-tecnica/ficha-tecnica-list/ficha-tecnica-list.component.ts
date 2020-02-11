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
  _nome: string = "";
  _id: string = "";

  constructor(private _fichaTecnicaService: FichaTecnicaService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.list();

    this.ficTecListForm = this.fb.group({
      login: ['',[]]
    });
  }

  list(){
    this._fichaTecnicaService.list().subscribe(
      dados => this.fichasTecnica = dados
    );
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

  pegaDados(id, nome){  
    this._nome = nome;
    this._id = id;
 }

  onDelete(){

      this._fichaTecnicaService.remove(this._id).subscribe(
        success=>{console.log("Item excluido!"), this.mostrarMens = true},
        error=>{console.log("Erro ao excluir!!")},
        ()=>console.log("Completo"));
  }

  close(){
    this.list();
  }
}
