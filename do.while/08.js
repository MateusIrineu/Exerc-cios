/*8. Fatorial de um número
Peça ao usuário um número e use um loop do while para calcular seu fatorial.*/

const input = require("prompt-sync")();

// fatorial de um número pedido pelo usuário. input dentro do "do";
// while com condição até o número disponibilizado pelo 

let fatorial = parseInt(input("Forneça um fatorial: "));

i = 1;
resultado = 1

 do {
     resultado *= i
     i++
 } while (i <= fatorial);

 console.log(`O fatorial de ${fatorial} é: ${resultado}. `)
