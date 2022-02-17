function verificar() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoNascimento = document.getElementById('txtano')
    let res = document.getElementById('div2')
    let img = document.createElement('img')
    img.setAttribute('id', 'img')

    if (anoNascimento.value.length == 0 || anoNascimento.value > anoAtual) {
        window.alert('[Erro] Verifique os dados e tente novamete.')
    } else {
        let opcaoGenero = document.getElementsByName('radgen')
        let idade = anoAtual - +anoNascimento.value
        let generoSelecionado = ''
        if (opcaoGenero[0].checked) {
            generoSelecionado = 'homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'homem-crianca.jpg')
            } else if (idade > 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','homem-adulto.png')
            } else {
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else {
            generoSelecionado = 'mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'mulher-crianca.jpg')
            } else if (idade > 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','mulher-adulta.jpg')
            } else {
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }

        generoSelecionado == 'homem'?
            res.innerHTML = `Você é um ${generoSelecionado} com ${idade} anos de idade.`:
            res.innerHTML = `Você é uma ${generoSelecionado} com ${idade} anos de idade.`
            res.appendChild(img)
    }
}
