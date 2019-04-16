import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CadastroRoutingModule } from './cadastro-routing.module'


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    CadastroRoutingModule
    
  ]
})
export class CadastroModule { }
