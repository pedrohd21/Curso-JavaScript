function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra as chaves
        configurable: true, // configuravel, pode ser excluida, alterada, se false não pode mexer
        get: function(){
            return estoque
        },
        set: function(valor){
            valor = estoque
        }
    })
}

const p1 = new Produto('camiseta', 20, 3)

console.log(p1)