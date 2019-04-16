import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CaixaDeEntradaComponent} from './caixa-de-entrada.component';



const rotasDoModulo : Routes = [
  {path: '', component: CaixaDeEntradaComponent}

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
export class CaixaDeEntradaRoutingModule { }
