import { ActivatedRoute, Router } from '@angular/router';
import { FichaTecnicaService } from './../shared/ficha-tecnica.service';
import { SelectsService } from './../../selects/selects.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha-tecnica-form',
  templateUrl: './ficha-tecnica-form.component.html',
  styleUrls: ['./ficha-tecnica-form.component.css']
})
export class FichaTecnicaFormComponent implements OnInit {

  mostrar: boolean = false;
  ficTecForm: FormGroup;
  id: string = '';
  id_fic_tec: string = '';
  nome: string = '';
  mostrarMens: boolean = false;
  mostBtnExer: boolean = false;

  constructor(private fb: FormBuilder,
              private _selectService: SelectsService,
              private fichaTecnicaService: FichaTecnicaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.params;
    console.log(routeParams.id)

  

    this.ficTecForm = this.fb.group({
      id: ['',[]],
      matricula: ['',[]],
      login: ['',[]],
      data_avaliacao: ['',[]],
      peso: ['',[]],
      hora_entrada: ['',[]],
      hora_saida: ['',[]],
      seg: ['',[]],
      ter: ['',[]],
      qua: ['',[]],
      qui: ['',[]],
      sex: ['',[]],
      sab: ['',[]],
      descricao: ['',[]],
      status_ft: ['',[]],
      id_aluno: ['',[]]
    });

    this.fichaTecnicaService.loadById(routeParams.id).subscribe((fichaTecnica: any)=>{
      console.log(fichaTecnica),
      this.id_fic_tec = fichaTecnica.id,
      this.nome = fichaTecnica.nome,
      this.updateFicTecForm(fichaTecnica),
      this.mostrar = true,
      this.mostBtnExer = true,
      this.ficTecForm.get("id_aluno").setValue(fichaTecnica.matricula)
     
    });
  }

  updateFicTecForm(fichaTecnica){
    this.ficTecForm.patchValue(fichaTecnica);
  }

  incluirUser(){

    this._selectService.buscaUsuario(this.ficTecForm.value).subscribe(
      data =>{ this.id = data.matricula,
               this.nome = data.nome,
               this.mostrar = true,
               this.ficTecForm.get("id_aluno").setValue(this.id)
              }
    );
  }

  onSubmit(){
    this.ficTecForm.get("matricula").disable();
    this.ficTecForm.get("login").disable();
    console.log(this.ficTecForm.value);

    if(this.ficTecForm.valid){
      this.fichaTecnicaService.save(this.ficTecForm.value).subscribe(
        success=>{console.log("Ficha Técnica incluida com sucesso"),
        this.mostrarMens = true;
      });
    }
    this.mostrar = false;
    this.ficTecForm.reset();
    this.ficTecForm.get("matricula").enable();
    this.ficTecForm.get("login").enable();
  }

  incluirExer(){
    let _id = this.ficTecForm.get("id").value;
    console.log(_id);
    this.router.navigate(["/listaexercicio/new", _id], {relativeTo: this.route});
    
  }
}
