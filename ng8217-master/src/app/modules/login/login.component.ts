import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagemErro = '';
  username = '';
  login = {
    email: '',
    password: ''
  }

  constructor(private rotaAtiva: ActivatedRoute
              ,private servico: LoginService
              ,private roteador: Router) { }

  ngOnInit() {
    this.username = this.rotaAtiva.snapshot.params.username;
  }

  handleLogin(form: NgForm){

    if(form.invalid){
      form.control.get('password').markAsTouched();
      return
    }

    this.servico
      .autenticar(this.login)
      .subscribe(
        () => {
          this.roteador.navigate(['/inbox'])
        }
        , (responseError: HttpErrorResponse) => {
          this.mensagemErro = responseError.error
          console.log(responseError);
        }
      )
    
  }

}
