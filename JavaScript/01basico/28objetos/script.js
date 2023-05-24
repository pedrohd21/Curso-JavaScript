//const pessoal = {
//    nome: 'Pedro', sobrenome: 'Henrique', idade: 23
//};
//console.log(pessoal.sobrenome);
//console.log(pessoal);



// function criaPessoa(nome, sobrenome, idade) {
//    return {
//        nome: nome, sobrenome: sobrenome, idade: idade
//    };
// }
// const pessoal1 = criaPessoa('Pedro', 'henrique', 23);
// const pessoal2 = criaPessoa('Maria', 'Lucia', 53);
// const pessoal3 = criaPessoa('Joana', 'Paula', 68);
// const pessoal4 = criaPessoa('Ana', 'Pati', 5);
// const pessoal5 = criaPessoa('Julia', 'Abc', 13);
// const pessoal6 = criaPessoa('Tati', 'Nati', 25);
// console.log(pessoal1.nome, pessoal2.nome, pessoal3.nome, pessoal4.nome, pessoal5.nome)


const pessoal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala() {
        console.log('Óla Mundo');
    }
};

pessoal.fala();
console.log(pessoal)