import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { Routes, RouterModule } from '@angular/router';

const rotasDoModulo : Routes = [
  {path: '', component: CadastroComponent}

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
export class CadastroRoutingModule { }
