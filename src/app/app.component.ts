import { Component } from '@angular/core';
import { AuthService } from './modulos/login/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Espaço Vivah';


  mostrarMenu: boolean = false;
  user: string = "";
  tipo: string = "";
  visiCad: boolean = false;
  visiExe: boolean = false;
  visiFreq: boolean = false;
  visiFicTec: boolean = false;
  visiMens: boolean = false;
  visiLisExer: boolean = false;
  visiSenha: boolean = false;
  visiCon: boolean = false;
  licenca: string = "6b656e746563-3032-656e65726779-65737061c3a76f207669766168-3031";

  constructor(private _authService: AuthService, private router: Router){}

  ngOnInit(){

     this._authService.mostrarMenuEmitter.subscribe(
       mostrar => {this.mostrarMenu = mostrar
      });

      this._authService.gUser.subscribe(
        dados => {this.user = dados}

      );

      this._authService.gTipo.subscribe(
        dados => {this.tipo = dados


          if(dados === "Administrador"){
              this.visiCad = true
              this.visiExe = true
              this.visiFreq = true
              this.visiFicTec = true
              this.visiMens = true
              this.visiLisExer = true
              this.visiSenha = true
              this.visiCon = true;

          } else if(dados === "Aluno"){
            this.visiFreq = true,
            this.visiCon = true

          } else if(dados === "Estagiário"){

            this.visiCon = true
            this.visiFreq = true
            this.visiFicTec = true

          }else if(dados === "Professor"){
            this.visiCon = true
            this.visiFreq = true
            this.visiFicTec = true
          }
        }
      );

     this.router.navigate(['/login']);
  }

  exit(){
    document.location.reload();
  }

}
