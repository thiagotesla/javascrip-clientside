const numero = document.getElementById('numero')
const divNumeros = document.getElementById('divNumeros')
const divVetor = document.getElementById('divVetor')
const vetor = []
const divRes = document.getElementById('divRes')

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){

    if(isNumber(numero.value) && !inList(numero.value, vetor)){
        vetor.push(Number(numero.value))
        divVetor.innerHTML = vetor
    }else{
        window.alert('já na lista ou inválido')
    }
    numero.value = ''
    numero.focus()
    divRes.innerHTML = '' 
}

function gerarDados(){
    
    if(vetor.length == 0){
        window.alert('Adicione valores')
    }else{
        let total = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0
        for(let i in vetor){
            soma += vetor[i]
            if(vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
        media = soma/total

        divRes.innerHTML += `<p>Foram cadastrados ${total} números.</p>`
        divRes.innerHTML += `<p>O menor valor é ${menor}.</p>`
        divRes.innerHTML += `<p>O maior valor é ${maior}.</p>`
        divRes.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        divRes.innerHTML += `<p>A média dos valores é ${(media).toFixed(2)}.</p>`
    }
    
}
