/*1. Dias da Semana
Crie um programa que recebe um número de 1 a 7 e exibe o nome do dia correspondente. Por exemplo, 1 = "Domingo", 2 = "Segunda-feira" etc.*/

const input = require("prompt-sync")();

const escolha = parseInt(input("Escolha um número de 1 a 7 para saber o dia da semana: "))

let dia;

switch (escolha) {
    case 1:
        dia = "Domingo.";
        break;
    case 2:
        dia = "Segunda-feira.";
        break;
    case 3:
        dia = "Terça-feira.";
        break;
    case 4:
        dia = "Quarta-feira.";
        break;
    case 5:
        dia = "Quinta-feira.";
        break;
    case 6:
        dia = "Sexta-feira.";
        break;
    case 7:
        dia = "Sábado.";
        break;
    default:
        dia = "Escolha um número válido de 1 a 7."
        break;
}

console.log(`Dia da semana escolhido: ${dia}`);