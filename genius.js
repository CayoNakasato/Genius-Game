const colorClicked = [];
const colorSelected = [] 

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

//  function alo(){
//      const container = document.createElement('div');
//     const greensquare = document.createElement('div');
//     const yellowsquare = document.createElement('div');
//     const redsquare = document.createElement('div');
//     const bluesquare = document.createElement('div');
//     const circle = document.createElement('div');

//     container.classList.add('container');
//     greensquare.classList.add('greensquare square');
//     yellowsquare.classList.add('yellowsquare square');
//     redsquare.classList.add('redsquare square');
//     bluesquare.classList.add('bluesquare square');
//     circle.classList.add('cirlce');

//     greensquare.id = "1";
//     yellowsquare.id = "2";
//     redsquare.id = "3";
//     bluesquare.id = "4";
//     circle.id = "interface";

//     circle.innerText = `Bem vindo ${getInput.value}!<br>Boa Sorte`;

//     container.appendChild(greensquare);
//     container.appendChild(yellowsquare);
//     container.appendChild(redsquare);
//     container.appendChild(bluesquare);
//     container.appendChild(circle);

//     main.appendChild(container)
//}

function criarModal () {
    const main = document.querySelector('#main');

    const modalSection = document.createElement('section');
    const title = document.createElement('h1');
    const form = document.createElement('form');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.id = "inputName";

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

let ordemCor = [];

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
                verde.classList.remove('ActiveGreen')
            }, 2000);
        } else if (ordemCor[i] == amarelo.id) {
            amarelo.classList.add('activeYellow')
            console.log("amarelo")
            setTimeout(() => {
                verde.classList.remove('ActiveYellow')
            }, 2000);
        } else if (ordemCor[i] == vermelho.id) {
            vermelho.classList.add('activeRed')
            console.log("vermelho")
            setTimeout(() => {
                verde.classList.remove('ActiveRed')
            }, 2000);
        } else if (ordemCor[i] == azul.id) {
            azul.classList.add('activeBlue')
            console.log("azul")
            setTimeout(() => {
                verde.classList.remove('ActiveBlue')
            }, 2000);
        }
    }   
}
function getColorClicked(e){
    colorClicked.push(+e.target.id)
    console.log(colorClicked);
}



