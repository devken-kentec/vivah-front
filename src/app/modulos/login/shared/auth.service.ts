import { Usuario } from './usuario';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //PHP
  private readonly api = `${environment.api}/login/`;

  private loggedInStatus: boolean = false;
 


  //@Output() mostrarMenu: EventEmitter<string> = new EventEmitter<string>();
  mostrarMenuEmitter = new EventEmitter<boolean>();
  gUser = new EventEmitter<string>();
  gTipo = new EventEmitter<string>();
  
  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
      this.loggedInStatus = value;
      this.mostrarMenuEmitter.emit(true);
  }

  pegarDados(user: string, tipo: string ){
    this.gUser.emit(user);
    this.gTipo.emit(tipo);
  }

  get isLoggedIn(){
    return this.loggedInStatus;
  }

  buscaUsuario(usuario){
    return this.http.get<Usuario[]>(`${this.api}login.php?login="${usuario.login}"&senha=${usuario.senha}`).pipe(
      tap(console.log),
      take(1)
      );
  }

 
}
