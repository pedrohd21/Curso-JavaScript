/*
&& -> false && true -> false "o valor mesmo"
|| ->

FALSY
false
0
'' "" ``
null / underfined
NaN
*/

/* And
console.log('Luiz' && NaN && 'Maria'); // Retorna o valor NaN ou algum dos outros que são falsos

function falaOi() {
    return 'Oi';
}

const vaiExecutar = undefined;

console.log(vaiExecutar && falaOi());
*/
/*
console.log(0 || false || null || 'Luiz Otavio' || true);
const corUsuario = null;
const corPadrão = corUsuario || 'preto';
console.log(corPadrão)
*/

const a = 0;
const b = null;
const c = 'false';
const d = false
const e = NaN;
console.log(a || b || c || d || e); // retorna o ultimo valor falso, ou depois da variavel verdadeira

console.log(a || b || 'Joãozinho' || d || e); // vai retorna a unica verdadeira que seria a string joãozinho

const x = 'antoni';
const y = 'Ola'
console.log(y && x)