/*6. Soma de números positivos
Permita que o usuário digite números e some-os. O programa deve parar quando ele inserir um número negativo.*/

// um prompt para o usuário inserir valores
// 2 input para o usuário inserir os valores
// uma constante soma inicializada em 0 para amarzenar valores


const input = require("prompt-sync")();

soma = 0;


do {
    var primeiroNumero = parseInt(input("Insira o primeiro número: "));
    var segundoNumero = parseInt(input("Insira o segundo número: "));
    if (primeiroNumero < 0 || segundoNumero < 0) {
        console.log("PROGRAMA FINALIZADO POIS NÃO SUPORTA NÚMERO NEGATIVO.");
        break;
    }

    soma = primeiroNumero + segundoNumero;
    console.log(`A soma entre ${primeiroNumero} e ${segundoNumero}, é: ${soma}.`)
} while (true);
