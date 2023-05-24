function soma(){
    const numero1 = window.document.getElementById('n1');
    const numero2 = window.document.querySelector('input#n2')
    const res = window.document.getElementById('res')
    const n1 = Number(numero1.value)
    const n2 = Number(numero2.value)
    const soma = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${soma}`
    
}