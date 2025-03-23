/*3. Tabuada de um número
Peça ao usuário um número e use um loop do while para exibir a tabuada desse número de 1 a 10.*/

const prompt = require("prompt-sync")()

const numero = prompt("Insira o número desejado: ");

i = 0
resultado = 1
do {
    console.log(`Tabuada do ${numero}: ${numero} X ${i} = ${resultado}.`);
    i++
    resultado = numero * i
} while (i <= 10);