import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    avatar: new FormControl(''),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[1-9]{4}-?[0-9]{4}[0-9]?'), Validators.minLength(8), Validators.maxLength(10)]),
  })

  constructor() { }

  ngOnInit() {

  }

  validaTodosCampos(form: FormGroup){
    for (let controlName in form.value){
      form.get(controlName).markAsTouched()

    }
  }

    handleCadastrarUsuario(){
      if( this.formCadastro.invalid ) {
        this.validaTodosCampos(this.formCadastro);
      return
  }

  console.log(this.formCadastro.value)

}

}
