// decaracao de funcao (function hoisting)
function falaoi() {
    console.log('oi')
}

// First-class objects( objetos de primeira classe)
const souUmDado = () =>{
    console.log('sou um dados')
}

// arrow function

const funcaoArrow = () => {
    console.log('Sou um arrow function') 
}

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando')
    }
}
obj.falar()