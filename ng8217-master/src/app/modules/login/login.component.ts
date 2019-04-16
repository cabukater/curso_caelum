import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

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


  username = '';

  constructor(
    private rotaAtiva: ActivatedRoute,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.username = this.rotaAtiva.snapshot.params.username

  }

  handleLogin(formLogin: NgForm) {
    if(formLogin.invalid){
       formLogin.control.get('password').markAsTouched();
       return
    }

    if (formLogin.valid) {
      this.httpClient
        .post('http://localhost:3200/login', this.login)
        .subscribe(
          (response) => {
            console.log(response);
            console.log('funcionou');
          },
          (error) => {
            console.log(error);
            console.log('errado');
          }
        )
    }
  }

}
