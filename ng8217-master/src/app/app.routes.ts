import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { NgModule } from '@angular/core';

const listaDeRotas:Routes = [
    {path: '',  loadChildren: 'src/app/modules/login/login#LoginModule'},,
    {path: 'login',  loadChildren: 'src/app/modules/login/login#LoginModule'},
    {path: 'login/:username',  loadChildren: 'src/app/modules/login/login#LoginModule'},
    {path: 'cadastro',  loadChildren: 'src/app/modules/cadastro/cadastrocadastro#CadastroModule'},
    {path: 'inbox', loadChildren: 'src/app/modules/caixa-de-entrada/caixa-de-entrada#CaixaDeEntradaModule'},
    {path: '**', redirectTo: 'login'}
]




@NgModule({
    imports:[
        RouterModule.forRoot(listaDeRotas)    ],
    exports:[
        RouterModule
    ]
})
export class ModuloRoteamento{

}