import { MensalidadeService } from './../shared/mensalidade.service';
import { Mensalidade } from './../shared/mensalidade';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mensalidade-list',
  templateUrl: './mensalidade-list.component.html',
  styleUrls: ['./mensalidade-list.component.css'],
  preserveWhitespaces: true
})
export class MensalidadeListComponent implements OnInit {

  mensalidades: Mensalidade[];
  mostrarMens: boolean = false;

  constructor(private mensalidadeService: MensalidadeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.mensalidadeService.list().subscribe(
      dados=>this.mensalidades = dados
    );
  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  formatarCpf(cpf){
   let str:string = cpf; 
   let p1 = str.substring(0,3);
   let p2 = str.substring(3, 6);
   let p3 = str.substring(6, 9);
   let p4 = str.substring(9, 11);
     cpf = p1 + "." + p2 + "." + p3 + "-" + p4;
   return cpf
  }

}
