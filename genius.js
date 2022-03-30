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
    inicioJogo();
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
    
}