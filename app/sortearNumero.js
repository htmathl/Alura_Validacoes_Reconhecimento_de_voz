const menorValor = 0
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor');

const elementoMaiotValor = document.getElementById('maior-valor');
