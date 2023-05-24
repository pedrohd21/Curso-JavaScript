const form = document.querySelector('#form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    const n1 = e.target.querySelector('#n1')
    const n2 = e.target.querySelector('#n2')

    const valor1 = Number(n1.value)
    const valor2 = Number(n2.value)

    validar(valor1, valor2)
})

function validar(n1, n2){
    if (!n1 || !n2){
        res.innerHTML = `Digite um numero`
    }
    else{
        res.innerHTML = `${n1} + ${n2} = ${n1+n2}`
    }
}