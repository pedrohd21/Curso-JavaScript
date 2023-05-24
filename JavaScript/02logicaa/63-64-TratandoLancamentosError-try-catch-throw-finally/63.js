// try{
//     console.log(naoexisto)
// } catch (err){
//     console.log('Nao exito nao existe')
//     console.log(err)
// }

// não é bom mostrar o erro pro usuario
function soma(x, y){
    if(
        typeof x !== 'number' ||
        typeof y !== 'number'
        ) {
        throw new Error('x e y precisam ser numero.')
    }
    return x + y
}

try{
    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch(error){
    console.log('orEROORR EEOOOROOROROOROROo')
}
