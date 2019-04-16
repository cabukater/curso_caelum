import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    './header-search.css'
  ]
})
export class HeaderComponent {

  constructor(
    private roteador: Router,

  ){}

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  logout(){
    console.log('logout');
    localStorage.clear();
    this.roteador.navigate(['login'])


  }
}