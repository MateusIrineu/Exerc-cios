/*4. Verificar se um ano é bissexto*/

const input = require("prompt-sync")();

const ano = parseInt(input("Verificar se o ano é bissexto a partir da quantidade de dias: "));

if (ano === 366) {
    console.log("O ano é bissexto");
}

else if (ano > 366 || ano < 365) {
    console.log("Insira um valor de ano válido.")
}

else {
    console.log("O ano não é bissexto");
}