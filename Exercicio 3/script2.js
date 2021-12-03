let num = document.getElementById('num')
let select = document.getElementById('select')
let lista = []
let resultado = document.getElementById('resultado')

function testenumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function testelista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(testenumero(num.value) && !testelista(num.value, lista)){
        lista.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        item.value = `${num.value}`
        select.appendChild(item)
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = "" //O valor é apagado do campo e o campo de números fica limpo
    num.focus()
}
function finalizar(){
    if(lista == ""){
        alert('Adicione valores antes de finalizar')
    }else{
        let total = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0
        for(let posicao in lista){
            soma += lista[posicao]
            if(maior > lista[posicao]){
                maior = lista[posicao]
            }
            if(menor < lista[posicao]){
                menor = lista[posicao]
            }
        }
        media = soma / total
        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Ao todo temos ${total} números cadastrados</p>`
        resultado.innerHTML += `<p> O maior valor é ${maior} </p>`
        resultado.innerHTML += `<p> O menor valor é ${menor} </p>`
        resultado.innerHTML += `<p> A soma dos valores é ${soma}</p>`
        resultado.innerHTML += `<p> A média dos valores é ${media} </p>`
    }
}