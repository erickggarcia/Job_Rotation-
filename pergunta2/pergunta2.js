const FIBO  = []
const resultado = document.querySelector('.resultado')
const outPertence = document.querySelector('.outPertence')
const btTestar = document.getElementById('btTestar')
const invisible = 'invisible'
btTestar.addEventListener('click', fibonacci)


function fibonacci() { 
    let inNumero = document.getElementById('inNumero')
    let numero = parseInt(inNumero.value)   
    
    FIBO[0] = 0
    FIBO[1] = 1 
    
    if (numero < 1) {
        alert('valores menores que 1 não são permitidos!')
    }  else {
        for(var i = 2; i <= numero; i++) {
            FIBO[i] = FIBO[i - 2] + FIBO[i - 1]
        } 
        resultado.innerHTML = "<strong> Sequência de Fibonacci de </strong> " + numero + " <strong>é:</strong> " + FIBO.join(', ')

        let pertence = numero === FIBO[1] || numero === FIBO[i] ? numero + " pertence a sequência " :  numero + "  não pertence a sequência"

        outPertence.innerHTML = pertence

        btTestar.disabled = true
        btRecarregar.disabled = false
        btRecarregar.classList.remove(invisible)
    }
    inNumero.value = ""
    inNumero.focus()
}

const btRecarregar = document.getElementById('btRecarregar')
btRecarregar.addEventListener('click', recarregar)
btRecarregar.disabled = false

function recarregar() {
    location.reload()
}
    










