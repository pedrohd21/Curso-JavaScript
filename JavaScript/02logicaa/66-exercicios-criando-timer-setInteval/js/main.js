function relogio(){
    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    
    let seg = 0
    let timer;
    
    iniciar.addEventListener('click', function(e){
        timer = setInterval(function(){
            seg++;
            relogio.innerHTML = segundos(seg)   
        }, 1000)
        
        
    })
    
    zerar.addEventListener('click', function(e){
        relogio.innerHTML = clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        seg = 0
    })
    
    
    function segundos(seg){
        const data = new Date(seg * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
}
relogio()


