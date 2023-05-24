// try{
//     // é executada quando nao ha erros
//     try
// } catch(e){
//     //é executada quando ha erros
// }finally{
//     //ele sempre vai ser executado
// }

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de date.')
    }
    if (!data){
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false
    })
}
try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora);
} catch(e){
    //tratar erro
    //console.log(e)
} finally{
    console.log('Tenha um bom dia')
}