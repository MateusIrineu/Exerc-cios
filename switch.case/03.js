/*3. Calculadora Simples
Crie um programa que recebe dois números e uma operação (+, -, *, /). Use switch para calcular e exibir o resultado.*/

const input = require("prompt-sync")();

const primeiroNumero = parseInt(input("Escolha o primeiro número: "));
const segundoNumero = parseInt(input("Escolha o segundo número: "));
const operacao = parseInt(input("Escolha uma operação de 1 a 4: "));

let resultado

switch (operacao) {
    case 1:
        resultado = primeiroNumero + segundoNumero;
        break;
    case 2:
        resultado = primeiroNumero - segundoNumero;
        break;
    case 3:
        resultado = primeiroNumero * segundoNumero;
        break;
    case 4:
        resultado = primeiroNumero / segundoNumero;
        break;
    default:
        console.log("Escolha inválida")
        break;
}

console.log(`O resultado é: ${resultado}`);
