import { Pipe, PipeTransform } from '@angular/core';
import{Email} from "../../models/email"

@Pipe({
  name: 'filtroPorAssunto'
})
export class FiltroPorAssunto implements PipeTransform {

  transform(emailList: Email[], termoDeFiltro: string) {
    return emailList
    .filter(
      email => 
      email.assunto.toLowerCase()
      .includes(termoDeFiltro.toLowerCase())
    )
  }

}
