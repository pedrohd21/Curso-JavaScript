// Copiar um objeto
// const produto = {nome: 'caneca', preco: 1.8}
// const outraCoisa = {
//     ...produto, 
//     material: 'Porcelana'
// } // literalmente vai copiar o produto, mas com valores definido pelo outracoisa

// outraCoisa.nome = 'Outro nome'
// outraCoisa.preco = 2.5
// console.log(produto)
// console.log(outraCoisa)

// ####################################################################

// Copiar um objeto
// const produto = {nome: 'caneca', preco: 1.8}
// const caneca = Object.assign({}, produto)

// caneca.nome = 'Outro nome'
// caneca.preco = 2.5
// console.log(produto)
// console.log(caneca)

// #####################################################################

// keys - Coloca dentro de um array com keys
// const produto = {nome: 'Produto', preco: 1.8}
// console.log(Object.keys(produto));

// #####################################################################
// freeze - Nao deixar mudar o valor do produto freeze
// const produto = {nome: 'Produto', preco: 1.8}
// Object.freeze(produto)

// #####################################################################
// Object.getOwnPropertyDescriptor - mostra os valores definidos do defineProperty
// const produto = {nome: 'Produto', preco: 1.8}
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

// #####################################################################
// values - mostra os valores
// const produto = {nome: 'Produto', preco: 1.8}
// console.log(Object.values(produto))

// #####################################################################
// entries - mostra os valores no array
// const produto = {nome: 'Produto', preco: 1.8}
// console.log(Object.entries(produto))

