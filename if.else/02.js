/*2. Verificar se um número é par ou ímpar*/

const input = require("prompt-sync")();

const numero = parseInt(input("Escolha um número para saber se é ímpar ou par: "));

if (numero % 2 === 0) {
    console.log("Número par.")
} else {
    console.log("Número ímpar.")
}