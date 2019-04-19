import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PageDataService {

  titulo = new EventEmitter<string>();

  constructor() { }

  defineTitulo(tituloPagina: string ){
    document.querySelector('title').textContent = tituloPagina;
    this.titulo.emit(tituloPagina)
  }
  
}
