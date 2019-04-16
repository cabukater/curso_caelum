import { NgModule } from '@angular/core';
import {LoginComponent} from './login.component';
import { Routes, RouterModule } from '@angular/router';


const rotasDoModulo : Routes = [
  {path: '', component: LoginComponent}

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rotasDoModulo)
  ],
  exports:[
    RouterModule
  ]
})
export class LoginRoutingModule { }
