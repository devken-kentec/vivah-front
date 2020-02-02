import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, take } from 'rxjs/operators';
import { Usuario } from './usuario';
import { Exercicio } from './exercicio';

@Injectable({
  providedIn: 'root'
})
export class SelectsService {

  private readonly api = `${environment.api}/selects/`;

  constructor(private http: HttpClient) { }

  buscaUsuario(usuario){
    return this.http.get<Usuario[]>(`${this.api}select_cad_user.php?id="${usuario.matricula}"&login="${usuario.login}"`).pipe(
      tap(console.log),
      take(1)
      );
  }

  buscaExercicios(){
    return this.http.get<Exercicio[]>(`${this.api}select_exer.php`).pipe(
      tap(console.log)
    );
  }
}
