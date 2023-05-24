const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let numero of numeros){
//     if (numero === 2 || numero === 5) {
//         console.log('Pulei o número 2');
//         continue;
//     }
//     if (numero === 7) {
//         console.log('Achei o 7');
//         break;
//     }
//     console.log(numero);
// }
let i = 0; 
while (true){
    // if (numero === 2 || numero === 5) {
    //     console.log('Pulei o número 2');
    //     continue;
    // }
    i++;
    if (i === 7) {
        console.log('Achei o 7');
        break;
    }
    console.log(i);
}
