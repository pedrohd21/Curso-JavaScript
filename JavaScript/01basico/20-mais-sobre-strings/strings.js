//            01234567
let string = 'Um texto'
let string1 = 'O rato roeu a roupa do rei de roma.'

console.log(string.charAt(5)); // mostra a string na posição desejada
console.log(string.concat(' em um lindo dia.'));
console.log(string + ' ' + 'em um lindo dia.');
console.log(`${string} em um lindo dia.`); // melhor jeito
console.log(string.indexOf('texto')); // mostra onde começa a palavra texto
console.log(string.indexOf('o', 3)); // mostra onde começa a palavra depois do index 3
console.log(string.lastIndexOf('o', 3));// começa de tras para frente
console.log(string.match(/[a-z]/));
console.log(string1.replace(/r/g, '#')); // tem que usar o //g para substituir a palavra
console.log(string1.length); // mostra o tamanho da string
console.log(string1.replace(/ /g, '').length);
console.log(string1.slice(2, 6)); // fatia a string, e da pra fazer com numero negativo
console.log(string1.slice(-5, -1));
console.log(string1.split(' ', 3)); // separa a string, e o 3 e o tanto de vez que é para separar
console.log(string1.toUpperCase()); //Deixa as letras tudo em maiusculo
console.log(string1.toLowerCase()); //Deixa as letras tudo em minusculas
