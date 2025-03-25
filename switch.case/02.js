/*2. Mês do Ano
Peça ao usuário um número de 1 a 12 e retorne o nome do mês correspondente. Exemplo: 1 = "Janeiro", 2 = "Fevereiro" etc.*/

const input = require("prompt-sync")();

const numero = parseInt(input("Escolha um número de 1 a 12 equivalente ao mês do ano: "));

let mes

switch (numero) {
    case 1:
        mes = "Janeiro."
        break;
    case 2:
        mes = "Fevereiro."
        break;
    case 3:
        mes = "Março."
        break;
    case 4:
        mes = "Abril."
        break;
    case 5:
        mes = "Maio."
        break;
    case 6:
        mes = "Junho."
        break;
    case 7:
        mes = "Julho."
        break;
    case 8:
        mes = "Agosto."
        break;
    case 9:
        mes = "Setembro."
        break;
    case 10:
        mes = "Outubro."
        break;
    case 11:
        mes = "Novembro."
        break;
    case 12:
        mes = "Dezembro."
        break;
    default: 
        console.log("Escolha inválida.")
        break;
}

console.log(`O número escolhido corresponde ao mês: ${mes}`);