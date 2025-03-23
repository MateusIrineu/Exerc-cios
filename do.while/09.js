/*9. Sequência de Fibonacci
Gere os primeiros 10 termos da sequência de Fibonacci usando um loop do while.*/

let a = 0, b = 1, i = 0;

console.log("Sequência de Fibonacci (10 primeiros termos):");

do {
    console.log(a); // Exibe o termo atual da sequência
    let temp = a + b; // Soma os dois últimos termos
    a = b;  // Atualiza 'a' para o próximo termo
    b = temp;  // Atualiza 'b' para o próximo termo
    i++;  // Incrementa o contador
} while (i < 10);

// executa "a" que é igual a 0. Em seguida, soma "a" + "b", que da 1, pois "b" = 1. Depois, "a" recebe "b", resultando em 1 de novo. 
// //Por fim, temp, que é a junção de "a" + "b" = 1 + 1, resulta em 2.