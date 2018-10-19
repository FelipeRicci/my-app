import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoa: Pessoa;
  sexos: Array<string>;
  pessoas: Array<Pessoa>;

  constructor(private service: PessoaService) { }

  ngOnInit() {
  this.pessoa = new Pessoa();
  this.sexos = new Array('Masculino','Feminino','Outros');
  this.pessoas = new Array();
  this.service.getPessoas().subscribe(pessoas => this.pessoas = pessoas);
  }

  salvar(): void{
    this.service.adicionarPessoas().subscribe(pessoas => console.log('Salvou!'));
    if (this.pessoa.id){
      let indice = this.retornaMetodo(this.pessoa.id);
      this.pessoas[indice] = this.pessoa;
    }else {
      this.pessoa.id = Math.ceil(Math.random() * 99999);
      this.pessoas.push(this.pessoa);
    }

    this.pessoa = new Pessoa();
  
  }

  editar(p:Pessoa){ 
    this.pessoa = Object.create(p)
  };

  excluir(id:number): void{
    let indiceADeletar = this.retornaMetodo(id);
    this.pessoas.splice(indiceADeletar, 1);
  }

  retornaMetodo(id:number): number{
    let posicao = this.pessoas.findIndex(pessoas => pessoas.id === id);
    return posicao;
  }

}
