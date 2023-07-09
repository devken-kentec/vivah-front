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
  seg: string;
  ter: string;
  qua: string;
  qui: string;
  sex: string;
  sab: string;


  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private fichaTecnicaService: FichaTecnicaService,
              private selectService: SelectsService,
              private exercicioService: ExercicioService,
              private listaExercicioService: ListaExercicioService) { }

  ngOnInit() {

    this.selectService.buscaExercicios().subscribe((dados: any) =>
      this.exercicios = dados
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
        status_list:['',[]],
        seg: ['',[]],
        ter: ['',[]],
        qua: ['',[]],
        qui: ['',[]],
        sex: ['',[]],
        sab: ['',[]]
    });

    this.fichaTecnicaService.loadById(routeParams.id).subscribe((fichaTecnica: any)=>{
      this.updateListExerform(fichaTecnica);

      this.seg = this.listExerForm.get('seg').value;
      this.ter = this.listExerForm.get('ter').value;
      this.qua = this.listExerForm.get('qua').value;
      this.qui = this.listExerForm.get('qui').value;
      this.sex = this.listExerForm.get('sex').value;
      this.sab = this.listExerForm.get('sab').value;

    });

  }

  updateListExerform(fichaTecnica){
    this.listExerForm.patchValue(fichaTecnica);
  }

  buscaExercicio(){
    let tipoExer = this.listExerForm.get("id_exercicio").value;

    this.exercicioService.loadById(tipoExer).subscribe((exercicio: any)=>{
      this.codExer = exercicio.id,
      this.nomeExer = exercicio.nome,
      this.nivelExer = exercicio.nivel,
      this.tipoExer = exercicio.tipo,
      this.funcaoExer = exercicio.funcao,
      this.modExer = exercicio.modalidade
    });
  }

  onSumit(){

    this.listExerForm.get("data_avaliacao").disable();
    this.listExerForm.get("login").disable();
    this.listExerForm.get("nome").disable();
    let pas = this.listExerForm.get("id").value;
    this.listExerForm.get("id_ficha_tecnica").setValue(pas);
    this.listExerForm.get("id").disable();


    this.listaExercicioService.create(this.listExerForm.value).subscribe(
      success=>{
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
    this.listaExercicioService.loadById(id).subscribe((dados: any) =>
      this.listasExercicio = dados
    );
  }

  mudarCor(diaSemana: string){
    return diaSemana == "Sim"? 'blue': 'green';
  }

  onDelete(id){
    this.listaExercicioService.remove(id).subscribe(
      success=>{console.log("Item excluido com sucesso"),
      this.listExer(this.idGlobal) }
    );
  }
}
