/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/
let student = prompt("Insira o nome do aluno(a): ");
 
let note1 = prompt("Insira a nota da primeira prova: ")
let note2 = prompt("Insira a nota da segunda  prova ")
let note3 = prompt("Insira a nota da terceira prova: ")

/* Para realizar o calculo de média é preciso lembrar que os dados obtidos
 pelo prompt são strings, logo, precisamos muda-los para dados de tipo number 
 para realizar operações matemáticas */

let average =( Number(note1) + Number(note2) + Number(note3) )/ 3;

/* Definindo número de casas decimais usanto o ".tofixed"*/
average = average.toFixed(1);

/* Definindo a sentença lógica do dado boleano*/

let result = average > 6;

/* Definindo os caminhos da aplicação através de if, else e else/if*/

if (result){
    alert("Parabéns "+ student +"! sua média final foi de: " + average);
} 
    else if (average <= 3){ 
        alert(student + ", Você foi reprovado! Sua média final foi de: " + average ) ;
    }
else {
    alert( student + ", Estude para a prova de recuperação sua média final foi de: " + average);
}
