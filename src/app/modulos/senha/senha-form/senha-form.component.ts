import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SenhaService } from '../shared/senha.service';

@Component({
  selector: 'app-senha-form',
  templateUrl: './senha-form.component.html',
  styleUrls: ['./senha-form.component.css']
})
export class SenhaFormComponent implements OnInit {

  senForm: FormGroup;
  mostrarMens: boolean = false;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private _senhaService: SenhaService) { }

  ngOnInit() {

    const routeParans = this.route.snapshot.params;
    //console.log(routeParans.id);
    this._senhaService.loadById(routeParans.id).subscribe((senha: any)=>{
      console.log(senha),
      this.updateSenForm(senha)
    }

    );

    this.senForm = this.fb.group({
      id: ['', []],
      nome: ['', []],
      tipo_user: ['', []],
      status_mat: ['', []],
      login: ['', []],
      senha: ['', []]
    });
  }

  updateSenForm(senha){
    this.senForm.patchValue(senha);
  }

  onSumit(){
    if(this.senForm.valid){
      this._senhaService.save(this.senForm.value).subscribe(
        success => {this.mostrarMens = true}
      );
    }
  }

}
