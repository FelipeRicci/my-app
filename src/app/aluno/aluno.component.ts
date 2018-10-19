import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  
  nome: string;
  nomes: Array<string>;

  constructor() { 
  }

  ngOnInit() {
    this.nome = '';
    this.nomes = ['Felipe', 'Rafael', 'Gustavo'];
  }

  salvar(){
    this.nomes.push(this.nome);
  }
}
