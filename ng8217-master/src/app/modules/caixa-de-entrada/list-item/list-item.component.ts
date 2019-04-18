import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Email } from 'src/app/models/email';


@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {


  @Input('email') emailData: Email;
  @Output('eventoVaiRemover') vaiRemover = new EventEmitter()



  constructor() { }

  ngOnInit() {

  }

  removeEmail(click: Event) {
    console.log('clicou em remover');
    if(confirm('tem Certeza')){
      this.vaiRemover.emit({ status: 'removing'})
    }
  }

}
