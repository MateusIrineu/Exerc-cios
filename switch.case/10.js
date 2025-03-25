/*10. Simulador de Loja
O usuário escolhe um item (1 = Camisa, 2 = Calça, 3 = Sapato) e o programa exibe o preço correspondente.*/

const input = require("prompt-sync")();

const opcao = parseInt(input("Escolha uma das opções "));

let roupa;

switch (opcao) {
    case 1:
        roupa = "Camisa";
        break;
    case 2:
        roupa = "Calça";
        break;
    case 3:
        roupa = "Sapato";
        break;
    default:
        console.log("Opção inválida.")
        break;
}

console.log(`Resultado: ${roupa}.`);
