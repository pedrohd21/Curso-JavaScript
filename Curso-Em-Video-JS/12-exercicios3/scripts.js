function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Informe um ano.')
    }else{
        var sexo = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img') // cria uma tag html, mas feita aq
        img.setAttribute('id', 'foto')
        if (sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                vida = 'Criança'
                img.setAttribute('src', './img/bebem.jpg')
            } else if (idade < 21){
                vida = 'Jovem'
                img.setAttribute('src', './img/jovem.jpg')
            }else if(idade < 50){
                vida = 'Adulto'
                img.setAttribute('src', './img/homem.jpg')
            }else{
                vida = 'Idoso'
                img.setAttribute('src', './img/idoso.jpg')
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                vida = 'Criança'
                img.setAttribute('src', './img/bebef.jpg')
            } else if (idade < 21){
                vida = 'Jovem'
                img.setAttribute('src', './img/jovemm.jpg')
            }else if(idade < 50){
                vida = 'Adulta'
                img.setAttribute('src', './img/mulher.jpg')
            }else{
                vida = 'Idosa'
                img.setAttribute('src', './img/idosa.jpg')
            }
        }
        res.innerHTML = `${vida} com ${idade} anos, genero ${genero}.`
        res.appendChild(img)
    }
}