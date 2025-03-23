/*5. Verificar se um usuário pode votar*/

const input = require("prompt-sync")();

const usuario = parseInt(input("Insira a idade para saber se o usuário pode votar: "));

if (usuario >= 16) {
    console.log("O usuário pode votar.");
} else {
    console.log("O usuário não pode votar.")
}