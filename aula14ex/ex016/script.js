function contar() {
    let resultado = document.getElementById('resultado')
    let inicio = +document.getElementById('inicio').value
    let fim = +document.getElementById('fim').value
    let passo = +document.getElementById('passo').value

    if (inicio.length === 0 || fim.length === 0 || passo.length === 0) {
        window.alert('Cadê os dados, meu chapa?')
    } else if (inicio == 0 && fim == 0 && passo > 0) {
        window.alert('Não dá pra contar de zero até zero...')
    } else if (passo <= 0) {
        window.alert('O passo tem que ser maior que zero.')
    } else {
        if (inicio < fim) {
            resultado.innerHTML = 'Come on, Arise! '
            let i = inicio
            let f = fim
            let p = passo
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} `
            }
        } else {
            resultado.innerHTML = 'Going down! '
            let i = inicio
            let f = fim
            let p = passo
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} `
            }
        }
    }

}
