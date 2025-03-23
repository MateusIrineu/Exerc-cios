/*1. Verificar se um número é positivo, negativo ou zero*/

const input = require("prompt-sync")();

const verificarNumero = parseInt(input("Digite um número para saber se ele é positivo, negativo ou zero: "));

if (verificarNumero > 0) {
    console.log("Número posivito.")
} else if (verificarNumero === 0) {
    console.log("Número é zero.")
} else {
    console.log("Número negativo.")
}