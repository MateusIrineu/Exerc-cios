//8. Identificar vogal ou consoante

const input = require("prompt-sync")();

const vogal = input("Escreva uma letra para saber se é vogal ou consoante: ").toLowerCase();

if (vogal === "a" || vogal === "e" || vogal === "i" || vogal === "o" || vogal === "u") {
    console.log("A letra é uma vogal.");
} else {
    console.log("A letra é uma consoante.")
}