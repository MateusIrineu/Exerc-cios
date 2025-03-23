//10. Converter temperatura (Celsius para Fahrenheit)

const input = require("prompt-sync")();

const celsiusParaFahrenheit = input("Deseja coverter Celsius para Fahrenheit? ").toLowerCase();

if(celsiusParaFahrenheit == "sim") {
    console.log("Convertido!")
} else if (celsiusParaFahrenheit == "nao") {
    console.log("Não foi convertido.")
} else {
    console.log("Resposta inválida!")
}