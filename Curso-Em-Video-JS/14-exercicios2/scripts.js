function tabuada(){
    var numero = document.querySelector('#numero')
    var numero = Number(numero.value)
    for (var c = 1; c <= 10; c++){
        resposta.innerHTML += `${c} x ${numero} = ${c * numero}<br>`
    }
}
