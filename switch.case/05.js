/*5. Notas Escolares
O programa recebe uma letra (A, B, C, D, F) e exibe a avaliação correspondente. Exemplo:

A = "Excelente"

B = "Bom"

C = "Médio"

D = "Ruim"

F = "Reprovado"*/

const input = require("prompt-sync")();

const opcao = input("Escolha uma letra correspondente a avaliação do aluno: ").toUpperCase();

let avaliacao;

switch (opcao) {
    case "A":
        avaliacao = "Excelente";
        break;
    case "B":
        avaliacao = "Bom";
        break;
    case "C":
        avaliacao = "Médio"
        break;
    case "D":
        avaliacao = "Ruim"
        break;
    case "E":
        avaliacao = "Reprovado"
        break;
    default:
        console.log("Opção inválida.")
        break;
}

console.log(`O resultado do aluno: ${avaliacao}.`);
