function* geradora(){
    yield 'valor 1'
    yield 'valor 2'
    yield 'valor 3'
}

const g1 = geradora()
for (let valor of g1){
    console.log(valor)
}

function* geradora2(){
    let i = 0

    while(true){
        yield i
        i++
    }
}

const g2 = geradora2()

console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)


function* geradora3(){
    yield 0
    yield 1
    yield 2
}

function* geradora4(){
    yield* geradora3()
    yield 1
    yield 2
}

const g4 = geradora4()
for (let valor of g4){
    console.log(valor)
}