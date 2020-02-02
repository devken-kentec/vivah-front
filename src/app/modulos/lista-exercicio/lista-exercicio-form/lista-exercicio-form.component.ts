import { ListaExercicioService } from './../shared/lista-exercicio.service';
import { ExercicioService } from './../../exercicio/shared/exercicio.service';
import { SelectsService } from './../../selects/selects.service';
import { Exercicio } from './../../exercicio/shared/exercicio';
import { FichaTecnicaService } from './../../ficha-tecnica/shared/ficha-tecnica.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ListaExercicio } from '../shared/lista-exercicio';

@Component({
  selector: 'app-lista-exercicio-form',
  templateUrl: './lista-exercicio-form.component.html',
  styleUrls: ['./lista-exercicio-form.component.css']
})
export class ListaExercicioFormComponent implements OnInit {

  listExerForm: FormGroup;
  idFichaTecnica: string = "";
  dataAval: string = "";
  log: string = "";
  nomeAluno: string ="";
  exercicios: Exercicio[];
  codExer: string = "";
  nomeExer: string = "";
  nivelExer: string = "";
  tipoExer: string = "";
  funcaoExer: string = ""; 
  modExer: string ="";
  mostrarMens: boolean = false;
  _codExer: string = "";
  _nomeExer: string = "";
  _diaTreino: string = "";
  idGlobal: number;
  listasExercicio: ListaExercicio[];

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private fichaTecnicaService: FichaTecnicaService,
              private selectService: SelectsService,
              private exercicioService: ExercicioService,
              private listaExercicioService: ListaExercicioService) { }

  ngOnInit() {

    this.selectService.buscaExercicios().subscribe(
      dados => this.exercicios = dados
    );    

    const routeParams = this.route.snapshot.params;

    this.idGlobal = routeParams.id;

    this.listExer(routeParams.id);

   
    this.listExerForm = this.fb.group({
        id:['',[]],
        dia_treino:['',[]],
        id_ficha_tecnica:['',[]],
        data_avaliacao: ['',[]],
        login:['',[]],
        nome:['',[]],
        id_exercicio:['',[]],
        status_list:['',[]]
        
    });

    this.fichaTecnicaService.loadById(routeParams.id).subscribe((fichaTecnica: any)=>{
      console.log(fichaTecnica);
      this.updateListExerform(fichaTecnica);
    });

  }

  updateListExerform(fichaTecnica){
    this.listExerForm.patchValue(fichaTecnica);
  }

  buscaExercicio(){
    let tipoExer = this.listExerForm.get("id_exercicio").value;

    this.exercicioService.loadById(tipoExer).subscribe((exercicio: any)=>{
      console.log(exercicio),
      this.codExer = exercicio.id,
      this.nomeExer = exercicio.nome,
      this.nivelExer = exercicio.nivel,
      this.tipoExer = exercicio.tipo,
      this.funcaoExer = exercicio.funcao,
      this.modExer = exercicio.modalidade
    }
    ); 
  }

  onSumit(){
   
    this.listExerForm.get("data_avaliacao").disable();
    this.listExerForm.get("login").disable();
    this.listExerForm.get("nome").disable();
    let pas = this.listExerForm.get("id").value;
    this.listExerForm.get("id_ficha_tecnica").setValue(pas);
    this.listExerForm.get("id").disable();
    this.listExerForm.get("status_list").setValue("Ativo");

    console.log(this.listExerForm.value);

    this.listaExercicioService.create(this.listExerForm.value).subscribe(
      success=>{     
        console.log("Ficha Técnica incluida com sucesso"),
        this.mostrarMens = true
    });
  }

  close(){
    this.mostrarMens = false;
    let pag = this.listExerForm.get("id_ficha_tecnica").value;
    this.listExer(pag);
    this.listExerForm.get("id_exercicio").reset();
  }

  listExer(id){
    console.log(id);
    this.listaExercicioService.loadById(id).subscribe(
      dados => this.listasExercicio = dados
    );
  }

  onDelete(id){
    this.listaExercicioService.remove(id).subscribe(
      success=>{console.log("Item excluido com sucesso"),
      this.listExer(this.idGlobal) }
    );
  }
}
