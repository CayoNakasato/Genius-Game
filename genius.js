let colorClicked = [];
let ordemCor = [];


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

    setTimeout(corAleatoria(), 1000);
}


function corAleatoria() {
    ordemCor.push(Math.floor(Math.random()*(4-1)+1));
    // console.log(ordemCor)
    brilhaCor();
}

function brilhaCor() {
    const verde = document.getElementById('1');
    const amarelo = document.getElementById('2');
    const vermelho = document.getElementById('3')
    const azul = document.getElementById('4')
    
    for (let i =0; i < ordemCor.length; i++) {
        if(ordemCor[i] == verde.id) {
            console.log("verde")

            // setTimeout(()=>{
                verde.classList.add('activeGreen')
            // }, 1000)

            setTimeout(() => {
                verde.classList.remove('activeGreen')
            }, 2000);

        } else if (ordemCor[i] == amarelo.id) {
            console.log("amarelo")
            
            // setTimeout(()=>{
                amarelo.classList.add('activeYellow')
            // }, 1000)

            setTimeout(() => {
                verde.classList.remove('activeYellow')
            }, 2000);

        } else if (ordemCor[i] == vermelho.id) {
            console.log("vermelho")

            // setTimeout(()=>{
            vermelho.classList.add('activeRed')
            // }, 1000)

            setTimeout(() => {
                verde.classList.remove('activeRed')
            }, 2000);

        } else if (ordemCor[i] == azul.id) {
            console.log("azul")

            // setTimeout(()=>{
            azul.classList.add('activeBlue')
            // },1000)

            setTimeout(() => {
                verde.classList.remove('activeBlue')
            }, 2000);
        }
    }   
}

function getColorClicked(e){
   colorClicked.push(+e.target.id)
   verifyClick()
}

function verifyClick() {
    
    console.log(colorClicked)

    for(let i=0; i < ordemCor.length; i++){
        if(ordemCor[i] === colorClicked[i]){
           
            console.log("acertou, mizeravi")
           
        } else {
            console.log("errou mula")
        }
    }
    inicioJogo();
}


