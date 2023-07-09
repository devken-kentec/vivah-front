import { FichaTecnica } from './ficha-tecnica';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, take, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FichaTecnicaService {

  private readonly api = `${environment.api}`;

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<FichaTecnica[]>(`${this.api}/fic_tec_list.php`).pipe(
      take(1)
    );
  }

  loadByPesquisa(login){
    return this.http.get<FichaTecnica[]>(`${this.api}/fic_tec_sel_nom.php?login="%${login}%"`).pipe(
      take(1)
    );
  }

  loadById(id: number){
    return this.http.get(`${this.api}/fic_tec_sel.php?id=${id}`).pipe(
      take(1));
  }

  private update(ficha_tecnica){
    return this.http.put(`${this.api}/fic_tec_ed.php?id=${ficha_tecnica.id}`, JSON.stringify(ficha_tecnica)).pipe(
      take(1));
  }

  private create(ficha_tecnica){
    return this.http.post(`${this.api}/fic_tec_grav.php`, JSON.stringify(ficha_tecnica)).pipe(
      take(1));
  }

  remove(id){
    return this.http.get(`${this.api}/fic_tec_sta.php?id=${id}`).pipe(
        take(1));
  }

  save(ficha_tecnica){
    if(ficha_tecnica.id){
      return this.update(ficha_tecnica);
    } else {
      return this.create(ficha_tecnica);
    }
  }
}
