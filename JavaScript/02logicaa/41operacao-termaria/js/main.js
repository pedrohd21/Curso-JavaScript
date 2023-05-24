//  ?:

const pontuacaoUsu = 999;
const nivelUsuario = pontuacaoUsu >= 1000 ? 'Usu Vip' : 'Usu Normal';
console.log(nivelUsuario)



const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(corPadrao)
// if (pontuacaoUsu >= 1000) {
//     console.log('Usu Vip')
// } else{
//     console.log('Usu Normal')
// }
