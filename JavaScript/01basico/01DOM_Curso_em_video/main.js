const p1 = window.document.getElementsByTagName('p')[0]
const corpo = window.document.body
window.document.write('Esta escrito assim: ', p1.innerHTML); // innertext mostra so o texto sem os comandos por
p1.style.color = ''
corpo.style.background = 'black'

const d = window.document.getElementById('msg')
d.style.background = 'red'
d.innerHTML = 'estoi aq'

// jeitos de usar o window.document
// window.document.getElementById('')
// window.document.getElementsByClassName('')
// window.document.getElementsByTagName('')
 