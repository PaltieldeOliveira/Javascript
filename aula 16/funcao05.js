function fatorial(n){
    if(n<1){
        return `Não existe para o conjunto dos numeros Reais`
    }else if(n==1){
        return 1
    }else{
        return n*fatorial(n-1)
    }
}
console.log(fatorial(1))