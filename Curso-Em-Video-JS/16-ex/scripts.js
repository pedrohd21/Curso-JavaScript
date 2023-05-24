let add = document.querySelector('#add')
let resposta = document.querySelector('#resposta')
let adiciona = document.querySelector('#adicionar')

let numerosAdicionados = []

function adicionar(){
    if(add.value < 0 || add.value > 100 || add.value === '' ){
        window.alert('Digite um valor entre 1 e 100')
    }else{
        let option = document.createElement('option')
        option.text = `Valor ${add.value} adicionado.`
        adiciona.appendChild(option)
        numerosAdicionados.push(Number(add.value))
        
    }
}

function finalizar(){
    let maior = 0
    let menor = 100
    let soma = 0
    for (let c  in numerosAdicionados){
        soma += numerosAdicionados[c]

        if (maior < numerosAdicionados[c]){
            maior = numerosAdicionados[c]
        }
        if(menor > numerosAdicionados[c]){
            menor = numerosAdicionados[c]
        }
    }
    let media = soma / numerosAdicionados.length
    resposta.innerHTML += `Ao todo, temos ${numerosAdicionados.length} números adicionados.<br>`
    resposta.innerHTML += `Maior Numero adicionado é ${maior} <br>`
    resposta.innerHTML += `Menor Numero adicionado é ${menor}<br>`
    resposta.innerHTML += `Somando todos os valores, temos ${soma}<br>`
    resposta.innerHTML += `A média dos valores digitados é ${media}<br>`
    
}