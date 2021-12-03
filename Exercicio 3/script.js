let num = document.getElementById('num')
let select = document.getElementById('select')
let lista = []
let resultado = document.getElementById('resultado')
function adicionar(){
    if(num.value < 1 || num.value > 100){
        alert(`Valor inválido ou já encontrado na lista`)
    }else{
        let posição = lista.indexOf(num.value)
        if(posição == -1){
            lista.push(num.value)
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            item.value = `${num.value}`
            select.appendChild(item)
        }else{
            alert(`Valor inválido ou já encontrado na lista`)
        }
    }
}