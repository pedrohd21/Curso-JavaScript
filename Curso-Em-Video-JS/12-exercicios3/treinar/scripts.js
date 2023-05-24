function verificar(){
    var ano = document.querySelector('#ano')
    var data = new Date()
    var ano_atual = data.getFullYear()

    if(ano.value.length == 0 || Number(ano.value) > ano_atual){
        window.alert('Informe um ano Valido')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano_atual - ano.value
        if(sexo[0].checked){
            sexo = 'Masculino'
            if(idade <=10){
                fase = 'Criança'
            }else if(idade <= 18){
                fase = 'Adolecente'
            }else if(idade <= 60){
                fase = 'Adulto'
            }else{
                fase = 'Idoso'
            }
        }else{
            sexo = 'Mulher'
            if(idade <= 10){
                fase = 'Criança'
            }else if(idade <= 18){
                fase = 'Adolecente'
            }else if(idade <= 60){
                fase = 'Adulta'
            }else{
                fase = 'Idosa'
            }
        }
    }
    res.innerHTML = `${fase} com ${idade} anos, ${sexo}.`
}