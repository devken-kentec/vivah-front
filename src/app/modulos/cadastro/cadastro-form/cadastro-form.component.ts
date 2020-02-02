
import { AuthService } from './../../login/shared/auth.service';
import { ActivatedRoute } from '@angular/router';
import { CadastroService } from './../shared/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { Cadastro } from '../shared/cadastro';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {

  cadForm: FormGroup;
  mostrarMens: boolean = false;


  constructor(private fb: FormBuilder, 
              private _cadastroService: CadastroService,
              private route: ActivatedRoute,
              private _authService: AuthService
              ) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.params;
    console.log(routeParams.id)

    this._cadastroService.loadById(routeParams.id).subscribe((cadastro: any)=> {
      console.log(cadastro),
  
      this.updateCadForm(cadastro)
    });

    
    //Primeiro metodo para buscar o registro por ID***.
   /* this.route.params.subscribe((params: any) => {
        const id = params['id'];
        console.log(id);
        const cadastro$ = this._cadastroService.loadById(id);
        cadastro$.subscribe(cadastro =>
          this.updateCadForm(cadastro)
        );
      }
    );    */

    //Segundo metodo para buscar registro por ID***.
      /*this.route.params.pipe(
        map((params: any)=>params['id']), 
        switchMap(id=> this._cadastroService.loadById(id))).subscribe(
         cadastro => this.updateCadForm(cadastro) });*/

     

    this.cadForm = this.fb.group({
      id: ['', []],
      nome: ['', []],
      cpf: ['', []],
      data_nasc: ['', []],
      fone: ['', []],
      fone_cel: ['', []],
      fone_cel2: ['', []],
      sexo: ['', []],
      endereco: ['', []],
      email: ['', []],
      tipo_user: ['', []],
      status_mat: ['', []],
      login: ['', []],
      senha: ['', []]
    });
  }

  //this.cadForm.patchValue(cadastro);
 //Função para popular o formulário
   updateCadForm(cadastro){
      this.cadForm.patchValue({
        cpf:cadastro.cpf,
        id: cadastro.id,
        nome: cadastro.nome,
        data_nasc: cadastro.data_nasc,
        fone: cadastro.fone,
        fone_cel: cadastro.fone_cel,
        fone_cel2: cadastro.fone_cel2,
        sexo: cadastro.sexo,
        endereco: cadastro.endereco,
        email: cadastro.email,
        tipo_user: cadastro.tipo_user,
        status_mat: cadastro.status_mat,
        login: cadastro.login,
        senha: cadastro.senha
      });
    };

    onSumit(){

    
      if(this.cadForm.valid){
        this._cadastroService.save(this.cadForm.value).subscribe(
          success => {console.log("Aluno salva com sucesso!"),
          this.mostrarMens = true;
        } );
      }
      this.cadForm.reset();
    }
    
    limparcpf(cpf){
      
      let p1 = cpf.replace(".", "");
      let p2 = p1.replace("-", "");

      cpf = p2;

      return cpf;
      
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
