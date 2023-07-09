import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelatorioExerciciosService {

  private readonly api = `${environment.api}`;

  constructor(private http: HttpClient) { }

  loadById(id: number){
    return this.http.get(`${this.api}/rel_exer_sel.php?id=${id}`).pipe(
      take(1));
  }

  listarTreinos(id: number, diaSemana: string){
    return this.http.get(`${this.api}/rel_exer_list.php?id=${id}&dia_treino="${diaSemana}"`).pipe(
      take(1)
    );
  }
}
