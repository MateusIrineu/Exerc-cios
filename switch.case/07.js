/*7. Estações do Ano
Receba um número de 1 a 4 representando as estações do ano:

1 = "Verão"

2 = "Outono"

3 = "Inverno"

4 = "Primavera"*/

const input = require("prompt-sync")();

const opcao = parseInt(input("Escolha a estação do ano de 1 a 4: "));

let estacao;

switch (opcao) {
    case 1:
        estacao = "Verão";
        break;
    case 2:
        estacao = "Outono";
        break;
    case 3:
        estacao = "Inverno";
        break;
    case 4:
        estacao = "Primavera";
        break;

    default:
        console.log("Opção invalida.")
        break;
}

console.log(`Estação escolhida: ${estacao}.`);
