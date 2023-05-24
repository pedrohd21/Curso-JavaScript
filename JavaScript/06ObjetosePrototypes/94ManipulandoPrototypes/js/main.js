// Ele explica e explica entendo nada kkkkkkkk
// // new Object -> Object.prototype
// const objA = {
//     chaveA: 'A'
//     // __proto__: Object.prototype
// }

// const objB = {
//     chaveB: 'B'
//     //__proto__: objA
// }

// const objC = new Object()
// objC.chaveC = 'C'

// Object.setPrototypeOf(objB, objA)
// Object.setPrototypeOf(objC, objB)
// console.log(objB.chaveA)

// ###################################
function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(porcentual){
    this.preco -= (this.preco * (porcentual / 100))
}
Produto.prototype.aumento = function(porcentual){
    this.preco += (this.preco * (porcentual / 100))
}

const p1 = new Produto('Camiseta', 50)
// p1.desconto(100)
// p1.aumento(100)
console.log(p1)

