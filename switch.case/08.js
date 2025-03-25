/*8. Tipo de Animal
O programa recebe um tipo de animal (1 = Mamífero, 2 = Réptil, 3 = Ave) e exibe exemplos dessa categoria.*/

const input = require("prompt-sync")();

const opcao = parseInt(input("Escolha alguma das opções -> 1 = Mamífero, 2 = Réptil, 3 = Ave: "));

let especie;

switch (opcao) {
    case 1:
        especie = "Humano";
        break;
    case 2:
        especie = "Lagarto";
        break;
    case 3:
        especie = "Passarim";
        break;
    default:
        console.log("Opção inválida.")
        break;
}

console.log(`Escolha: ${especie}.`);
