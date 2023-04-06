const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript
    chute = chute.split('.')[0]
    chute = corrigeNumeros(chute)
    exibeChuteNaTela(chute)
    validarValorChute(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

const numeros = {
    'Zero zero': 0,
    'Zero': 0,
    '00': 0,
    '01': 1,
    'Um': 1,
    'Dois': 2,
    'Três': 3,
    'Quatro': 4,
    'Cinco': 5,
    'Seis': 6,
    'Sete': 7,
    'Oito': 8,
    'Nove': 9,
    'Dez': 10
 }
 
 const corrigeNumeros = (palavra) => {
    for(let numero in numeros){
       if(palavra === numero){
          palavra = numeros[numero];
       }         
    }
    return palavra;
 }

 recognition.addEventListener('end', () => recognition.start())
