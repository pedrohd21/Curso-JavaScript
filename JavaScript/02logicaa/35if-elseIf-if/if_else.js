/* 
if pode ser usado sozinho
Sempre que utilizo a palavra else, precisa de um if antes
eu posso ter varios else if na checagem
so posso ter um else na checagem 
*/

/*
const hora = 50;

if (hora >= 0 && hora <= 12) {
    console.log('Bom dia');
} else if (hora > 12 && hora <= 17) {
    console.log('Boa Tarde');
} else if (hora > 17 && hora <= 23) {
    console.log('Boa Noite');
} else {
    console.log('Hora errada');
}
*/

// const tenhoGrana = false; //retorna if= true, else=false
// if (tenhoGrana) {
//     console.log('Vou sair de casa');
// } else {
//     console.log('Não vou sair de casa')
// }


const nota1 = 6.4
const nota2 = 1.4
const nota3 = 8.3
const nota4 = 7.5

const soma = Number(nota1 + nota2 + nota3 + nota4) / 4
if(soma >= 7){
    console.log(`Aprovado Nota: ${soma.toFixed(2)}`)
} else if(soma >= 5){
    console.log(`Recuperação Nota: ${soma.toFixed(2)}`)
} else{
    console.log(`Reprovado Nota: ${soma.toFixed(2)}`)
}