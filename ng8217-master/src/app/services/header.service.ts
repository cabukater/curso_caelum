import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  valorDoFiltro = new EventEmitter<string>();

  constructor() { 
    this.atualizarTermoDeFiltro('')
  }

  atualizarTermoDeFiltro(termoDeFiltro){
    this.valorDoFiltro.emit(termoDeFiltro)

  }
}
