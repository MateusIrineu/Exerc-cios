/*10. Contagem regressiva
Peça ao usuário um número e faça uma contagem regressiva até 0 usando do while.*/

const input = require("prompt-sync")();

const contagemRegressiva = parseInt(input("Forneça um número: "));
console.log(`Contagem regressiva de ${contagemRegressiva}.`)

i = contagemRegressiva

do {
    console.log(i)
    i--
} while (i >= 0);