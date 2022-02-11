var agora = new Date()
var hora = agora.getHours()

if(hora<12){
    console.log(`São exatamente ${hora}h`)
    console.log('Bom dia')
}else if(hora > 12 && hora < 18){
    console.log(`São exatamente ${hora}h`)
    console.log('Boa tarde')
}else if (hora > 18 && hora < 24){
    console.log(`São exatamente ${hora}h`)
    console.log('Boa noite')
}else{
    console.log('A hora não é válida.')
}