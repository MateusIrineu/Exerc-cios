/*5. Verificar senha
Peça ao usuário para inserir uma senha e continue pedindo até que ele digite a senha correta.*/

const prompt = require("prompt-sync")();

senha = "12345abcde!"

do{
    var tentativa = prompt("Insira sua senha: ");
    if (tentativa !== senha) {
        console.log("Tente novamente.");
    }

} while (tentativa !== senha);

console.log("A senha está correta!");