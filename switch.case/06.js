/*6. Classificação de Triângulos
O programa recebe três lados de um triângulo e determina se ele é equilátero, isósceles ou escaleno.*/

const input = require("prompt-sync")();

const a = parseInt(input("Escolha o tamanho do primeiro lado: "));
const b = parseInt(input("Escolha o tamanho do segundo lado: "));
const c = parseInt(input("Escolha o tamanho do terceiro lado: "));
    
let tipo;
    
switch (true) {
    case (a === b && b === c):
        tipo = "Equilátero";
        break;
    case (a === b || a === c || b === c):
        tipo = "Isósceles";
        break;
    case (a !== b || a !== c || b !== c):
        tipo = "Escaleno";
        break;
    default:
        console.log("Insira informações válidas: ");
    }

console.log(tipo);