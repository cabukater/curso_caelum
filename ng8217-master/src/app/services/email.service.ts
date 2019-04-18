import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Email } from '../models/email';

@Injectable()
export class EmailService {

  private readonly url = 'http://localhost:3200/emails';

  private cabecalho = new HttpHeaders({ 'Authorization': localStorage.getItem('cmail-token') })

  constructor(private http: HttpClient) { }

  enviar({ destinatario, assunto, conteudo }) {

    const emailDto = {
      to: destinatario,
      subject: assunto,
      content: conteudo,
    }

    return this.http
      .post(this.url, emailDto, { headers: this.cabecalho })
      .pipe<Email>(
        map((resposta: any) => {
          return {
            destinatario: resposta.to,
            assunto: resposta.subject,
            conteudo: resposta.content,
            dataEnvio: resposta.created_at,
            id: resposta.id
          }
        })
      )
  }
  

  listar() {
    return this.http.get(this.url, { headers: this.cabecalho })
      .pipe<Email[]>(
        map(
          (dados: any[]) =>
            dados
              .map(
                resposta => ({
                  //MAPEAR JÁ QUE OS DADOS DO BANCO VEM EM INGLES
                  destinatario: resposta.to,
                  assunto: resposta.subject,
                  conteudo: resposta.content,
                  dataEnvio: resposta.created_at,
                  id: resposta.id
                })
              )
        ))
  }

  deletar(id){
    return this.http.delete(`${this.url}/${id}`, {
      headers:this.cabecalho
    })
  }

}