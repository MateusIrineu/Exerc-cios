/*9. Conversão de Moedas
Peça ao usuário para escolher entre converter reais para dólares (1), euros (2) ou libras (3). O programa deve exibir o valor convertido com uma taxa fictícia.*/

const input = require("prompt-sync")();

const opcao = parseInt(input("Escolha uma das opções para converter reais para dolar -> dólares (1), euros (2) ou libras (3): "));

let conversor;

switch (opcao) {
    case 1:
        conversor = opcao * 1.2;
        break;
    case 2:
        conversor = opcao * 1.3;
        break;
    case 3:
        conversor = opcao * 1.4;
        break;
    default:
        console.log("Opção inválida.");
        break;
}

console.log(`Resultado: ${conversor}.`);
