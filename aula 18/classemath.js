var pi = Math.PI
var e = Math.E
var raisde2 = Math.SQRT2
console.log(`O número pi vale ${pi}, o número e vale ${e} e a rais quadrada de 2 vale ${raisde2}`)
var valor = -10
var absoluto = Math.abs(valor)
console.log(`O valor absoluto de ${valor} vale ${absoluto}`)
var piarredondado = Math.round(pi)
console.log(`O valor arredondado de ${pi} é ${piarredondado}`)
var num1 = 2
var num2 = 5
var num3 = Math.pow(num1, num2)
console.log(num3)
var aleatorio = Math.random()
console.log(aleatorio)
//Gerador de números aleatórios entre 0 e 60
var v = 60
for(i = 0; i < 6; i++){
    console.log(Math.round(Math.random()*v))
}
//Calculando seno e cosseno com valores já convertidos de grau em radiano
var angulo = 60
var sin = Math.sin(angulo*Math.PI/180)
var cos = Math.cos(angulo*Math.PI/180)
console.log(`O seno de ${angulo} é ${sin} e o cosseno de ${angulo} é ${cos}`)