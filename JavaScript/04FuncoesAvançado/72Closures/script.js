function retornaFuncao(nome){
    return () =>{
        return nome
    }
}

const funcao = retornaFuncao('Pedro')
const funcao2 = retornaFuncao('pedro')
console.dir(funcao)
console.dir(funcao2)