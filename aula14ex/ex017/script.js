function tabuada() {
    let numero = document.getElementById('numero').value
    let tabuada = document.getElementById('divTabuada')

    if (numero.length == 0) {
        window.alert('Digite um número')
    } else {
        let n = +numero
        let i = 0
        tabuada.innerHTML = ''
        while (i <= 10) {
            let item = document.createElement('li')
            item.innerHTML = `${n} x ${i} = ${n * i} <ln>`
            tabuada.appendChild(item)
            i++
        }
    }
}
