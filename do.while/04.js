/*4. Adivinhe o número
Crie um jogo onde o usuário deve adivinhar um número aleatório entre 1 e 10. Continue pedindo palpites até ele acertar.*/

const prompt = require("prompt-sync")();

console.log("ADVINHE O NÚMERO!!!");

numero = 6

do {
    var palpite = parseInt(prompt("Escolha do usuário: "));
    if(palpite !== numero) {
        console.log("TENTE NOVAMENTE!!!");
    }
} while (palpite !== numero);

console.log("VOCÊ ACERTOU!!!");