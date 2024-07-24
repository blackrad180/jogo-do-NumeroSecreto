let listaDeNumeroSorteados = [];
let numeroLimite = 20;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um numero entre 1 e 20");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns');
        let paralavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns você Acertou o Numero Secreto com ${tentativas} ${paralavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O numero secreto é menor");
        } else {
            exibirTextoNaTela("p", "O numero secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}   

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumeroSorteados = [];
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}

    function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
    }
2
    function reiniciarJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled' , true);
        console.log(numeroSecreto);
    }


// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do Número Secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um numero entre 1 e 100";

// let titulo = document.querySelector("h1") Let armazenar. Titulo = nome documento (pega algo do texto index.html) querySelector (selecionar o documento)

