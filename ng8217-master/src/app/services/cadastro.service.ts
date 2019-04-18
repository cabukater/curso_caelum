
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User } from '../models/dto/input/user';

@Injectable()
export class CadastroService {
   private url = 'http://localhost:3200/users';

  constructor(private http: HttpClient) { }

  cadastrar(dadosForm) {
    let user = new User(dadosForm)
    return this.http.post(this.url, dadosForm)
  
}

}
