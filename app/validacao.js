function validarValorChute(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) console.log("valor invalido");

    if(validarMaiorMenor(numero)) console.log(`Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`);
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function validarMaiorMenor(numero) {
    return numero > maiorValor || numero < menorValor
}
