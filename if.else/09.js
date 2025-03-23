//9. Verificar senha

const input = require("prompt-sync")();

const senha = input("Digite sua senha: ");

if (senha === "123abc!") {
    console.log("Senha correta.");
} else {
    console.log("Senha incorreta.")
}