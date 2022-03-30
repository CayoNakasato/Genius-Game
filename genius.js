function criarTabuleiro () {
    const main = document.querySelector('#main');
    const getInput = document.querySelector('#inputName');
    main.innerHTML = `
    <div class="container">
    <div id = '1' class="greensquare"></div>
    <div id = '2' class="yellowsquare"></div>
    <div id = '3' class="redsquare"></div>
    <div id = '4' class="bluesquare"></div>
    <div id = 'interface' class="circle">Bem vindo ${getInput.value}!<br>Boa Sorte</div>
</div>
    `
   setTimeout(inicioJogo, 3000);
}

function criarModal () {
    const main = document.querySelector('#main');

    const modalSection = document.createElement('section');
    modalSection.id = "modalSection"
    
    const title = document.createElement('h1');
    title.innerText = "GENIUS"

    const form = document.createElement('form');
    form.id = "form";
    
    const label = document.createElement('label');
    label.htmlFor = "inputName";
    label.innerText = "Insira seu nome"

    const input = document.createElement('input');
    input.id = "inputName";

    const button = document.createElement('button');
    button.id = "button";
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

    setTimeout(ordemCores(), 11000);
}

let ordemCor = [];

function ordemCores() {
    ordemCor.push(Math.floor(Math.random()*(4-1)+1))
    setTimeout(brilhaCor(), 2000);    
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
            }, 3000);
        } else if (ordemCor[i] == amarelo.id) {
            amarelo.classList.add('activeYellow')
            console.log("amarelo")
            setTimeout(() => {
                verde.classList.remove('ActiveYellow')
            }, 3000);
        } else if (ordemCor[i] == vermelho.id) {
            vermelho.classList.add('activeRed')
            console.log("vermelho")
            setTimeout(() => {
                verde.classList.remove('ActiveRed')
            }, 3000);
        } else if (ordemCor[i] == azul.id) {
            azul.classList.add('activeBlue')
            console.log("azul")
            setTimeout(() => {
                verde.classList.remove('ActiveBlue')
            }, 3000);
        }
    }   
}