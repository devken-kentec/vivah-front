import { Router } from '@angular/router';
import { Usuario } from './../shared/usuario';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  loginForm: FormGroup;
  usuarios: Usuario[];
 

  constructor(private _authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

   this.loginForm = this.fb.group({

      login: ['', []],
      senha: ['', []]

    });
  }

  fazerLogin(){

      let loginTela = this.loginForm.get('login').value;
      let senhaTela = this.loginForm.get('senha').value;

    this._authService.buscaUsuario(this.loginForm.value).subscribe(data =>{
        if(data.login === loginTela && data.senha === senhaTela){
            this._authService.setLoggedIn(true);
            this.router.navigate(['/']); 
            this._authService.pegarDados(data.login, data.tipo_user);
            //alert('Usuario: ' + data.login + ' autenticado com sucesso!');
        } 
        
        
    });
  }

  
    
  }
