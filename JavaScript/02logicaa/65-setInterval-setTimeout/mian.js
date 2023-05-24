function mostrarHora(){ // Hora formatadinha
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function(){ // vai contar infinitamente o tempo
    console.log(mostrarHora())
}, 1000)// quantidade de tempo pra passar, aq ta 1 segundo

setTimeout(function(){ 
    clearInterval(timer)
}, 3000) //Sem o setTimeot, nao para o time, aq vai parar com 3segundo

setTimeout(function(){
    console.log('Ola Mundo!')
}, 5000)