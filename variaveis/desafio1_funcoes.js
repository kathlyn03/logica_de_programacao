let num1 = Number(prompt(&quot;Digite um número: &quot;));
let num2 = Number(prompt(&quot;Digite outro número: &quot;));
let operacao = prompt(&quot;Escolha uma operação matemática entre: soma,
subtração, divisão e multiplicação: &quot;).toLowerCase()
let resultado = 0

function soma(num1, num2) {
return resultado = num1 + num2
}
function subtracao(num1, num2) {
return resultado = num1 - num2
}
function multiplicacao(num1, num2) {
return resultado = num1 * num2
}
function divisao(num1, num2) {
return resultado = num1 / num2
}

switch (operacao) {
case &quot;soma&quot;:
resultado = soma(num1, num2)
console.log(&quot;Resultado da soma:&quot;, resultado);
break;

case &quot;subtracao&quot;:
resultado = subtracao(num1, num2)
console.log(&quot;Resultado da subtracao:&quot;, resultado);
break;

case &quot;multiplicacao&quot;:
resultado = mutiplicacao(num1, num2)
console.log(&quot;Resultado da multiplicacao:&quot;, resultado);
break;

case &quot;divisao&quot;:
resultado = divisao(num1, num2)
console.log(&quot;Resultado da divisao:&quot;, resultado);
break;

default:
console.log(&quot;Operação inválida.&quot;);
break
}