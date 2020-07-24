// BOM - window
// DOM - document
// aprendi com marcobrunodev

/*const root = document.querySelector('#root')
const title = document.createElement('h1')
title.textContent = 'Dificuldade'
root.appendChild(title)*/

const root = document.querySelector('#root')

function newElement(tag, content){
    const title = `<${tag}>${content}</${tag}>`
    
    root.insertAdjacentHTML('beforeend', title)

}

newElement('h1', 'Dificuldade');
