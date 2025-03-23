//7. Verificar se um número está dentro de um 

const input = require("prompt-sync")();

const numero = parseFloat(input("Confia se o número está dentro do intervalo: "));

if (numero > 1 && numero < 10) {
    console.log("O número está dentro do intervalo.")
} else {
    console.log("O número não está dentro do intervalo.")
}