// const data = new Date(2019, 3, 20, 15);  // ano, mes, dia, hora, minuto, segundo, milesegundo
// console.log('Dia:',data.getDate());
// console.log('Mes:', data.getMonth() + 1);  // O mes começa do 0 ou seja, soma mais um pra da o mes certo
// console.log('Ano:', data.getFullYear());
// console.log('Hora:', data.getHours());
// console.log('Minuto:', data.getMinutes());
// console.log('Segundo:', data.getSeconds());
// console.log('Milissegundo:', data.getMilliseconds());
// console.log('Dia da semana:', data.getDay());  // 0 - Domimgo, 6 - Sabado
// // console.log(data.toString());
function zeroAEsquerda (num) {
    return num >= 10 ? num: `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() +1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

console.log(data.getFullYear())