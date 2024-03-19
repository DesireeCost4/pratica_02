import { Component, numberAttribute } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { stringify } from 'node:querystring';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pratica_02';

  primeiraVar: string = 'olá mundo - dia 2';
  segundaVar: number = 25;
  terceiraVar:boolean = true;
  



  pFunction(n1:number, n2:number) {

      let resultado:number = n1+n2;
      
      console.log(resultado, 'function1');
  }

  sFunction(name:string) {

    let saudacao:string =`Olá ${name}, Bem vindo(a)!`;

    console.log(saudacao, 'function2')

  }

  tFunction(n1:number, n2:number){
    let result:string= ''

    if(n1 > n2){
      result = 'primeiro numero é maior'
      console.log(result)
    } else if(n1 < n2){
      result= 'primeiro numero é menor'
      console.log(result)
    } else  {
      result= 'numeros iguais'
      console.log(result)
    }
  }

  fVerificaralgo(dia:number){

    let mensagem:string;

    switch(dia){
      case 1:
        mensagem='vc digitou 1';
        break;
      case 2:
        mensagem='vc digitou 2';
        break; 
      case 3:
        mensagem='vc digitou 3';
        break; 
      default:
        mensagem= 'numero diferente de 0 e maior que 3'
    }

    console.log(mensagem)


  } 

  fWhile(){

    let contador:number=0;

    while( contador <= 5){
      console.log('o contador é:', contador);
      contador++;
    }
    console.log('while completo')

  }

  fLoop(){

    let verMais:number=0;

    while(verMais <= 3){
    console.log('o contador está percorrendo:', verMais)
    verMais++;
  }
  console.log('segundo while percorreu tudo')
}

  loopPar(){

    let numero:number=2;

    while(numero <= 10){
      console.log('numero par:', numero);
      numero+=2
    }
    console.log ('loop foi concluido')
  }
  
  fDoWhile(){

    let contador:number=0;

    do{
      console.log('ESSE é O "DO":', contador);
      contador++;
    } while(contador < 3 );
    console.log('ESSE É O WHILE')
  }

  minhaCondicional(user:string){

    if (user === 'desiree'){
      console.log('usuário liberado')
    } else {
      console.log('usuário incorreto')
    }


  }

}
