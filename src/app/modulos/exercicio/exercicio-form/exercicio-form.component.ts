import { ActivatedRoute } from '@angular/router';
import { ExercicioService } from './../shared/exercicio.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-form',
  templateUrl: './exercicio-form.component.html',
  styleUrls: ['./exercicio-form.component.css']
})
export class ExercicioFormComponent implements OnInit {

  exerForm: FormGroup;
  mostrarMens: boolean = false;

  constructor(private fb: FormBuilder, 
              private _exercicioService: ExercicioService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.params;
    console.log(routeParams.id)

    this._exercicioService.loadById(routeParams.id).subscribe((exercicio: any)=> {
      console.log(exercicio),
      this.updateExerForm(exercicio)
    });

    this.exerForm = this.fb.group({
        id: ['',[]],
        nome: ['',[]],
        nivel: ['',[]],
        tipo: ['',[]],
        funcao: ['',[]],
        descricao: ['',[]],
        modalidade: ['',[]],
        status: ['',[]]
    });
  }

  updateExerForm(exercicio){
    this.exerForm.patchValue(exercicio);
  }

  onSumit(){
    console.log(this.exerForm.value);

    if(this.exerForm.valid){
      this._exercicioService.save(this.exerForm.value).subscribe(
        success => {console.log("Exercicio incluido com sucesso!"),
        this.mostrarMens = true;
      });
    }
    this.exerForm.reset();
  }

}
