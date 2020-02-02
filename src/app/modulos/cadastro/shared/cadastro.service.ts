import { environment } from './../../../../environments/environment';
import { Cadastro } from './cadastro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  //PHP
  private readonly api = `${environment.api}/cadastro/`;

  //NODEJS
  //private readonly api = `${environment.api}cadastro`;

  constructor(private http: HttpClient) { }

  //NODE.JS
 /* list(){
    return this.http.get<Cadastro[]>(`${this.api}`)
    .pipe(
      delay(1000),
      tap(console.log)
    );
  }

  loadById(id){
    return this.http.get(`${this.api}/${id}`).pipe(
      tap(console.log),
      take(1));
  }

 private create(cadastro){
    return this.http.post(this.api, cadastro).pipe(
      tap(console.log),
      take(1))
  }

    private update(cadastro){
      return this.http.put(`${this.api}/${cadastro.id}`, cadastro).pipe(
        tap(console.log),
        take(1));
  }

    remove(id){
    return this.http.delete(`${this.api}/${id}`).pipe(
      tap(console.log),
      take(1));
  }*/

  //PHP
    list(){
    return this.http.get<Cadastro[]>(`${this.api}cad_list.php`)
    .pipe(
      delay(1000),
      tap(console.log)
    );
  }

    loadById(id: number){
    return this.http.get(`${this.api}cad_sel.php?id=${id}`).pipe(
      tap(console.log),
      take(1));
  }

 private create(cadastro){
    return this.http.post(`${this.api}cad_grav.php`, JSON.stringify(cadastro)).pipe(
      tap(console.log),
      take(1));
  }

  private update(cadastro){
    return this.http.put(`${this.api}cad_ed.php?id=${cadastro.id}`, JSON.stringify(cadastro)).pipe(
      tap(console.log),
      take(1));
}

remove(id){
  //DETELE DE TODO O REGISTRO.
 /* return this.http.get(`${this.api}cad_del.php?id=${id}`).pipe(
    tap(console.log),
    take(1));*/

    return this.http.get(`${this.api}cad_sta.php?id=${id}`).pipe(
      tap(console.log),
      take(1)
    );
}

  save(cadastro){
    if(cadastro.id){
     return this.update(cadastro);
    }else{
      return this.create(cadastro);
    }
  }
}
