import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Pessoa } from './pessoa/pessoa.model';

  const URL_API = 'http://localhost:8080/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(URL_API);
  }

  adicionarPessoas(): Observable<Pessoa>{
    return this.http.post<Pessoa>(URL_API, Pessoa);
  }

  //deletandoPessoa(): Observable<void>{
   // return this.http.delete<void>(URL_API + cpf);
  //}
}
