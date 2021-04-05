/*
var nomeDoJogo = "League of Legend"
document.write("Jogo da Rafa: " + nomeDoJogo)
*/

var primeiroValor = parseInt(prompt("Digite o primeiro valor: "))
var segundoValor = parseInt(prompt("Digite o segundo valor: "))



var operacao = prompt("1 divisao, 2 multiplicacao, 3 soma, 4 subtracao: ")

if (operacao == 1) {
    var resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 2) {
    var resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 3) {
    var resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 4){
    var resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else {
    document.write("<h2>" + 'Opçao Inválida!' + "</h2>")
}

