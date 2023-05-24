
// const container = document.querySelector('.container');
// const datas = new Date();
// container.innerHTML = datas.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
const container = document.querySelector('.container');

function retorna(tags, frase){
    return `<${tags}> ${frase} </${tags}>`
}

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]



for (let i = 0; i < elementos.length; i++) {
    container.innerHTML += retorna(elementos[i]['tag'], elementos[i]['texto'])
}


