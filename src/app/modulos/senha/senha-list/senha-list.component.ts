import { Component, OnInit } from '@angular/core';
import { Senha } from '../shared/senha';
import { SenhaService } from '../shared/senha.service';
import { getLocaleDayPeriods } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-senha-list',
  templateUrl: './senha-list.component.html',
  styleUrls: ['./senha-list.component.css'],
  preserveWhitespaces: true
})
export class SenhaListComponent implements OnInit {

  senhas: Senha[];
  _nome: string;
  mostrarMens: boolean = false;

  constructor(private _senhaService: SenhaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.list();
  }

  list(){
    this._senhaService.list().subscribe(
      dados => this.senhas = dados
    );
  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  close(){

  }

  onDelete(){
    
  }

}
