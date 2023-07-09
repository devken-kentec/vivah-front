import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaExercicioService {

  private readonly api = `${environment.api}`;

  constructor(private http: HttpClient) { }


  create(lista_exercicio){
    return this.http.post(`${this.api}/lista_exer_grav.php`, JSON.stringify(lista_exercicio)).pipe(
      take(1));
  }

  loadById(id: number){
      return this.http.get(`${this.api}/lista_exer_sel.php?id=${id}`).pipe(
        take(1));
  }

  remove(id){
    return this.http.get(`${this.api}/lista_exer_del.php?id=${id}`).pipe(
      take(1));
  }
 
}
