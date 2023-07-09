import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FrequenciaService {

  private readonly api = `${environment.api}`;

  constructor(private http: HttpClient) { }

  create(frequencia){
    return this.http.post(`${this.api}/freq_grav.php`, JSON.stringify(frequencia)).pipe(
      take(1)
    );
  }

  buscarUser(usuario){
    return this.http.get(`${this.api}/freq_list.php?id="${usuario.matricula}"&login="${usuario.login}"`).pipe(
      take(1)
      );
  }
}
