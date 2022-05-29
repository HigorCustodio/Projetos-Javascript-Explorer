/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let firstNumber = prompt("Digíte o primeiro número: ");
let secondNumber = prompt("Digíte o segundo número: ");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const soma = firstNumber + secondNumber;
const subtração = firstNumber - secondNumber;
const multiplicação = firstNumber * secondNumber;
const divisao = firstNumber / secondNumber;
const restodiv = firstNumber % secondNumber;

alert("O resultado da soma será: " + soma);
alert("O resultado do resto da subtração será: " + subtração);
alert("O resultado da Multiplicação será: " + multiplicação);
alert("O resultado da divisão será: " + divisao);
alert("O resultado do resto da divisão será: " + restodiv);



