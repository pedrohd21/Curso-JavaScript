const nome = 'Pedro';
const sobrenome = 'Henrique';
const idade = 23;
const peso = 60;
const altura = 1.76;
let imc;
let anoNascimento;
imc = peso / (altura * altura);
anoNascimento = 2020 - idade;
console.log(nome + ' ' + sobrenome + ' tem', idade + ' anos, pesa ' + peso + 'Kg');
console.log(`Tem ${altura} e seu IMC é de ${imc}`); // Melhor jeito
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);