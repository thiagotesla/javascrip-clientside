function carregar() {
    let msg1 = window.document.getElementById('msg1')
    let msg2 = window.document.getElementById('msg2')
    let img = window.document.getElementById('image1')
    let data = new Date()
    let hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        msg1.innerHTML = `Bom dia`
        msg2.innerHTML = `Agora são ${hora} horas.`
        img.src = 'bom-dia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg1.innerHTML = `Boa tarde`
        msg2.innerHTML = `Agora são ${hora} horas.`
        img.src = 'boa-tarde.png'
        document.body.style.background = '#b984gf'
    } else {
        msg1.innerHTML = `Boa noite`
        msg2.innerHTML = `Agora são ${hora} horas.`
        img.src = 'boa-noite.png'
        document.body.style.background = '#515154'
    }
}