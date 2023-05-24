let num = [5, 8, 4, 11, 16]
num.sort()  // coloca em ordem crescente, ou seja ordenado
num.push(9) // adiciona mais 
num.length // mostra o tamanho
console.log(num)
let pos = num.indexOf(4)
console.log(`O valor 4 esta na posição ${pos}`)

// for (let pos = 0; pos < num.length; pos++){
//     console.log(`${num[pos]}`)
// }

for(let pos in num){
    console.log(`${num[pos]}`)
}