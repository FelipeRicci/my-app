import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno-exercicio.model';

@Component({
  selector: 'app-aluno-exercicio',
  templateUrl: './aluno-exercicio.component.html',
  styleUrls: ['./aluno-exercicio.component.css']
})
export class AlunoExercicioComponent implements OnInit {

  nome: string;
  sobrenome: string;
  sexo: Array<string>;
  alunos: Array<Aluno>;


  constructor() { }

  ngOnInit() {
  this.nome = '';
  this.sobrenome = '';
  //this.sexo = ['Masculino', 'Feminino', 'Outros'];  
  
  this.alunos = [
    new Aluno ('Felipe', 'Ricci'),
  ]
  
  }

  salvar(){
    this.alunos.push(new Aluno(this.nome, this.sobrenome));
  }

}
