function endGame(){
    const main = document.querySelector('#main');
    main.innerHTML=' ';
    
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
    green.classList.add('greensquare', 'square');
    yellow.classList.add('yellowsquare', 'square');
    red.classList.add('redsquare', 'square');
    blue.classList.add('bluesquare', 'square');
    info.classList.add('circleEndGame');
    btnPlayAgain.classList.add('playAgain');

    btnPlayAgain.addEventListener('click', criarModal)

    title.innerText = "GENIUS"
    subtitulo.innerText = "Acerte as cores na sequência CORRETA para marcar pontos. Caso erre você perde o jogo!"
    btnPlayAgain.innerText = "Jogar Novamente"
    info.innerText = `Você perdeu ${playerName}\n Teu record foi : x!\n Tua pontuação foi : x!`

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

    // colorClicked = [];
    // ordemCor = [];

}