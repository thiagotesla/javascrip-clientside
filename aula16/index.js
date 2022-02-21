function parOuImpar(n){
   if(n/n.toFixed(0) != 1){
        return 'Número reais não podem ser verificados, apenas inteiros'
    }
    else{
        return n%2==0?'Par':'Impar'
    }        
}
console.log(parOuImpar(13.3))
