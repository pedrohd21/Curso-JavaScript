const par = document.querySelector('#par')
par.addEventListener('submit', function(e){
    e.preventDefault();
    const n1 = e.target.querySelector('#numero')

    const numeroF = Number(n1.value)

    par_impar(numeroF)
})

function multiplicar(){
    const n1 = document.querySelector('#numero1')
    const n2 = document.querySelector('#numero2')

    const numerof1 = Number(n1.value)
    const numerof2 = Number(n2.value)

    mult(numerof1, numerof2)
}

function descontos(){
    const des = document.querySelector('#desconto')
    const desF = Number(des.value)
    if (!desF){ 
        result.innerHTML = `Digite um valor.`
    }else{
        result.innerHTML = `Valor do desconto de 5% é R$ ${(desF * 5 / 100)}`
    }
}

function ano_nascimento(){
    const ano = document.querySelector('#ano')
    const anoF = Number(ano.value)

    const data = new Date();
    const anoAtual = data.getFullYear()

    res1.innerHTML = `Sua idade é: ${anoAtual - anoF}`
}

function mult(n1, n2) {
    if (n1 || n2){
        resposta1.innerHTML = `${n1} X ${n2} = ${n1 * n2}`
    }else{
        resposta1.innerHTML = 'Digite um numero.'
    }
}


function par_impar(numero){
    if (numero){
        if (numero % 2 == 0) {
            resposta.innerHTML = `${numero} é par.`
        } else {resposta.innerHTML = `${numero} é impar.`}
    }else{
        resposta.innerHTML = 'Digite um numero.'
    }
    
}

for (c=1; c<=5; c++){
    repetir.innerHTML += `Repetir com FOR ${c} <br>`
}

const contador = 0

