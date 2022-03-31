const colorClicked = [];
let ordemCor = [];
let record = 0;
let currentPoints = 0;


function criarTabuleiro () {
    const main = document.querySelector('#main');
    const getInput = document.querySelector('#inputName');

    main.innerHTML = `
    <h1>GENIUS GAME</h1>
    <p>Acerte as cores na sequência <strong>correta</strong> para marcar pontos. Caso erre você perde o jogo!</p>
    <div class="container">
        <div id = '1' class="greensquare square"></div>
        <div id = '2' class="yellowsquare square"></div>
        <div id = '3' class="redsquare square"></div>
        <div id = '4' class="bluesquare square"></div>
        <div id = 'interface' class="circle">Bem vindo ${getInput.value}!<br>Boa Sorte</div>
    </div>
    `
   setTimeout(inicioJogo, 3000);
    const getClickedgreen =  document.querySelector('.greensquare')
    getClickedgreen.addEventListener("click", getColorClicked )

    const getClickedyellow =  document.querySelector('.yellowsquare')
    getClickedyellow.addEventListener("click", getColorClicked )

    const getClickedred=  document.querySelector('.redsquare')
    getClickedred.addEventListener("click", getColorClicked )

    const getClickedblue =  document.querySelector('.bluesquare')
    getClickedblue.addEventListener("click", getColorClicked )
}

function criarModal () {
    const main = document.querySelector('#main');

    const input = document.createElement('input');
    const modalSection = document.createElement('section');
    const title = document.createElement('h1');
    const form = document.createElement('form');
    const label = document.createElement('label');

    const button = document.createElement('button');

    modalSection.id = "modalSection"
    form.id = "form";
    input.id = "inputName";
    button.id = "button";

    label.htmlFor = "inputName";
    label.innerText = "Insira seu nome";
    title.innerText = "GENIUS"
    button.innerText = "INICIAR"

    button.addEventListener('click', criarTabuleiro)

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);

    modalSection.appendChild(title);
    modalSection.appendChild(form);

    main.appendChild(modalSection);
}

criarModal();

function inicioJogo() {
    const interface = document.querySelector("#interface");
    interface.innerHTML = " ";
    interface.innerText = "PRESTE ATENÇÃO A ORDEM DAS CORES";

    setTimeout(ordemCores(), 1000);
}

function ordemCores() {
    ordemCor.push(Math.floor(Math.random()*(4-1)+1))
    setTimeout(brilhaCor, 2000);    
}

function brilhaCor() {
    const verde = document.getElementById('1');
    const amarelo = document.getElementById('2');
    const vermelho = document.getElementById('3')
    const azul = document.getElementById('4')
    
    for (let i =0; i < ordemCor.length; i++) {
        if(ordemCor[i] == verde.id) {
            verde.classList.add('activeGreen')
            console.log("verde")
            setTimeout(() => {
                verde.classList.remove('activeGreen')
            }, 2000);
        } else if (ordemCor[i] == amarelo.id) {
            amarelo.classList.add('activeYellow')
            console.log("amarelo")
            setTimeout(() => {
                verde.classList.remove('activeYellow')
            }, 2000);
        } else if (ordemCor[i] == vermelho.id) {
            vermelho.classList.add('activeRed')
            console.log("vermelho")
            setTimeout(() => {
                verde.classList.remove('activeRed')
            }, 2000);
        } else if (ordemCor[i] == azul.id) {
            azul.classList.add('activeBlue')
            console.log("azul")
            setTimeout(() => {
                verde.classList.remove('activeBlue')
            }, 2000);
        }
    }   
}

function getColorClicked(e){
    colorClicked.push(+e.target.id)
    console.log(colorClicked);
}

function endGame(){
    const main = document.querySelector('#main');
    const inputValue = document.querySelector("#inputName")
    main.innerHTML=' '

    const title = document.createElement('h1');
    const subtitulo = document.createElement('p');
    const container = document.createElement('div')
    const green = document.createElement('div')
    const yellow = document.createElement('div')
    const red = document.createElement('div')
    const blue = document.createElement('div')
    const info = document.createElement('div')
    const btnPlayAgain = document.createElement('button')

    container.classList.add('containerEndGame');
    green.classList.add('greensquare');
    green.classList.add('square');
    yellow.classList.add('yellowsquare');
    yellow.classList.add('square');
    red.classList.add('redsquare');
    red.classList.add('square');
    blue.classList.add('bluesquare');
    blue.classList.add('square');
    info.classList.add('circleEndGame');
    btnPlayAgain.classList.add('playAgain');

    title.innerText = "GENIUS"
    subtitulo.innerText = "Acerte as cores na sequência CORRETA para marcar pontos. Caso erre você perde o jogo!"
    btnPlayAgain.innerText = "Jogar Novamente"
    info.innerText = `Você perdeu Fulano!`

    green.id = '1';
    yellow.id = '2';
    red.id = '3';
    blue.id = '4';
    info.id = 'interface';
    
    container.appendChild(green);
    container.appendChild(yellow);
    container.appendChild(red);
    container.appendChild(blue);
    container.appendChild(info);
    container.appendChild(btnPlayAgain);

    main.appendChild(title);
    main.appendChild(subtitulo);
    main.appendChild(container);

}

// main.innerHTML = `
//     <h1>GENIUS GAME</h1>
//     <p>Acerte as cores na sequência <strong>correta</strong> para marcar pontos. Caso erre você perde o jogo!</p>
//     <div class="container">
//         <div id = '1' class="greensquare square"></div>
//         <div id = '2' class="yellowsquare square"></div>
//         <div id = '3' class="redsquare square"></div>
//         <div id = '4' class="bluesquare square"></div>
//         <div id = 'interface' class="circleEndGame">
//         Que pena, Fulano!<br>Você Perdeu!<br>Seu record foi: ${record} <br> Sua pontuação foi:${currentPoints}!
//         </div>
//         <button class ="playAgain">Jogar novamente</button>
//     </div>
//     `
//     playAgain.addEventListener('click', criarModal);

