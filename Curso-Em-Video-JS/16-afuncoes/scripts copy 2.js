function fatorial(numero){
    fat = 1
    for(let cont = numero; cont > 1 ; cont --){
        fat *= cont
        console.log(`${cont}`)
    }
    return fat
}


console.log(fatorial(5))