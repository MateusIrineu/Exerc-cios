/*3. Comparar dois números e dizer qual é maior*/

const input = require("prompt-sync")();

const primeiroNumero = parseInt(input("Escolha o primeiro número: "));
const segundoNumero = parseInt(input("Escolha o segundo número: "));

if (primeiroNumero > segundoNumero) {
    console.log("O primeiro número é maior que o segundo.");
} else {
    console.log("O segundo número é maior que o primeiro.");
}