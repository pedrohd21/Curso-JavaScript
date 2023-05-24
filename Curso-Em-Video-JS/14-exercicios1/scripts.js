function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')

    var inicio = Number(inicio.value)
    var fim = Number(fim.value)
    var passo = Number(passo.value)
    if (passo === 0) {
        window.alert('Coloque um valor valido')
    } else if (inicio < fim) {
        var icon = document.createElement('i')
        icon.setAttribute('class', 'far fa-hand-point-right')
        icon2 = document.createElement('i')
        icon2.setAttribute('class', 'fas fa-flag-checkered')
        for (inicio; inicio <= fim; inicio += passo) {
            resposta.innerHTML += `${inicio} `
            resposta.appendChild(icon)
        }
    } else if (fim < inicio) {
        var icon = document.createElement('i')
        icon.setAttribute('class', 'far fa-hand-point-right')
        icon2 = document.createElement('i')
        icon2.setAttribute('class', 'fas fa-flag-checkered')
        for (inicio; fim <= inicio; inicio -= passo) {
            resposta.innerHTML += `${inicio} `
            resposta.appendChild(icon)
        }
        resposta.appendChild(icon2)
    }
}


