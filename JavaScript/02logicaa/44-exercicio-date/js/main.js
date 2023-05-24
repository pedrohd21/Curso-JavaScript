// function zeroAEsquerda(num){
//     return num >= 10 ? num: `0${num}`;
// }

// function dataFormatada (data) {
//     const mesEscrito = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

//     const diaEscrito = [ 'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']

//     const dia = zeroAEsquerda(data.getDate());
//     const diaOficial = data.getDay();
//     const diaa = diaEscrito[diaOficial];
//     const mes = data.getMonth() +1;
//     const mesOficial = mesEscrito[mes];
//     const ano = zeroAEsquerda(data.getFullYear());
//     const hora = zeroAEsquerda(data.getHours());
//     const minuto = zeroAEsquerda(data.getMinutes());
//     const segundo = zeroAEsquerda(data.getSeconds());
//     return `${diaa}, ${dia} de ${mesOficial} de ${ano} ${hora}:${minuto}:${segundo}`
// }

// const data = new Date();
// const dataBrasil = dataFormatada(data);

// const container = document.querySelector('.container h1');

// container.innerHTML = ''
// container.innerHTML += dataBrasil

const container = document.querySelector('.container');
const datas = new Date();
container.innerHTML = datas.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});