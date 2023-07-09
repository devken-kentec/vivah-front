import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Senha } from './senha';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SenhaService {

  private readonly api = `${environment.api}`;

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Senha[]>(`${this.api}/sen_list.php`).pipe(
      take(1)
    );
  }

  loadById(id){
    return this.http.get(`${this.api}/sen_sel.php?id=${id}`).pipe(
      take(1)
    );
  }

  private update(senha){
    return this.http.put(`${this.api}/sen_ed.php?id=${senha.id}`, JSON.stringify(senha)).pipe(
      take(1)
    );
  }

  save(senha){
    return this.update(senha).pipe(
      take(1)
    );
  }
}
