var n1 = 1545.5

n1.toFixed(2) // arredonda
console.log(`${n1.toFixed(2)}`)
console.log(`${n1.toFixed(2).replace('.', ',')}`) // troca o ponto pela virgula
console.log(`${n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)  // deixa formatado no jeito que é o real brasileiro
console.log(`${n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})}`)  // deixa formatado no jeito que é a moeda selecionada
console.log(`${n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})}`)  // deixa formatado no jeito que é a moeda selecionada
