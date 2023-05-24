//Chama uma função imediatamente
//IIFE -> Immediately invoked function expression

(function(idade, peso, altura){
    const sobrenome = 'Henrique'
    function criaNome(nome){
        return nome +' '+ sobrenome
    }

    function falaNome(){
        console.log(criaNome('Pedro'))
    }
    falaNome()
    console.log(idade, peso, altura)
})(15, 80, 1.80)

const nome = 'Pedro'