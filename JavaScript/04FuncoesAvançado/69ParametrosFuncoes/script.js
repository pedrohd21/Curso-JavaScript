//funcao args indeterminados
function funcao(...args){
    console.log(args)
}
funcao('valor', 1, 2, 3, 4, 5, 7)


//da pra usar lista
function funcao([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3)
}
funcao(['pedro', 'henrique', 25])

//
function conta(operador, acumulador, ...numero){
    // console.log(operador, acumulador, numero)
    for (let numero of numeros){
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }
    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50)