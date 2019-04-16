import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import {LoginService} from './../../services/login.service'


@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  };
mensagemErro = '';

  username = '';

  constructor(
    private rotaAtiva: ActivatedRoute,

    private roteador: Router,
    private loginService : LoginService
    ) { }

  ngOnInit() {
    this.username = this.rotaAtiva.snapshot.params.username

  }

  handleLogin(formLogin: NgForm) {
    if(formLogin.invalid){
       formLogin.control.get('password').markAsTouched();
       return
    }

    if (formLogin.valid) {
       this.loginService.autenticar(this.login)
        .subscribe(
          ( ) => {
            this.roteador.navigate(['inbox'])

          },
          (responseError:HttpErrorResponse) => {
              this.mensagemErro = responseError.error

          }
        )
    }
  }


}
