/*4. Tipo de Combustível
Peça ao usuário que escolha entre gasolina (1), etanol (2) ou diesel (3) e exiba o preço correspondente por litro.*/

const input = require("prompt-sync")();

const combustivel = parseInt(input("Escolha uma das opções para saber o preço: gasolina (1), etanol (2) ou diesel (3). -> "));

let preco

switch (combustivel) {
    case 1:
        preco = "O preço da gasolina é: 6 reias.";
        break;
    case 2:
        preco = "O preço do etanol é: 7 reais.";
        break;
    case 3:
        preco = "O preço do diesel é: 8 reais."; 
        break;

    default:
        console.log("Escolha inválida.");
        break;
}

console.log(preco);