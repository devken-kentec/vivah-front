import { Component } from '@angular/core';
import { AuthService } from './modulos/login/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Studio Vivah Pilates';


  mostrarMenu: boolean = false;
  user: string = "";
  tipo: string = ""; 
  

  visiCad: boolean = false;
  visiExe: boolean = false;
  visiFreq: boolean = false;
  visiFicTec: boolean = false;
  visiMens: boolean = false;
  visiLisExer: boolean = false;
  

  constructor(private _authService: AuthService, private router: Router){}

  
  ngOnInit(){

     this._authService.mostrarMenuEmitter.subscribe(
       mostrar => {this.mostrarMenu = mostrar     
      });

      this._authService.gUser.subscribe(
        dados => {this.user = dados}
          
      );

      this._authService.gTipo.subscribe(
        dados => {this.tipo = dados,
          console.log(dados)

          if(dados === "Administrador"){
              this.visiCad = true
              this.visiExe = true
              this.visiFreq = true
              this.visiFicTec = true
              this.visiMens = true
              this.visiLisExer = true
          } else if(dados === "Aluno"){
            this.visiFreq = true

          } else if(dados === "Estagiário"){
              
            this.visiFreq = true
            this.visiFicTec = true

          }else if(dados === "Professor"){
            this.visiFicTec = true
          }
        }
      );

     this.router.navigate(['/login']); 
  }

  exit(){
    document.location.reload(true);
  }

}
