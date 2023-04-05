const menorValor = 0
const maiorValor = 100
const numero = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numero)

const elementoMenorValor = document.getElementById('menor-valor');

const elementoMaiotValor = document.getElementById('maior-valor');
