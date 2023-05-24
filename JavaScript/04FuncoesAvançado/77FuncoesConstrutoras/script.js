// Funcoes contrutoras -> Objetos
// Funcao fabrica -> Objetos

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () =>{
        console.log(this.nome + ': sou um metodo')
    }
}

const p1 = new Pessoa('Pedro', 'Henrique')
const p2 = new Pessoa('Paulo', 'Fernandes')
console.log(p1.nome)


