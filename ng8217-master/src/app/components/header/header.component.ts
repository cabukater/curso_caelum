import { Component } from "@angular/core";
import { PageDataService } from 'src/app/services/page.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    './header-search.css'
  ]
})
export class HeaderComponent {
  tituloGlobal = 'Cmail'

  isMenuOpen = false;

  constructor(
    private PageService: PageDataService,
    private HeaderService : HeaderService
    ){
      this.PageService.titulo.subscribe(
        (novoTitulo) => { 
          this.tituloGlobal = novoTitulo

        }
      )

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
 

  handleBuscaChanges({target}){
    this.HeaderService.atualizarTermoDeFiltro(target.value)

  }


}