import { delay, tap, take } from 'rxjs/operators';
import { Exercicio } from './exercicio';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExercicioService {

  private readonly api = `${environment.api}/exercicio/`;

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Exercicio[]>(`${this.api}exer_list.php`)
    .pipe(
        delay(1000),
        tap(console.log)
    );
  }

  loadById(id: number){
    return this.http.get(`${this.api}exer_sel.php?id=${id}`).pipe(
      tap(console.log),
      take(1));
  }

  private update(exercicio){
    return this.http.put(`${this.api}exer_ed.php?id=${exercicio.id}`, JSON.stringify(exercicio)).pipe(
      tap(console.log),
      take(1));
  }

  private create(exercicio){
    return this.http.post(`${this.api}exer_grav.php`, JSON.stringify(exercicio)).pipe(
      tap(console.log),
      take(1))
  }

  remove(id){
    return this.http.get(`${this.api}exer_sta.php?id=${id}`).pipe(
      tap(console.log),
      take(1));
  }

  save(exercicio){
    if(exercicio.id){
      return this.update(exercicio);
    }else{
      return this.create(exercicio);
    }
  }
}
