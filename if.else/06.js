//6. Classificação de notas

const input = require("prompt-sync")();

const nota = parseInt(input("Insira a nota para saber se o usuário passou por média: "));

if (nota >= 7) {
    console.log("O usuário passou de ano.");
} 

else if (nota > 3 && nota < 7) {
    console.log("O usuário está em recuperação.");
}

else {
    console.log("O usuário está reprovado.")
}