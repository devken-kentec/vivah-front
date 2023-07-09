
import { RelatorioFinanceiro } from './relatorio-financeiro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RelatorioFinanceiroService {

  private readonly api = `${environment.api}`;

  constructor(private http: HttpClient) { }

  loadByFinanData(dataInicial, dataFinal){
      return this.http.get<RelatorioFinanceiro[]>(`${this.api}/rel_finan_sel_data.php?dataInicial="${dataInicial}"&dataFinal="${dataFinal}"`).pipe(
        take(1)
      );
  }

  loadByUsuario(matricula, login){
    return this.http.get<RelatorioFinanceiro[]>(`${this.api}/rel_finan_sel_user.php?id="${matricula}"&login="${login}"`).pipe(
      take(1)
      );
  }

  loadByFinanStatusPag(dataInicial, dataFinal, statusPag){
    return this.http.get<RelatorioFinanceiro[]>(`${this.api}/rel_finan_sel_status_pag.php?dataInicial="${dataInicial}"&dataFinal="${dataFinal}"&statusPag="${statusPag}"`).pipe(
      take(1)
    );
    }

}
