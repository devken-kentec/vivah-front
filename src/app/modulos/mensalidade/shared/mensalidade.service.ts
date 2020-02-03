import { Mensalidade } from './mensalidade';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, take, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MensalidadeService {

  private readonly api = `${environment.api}/ficha_financeira/`;

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Mensalidade[]>(`${this.api}fic_fin_list.php`).pipe(
        delay(1000),
        tap(console.log)
    );
  }

  loadById(id: number){
    return this.http.get(`${this.api}fic_fin_sel.php?id=${id}`).pipe(
      tap(console.log),
      take(1));
  }

  private update(mensalidade){
    return this.http.put(`${this.api}fic_fin_ed.php?id=${mensalidade.id}`, JSON.stringify(mensalidade)).pipe(
      tap(console.log),
      take(1));
  }

  private create(mensalidade){
    return this.http.post(`${this.api}fic_fin_grav.php`, JSON.stringify(mensalidade)).pipe(
        tap(console.log),
        take(1));
  }

  save(mensalidade){
    if(mensalidade.id){
      return this.update(mensalidade)
    }else{
      return this.create(mensalidade)
    }
  }
}


