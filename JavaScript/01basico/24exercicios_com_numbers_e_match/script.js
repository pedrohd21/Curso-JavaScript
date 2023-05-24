const numero = Number(prompt('Digite um numero: '));
const numeroTitulo = document.getElementById('numero-titulos');
const textos = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

textos.innerHTML = '';
textos.innerHTML += `<p> Raiz Quadrada: ${numero ** (1 / 2)}</p>`;
textos.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
textos.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}</p>`;
textos.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)}</p>`;
textos.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numero)}</p>`;
textos.innerHTML += `<p> Com duas casas decimais ${numero.toFixed(2)}</p>`;