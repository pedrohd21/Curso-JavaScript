function CriaCalculadora(){
    this.display = document.querySelector('.display')
    this.btnClear = document.querySelector('.btn-clear')

    this.inicia = () =>{
        this.cliqueBotoes()
        this.precionarEnter()
    }

    this.precionarEnter = () =>{
        this.display.addEventListener('keyup', e =>{
            if(e.keyCode === 13){
                this.realizarConta()
            }
        })
    }

    this.clearDisplay = () => this.display.value = ''
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1)


    this.realizarConta = () =>{
        let conta = this.display.value
        try{
            conta = eval(conta)
            if(!conta){
                alert('Conta Invalida')
                return
            }
            this.display.value = String(conta)
        } catch(e){
            alert('Conta Invalida')
            return
        }
    }

    this.cliqueBotoes = () =>{
        document.addEventListener('click', e=>{
            const el = e.target

            if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText)
            if(el.classList.contains('btn-clear'))this.clearDisplay()
            if(el.classList.contains('btn-del'))this.apagaUm()
            if(el.classList.contains('btn-eq'))this.realizarConta()
        })
    }

    this.btnParaDisplay = (valor) => this.display.value += valor
}

const c1 = new CriaCalculadora()
c1.inicia()