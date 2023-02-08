// Fazendo as funções
const setFontType = (type) => {
    let paragraph = document.querySelector('.paragraph');
    paragraph.style.fontFamily = type;
}

const setFontColor = (color) => {
    let paragraph = document.querySelector('.paragraph');
    paragraph.style.color = color;
}

const setFontSize = (size) => {
    let paragraph = document.querySelector('.paragraph');
    paragraph.style.fontSize = size;
}

const setLineHeight = (height) => {
    let paragraph = document.querySelector('.paragraph');
    paragraph.style.lineHeight = height;
}

const setBackgroundColor = (color) => {
    let paragraph = document.querySelector('.paragraph');
    paragraph.style.backgroundColor = color;
}


// Cores para usar.
preto = 'black';
branco = 'white';
verde = 'green';
azul = 'blue';
amarelo = 'yellow';
vermelho = 'red';
