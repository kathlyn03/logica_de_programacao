1. let idioma = prompt(&quot;Escolha um idioma do Chipre (Grego ou Turco):
&quot;).toLowerCase()
switch (idioma) {
case &quot;grego&quot;:
console.log(&quot;Χαίρετε! (Olá em Grego)&quot;)
break
case &quot;turco&quot;:
console.log(&quot;Merhaba! (Olá em Turco)&quot;)
break
default:
console.log(&quot;Idioma não reconhecido. Tente &#39;Grego&#39; ou &#39;Turco&#39;.&quot;)
}

2. let numero = semana(prompt(&quot;Digite um número de 1 a 7: &quot;))
switch (numero) {
case 1:
console.log(&quot;Domingo&quot;)
break
case 2:
console.log(&quot;Segunda-feira&quot;)
break
case 3:
console.log(&quot;Terça-feira&quot;)
break
case 4:
console.log(&quot;Quarta-feira&quot;)
break
case 5:
console.log(&quot;Quinta-feira&quot;)
break
case 6:
console.log(&quot;Sexta-feira&quot;)
break
case 7:
console.log(&quot;Sábado&quot;)
break
default:
console.log(&quot;Número inválido! Digite um número entre 1 e 7.&quot;)
}

3. let numero = transporte(prompt(&quot;Digite um número de 1 a 5 para ver um
tipo de transporte: &quot;))
switch (numero) {
case 1:
console.log(&quot;Transporte terrestre - Ex: Carro&quot;)
break
case 2:
console.log(&quot;Transporte aéreo - Ex: Avião&quot;)
break
case 3:
console.log(&quot;Transporte aquático - Ex: Navio&quot;)
break
case 4:
console.log(&quot;Transporte ferroviário - Ex: Trem&quot;)
break
default:
console.log(&quot;Número inválido! Digite um número entre 1 e 4.&quot;)
}
4. let nivel = urngência(prompt(&quot;Digite um número de 1 a 5 para indicar o
nível de urgência:&quot;))
switch (nivel) {
case 1:
console.log(&quot;Nível 1 - Sem urgência&quot;)
break
case 2:
console.log(&quot;Nível 2 - Urgência moderada&quot;)
break
case 3:
console.log(&quot;Nível 3 - Emergência!&quot;)
break
default:
console.log(&quot;Nível inválido! Digite um número entre 1 e 3.&quot;)
}
5. let categoria = prompt(&quot;Digite uma categoria de veículo (ex: passeio,
carga, luxo, esportivo, utilitário):&quot;).toLowerCase()
switch (categoria) {
case &quot;passeio&quot;:
console.log(&quot;Veículos de passeio: Sedan, Hatch, SUV&quot;)
break
case &quot;carga&quot;:
console.log(&quot;Veículos de carga: Caminhão, Carreta, Furgão&quot;)
break

case &quot;esportivo&quot;:
console.log(&quot;Veículos esportivos: Coupé, Conversível,
Superesportivo&quot;)
break
default:
console.log(&quot;Categoria inválida! Tente: passeio, carga ou
esportivo.&quot;)
}
6. let tempo = parseFloat(prompt(&quot;Digite o tempo estacionado (em
horas):&quot;));
let horas = Math.ceil(tempo); // Arredondar para cima
let tarifa = 0;
switch (true) {
case (horas &lt;= 1):
tarifa = 5.00;
break;
case (horas &lt;= 4):
tarifa = 5.00 + (horas - 1) * 3.00;
break;
case (horas &gt; 4):
tarifa = 5.00 + (3 * 3.00) + (horas - 4) * 2.00;
break;
default:
console.log(&quot;Tempo inválido!&quot;);
break;
}
if (tarifa &gt; 0) {
console.log(&quot;Tempo estacionado: &quot; + tempo + &quot; hora(s)&quot;);
console.log(&quot;Tarifa a pagar: R$ &quot; + tarifa.toFixed(2));
}
7. let nivel = dificuldade(prompt(&quot;Digite um número de 1 a 5 para escolher o
nível de dificuldade:&quot;));
switch (nivel) {
case 1:
console.log(&quot;Nível 1 - Muito fácil&quot;);
break;
case 2:
console.log(&quot;Nível 2 - Fácil&quot;);
break;
case 3:

console.log(&quot;Nível 3 - Médio&quot;);
break;
case 4:
console.log(&quot;Nível 4 - Difícil&quot;);
break;
case 5:
console.log(&quot;Nível 5 - Muito difícil&quot;);
break;
default:
console.log(&quot;Número inválido! Digite um número entre 1 e 5.&quot;);
}
8. let categoria = prompt(&quot;Escolha uma categoria de serviço da academia
(ex: musculação, yoga, funcional, natação, pilates):&quot;).toLowerCase();
switch (categoria) {
case &quot;musculação&quot;:
console.log(&quot;Serviços disponíveis: Treino com pesos,
Acompanhamento de personal trainer, Avaliação física&quot;);
break;
case &quot;yoga&quot;:
console.log(&quot;Serviços disponíveis: Aulas de yoga, Meditação,
Relaxamento&quot;);
break;
case &quot;funcional&quot;:
console.log(&quot;Serviços disponíveis: Treinamento funcional, Aulas em
grupo, Personal Trainer funcional&quot;);
break;
case &quot;natação&quot;:
console.log(&quot;Serviços disponíveis: Aulas de natação, Treinamento
para competições, Hidroginástica&quot;);
break;
case &quot;pilates&quot;:
console.log(&quot;Serviços disponíveis: Aulas de pilates, Reabilitação,
Pilates para gestantes&quot;);
break;
default:
console.log(&quot;Categoria inválida! Tente: musculação, yoga,
funcional, natação ou pilates.&quot;);
}
9. let categoria = prompt(&quot;Escolha uma categoria para o ingresso (ex:
estudante, normal, VIP, empresarial):&quot;).toLowerCase();
switch (categoria) {
case &quot;estudante&quot;:
console.log(&quot;Preço do ingresso para Estudante: R$ 20,00&quot;);

break;
case &quot;normal&quot;:
console.log(&quot;Preço do ingresso Normal: R$ 50,00&quot;);
break;
case &quot;vip&quot;:
console.log(&quot;Preço do ingresso VIP: R$ 150,00&quot;);
break;
case &quot;empresarial&quot;:
console.log(&quot;Preço do ingresso Empresarial: R$ 300,00&quot;);
break;
default:
console.log(&quot;Categoria inválida! Tente: estudante, normal, VIP ou
empresarial.&quot;);
}
10. let idade = parseInt(prompt(&quot;Digite a sua idade:&quot;));
switch (true) {
case (idade &gt;= 18 &amp;&amp; idade &lt;= 30):
console.log(&quot;Nível de dificuldade: Alta (Exercícios intensos,
musculação, treinos avançados)&quot;);
break;
case (idade &gt;= 31 &amp;&amp; idade &lt;= 45):
console.log(&quot;Nível de dificuldade: Moderada (Exercícios de
intensidade média, atividades aeróbicas e musculação moderada)&quot;);
break;
case (idade &gt;= 46 &amp;&amp; idade &lt;= 60):
console.log(&quot;Nível de dificuldade: Baixa (Exercícios de baixo
impacto, caminhada, yoga, pilates)&quot;);
break;
case (idade &gt; 60):
console.log(&quot;Nível de dificuldade: Muito baixa (Exercícios leves,
caminhada, alongamento, atividades de reabilitação)&quot;);
break;
default:
console.log(&quot;Idade inválida! Por favor, insira uma idade válida.&quot;);
}
11. let genero = prompt(&quot;Escolha um gênero musical (ex: rock, jazz,
clássica, pop, samba):&quot;).toLowerCase();
switch (genero) {
case &quot;rock&quot;:
console.log(&quot;Instrumentos típicos do Rock: Guitarra, Baixo, Bateria,
Teclado&quot;);
break;
case &quot;pop&quot;:

console.log(&quot;Instrumentos típicos do Pop: Guitarra, Baixo, Teclado,
Bateria, Sintetizador&quot;);
break;
case &quot;samba&quot;:
console.log(&quot;Instrumentos típicos do Samba: Surdo, Pandeiro,
Cavaquinho, Violão, Tamborim&quot;);
break;
default:
console.log(&quot;Gênero inválido! Tente: rock, jazz, clássica, pop ou
samba.&quot;);
}
12. let area = prompt(&quot;Escolha uma área de estudo (front-end, back-end,
mobile):&quot;).toLowerCase();
switch (area) {
case &quot;front-end&quot;:
console.log(&quot;Cursos oferecidos para Front-End: HTML, CSS,
JavaScript, React, Vue.js&quot;);
break;
case &quot;back-end&quot;:
console.log(&quot;Cursos oferecidos para Back-End: Node.js, Python,
Ruby, Java, PHP&quot;);
break;
case &quot;mobile&quot;:
console.log(&quot;Cursos oferecidos para Mobile: Flutter, React Native,
Kotlin, Swift, Java para Android&quot;);
break;
default:
console.log(&quot;Área inválida! Tente: front-end, back-end ou mobile.&quot;);
}
13. let idade =nível de habilidade(prompt(&quot;Digite a idade do atleta:&quot;));
switch (true) {
case (idade &gt;= 5 &amp;&amp; idade &lt;= 12):
console.log(&quot;Nível de habilidade: Iniciante (Atividades de
aprendizado, desenvolvimento motor básico)&quot;);
break;
case (idade &gt;= 13 &amp;&amp; idade &lt;= 18):
console.log(&quot;Nível de habilidade: Intermediário (Treinos mais
técnicos, participação em competições locais)&quot;);
break;
case (idade &gt;= 19 &amp;&amp; idade &lt;= 35):
console.log(&quot;Nível de habilidade: Avançado (Atleta experiente,
competições de alto nível, performance máxima)&quot;);
break;

case (idade &gt; 35):
console.log(&quot;Nível de habilidade: Master (Atleta experiente, mas
focado em manutenção física e saúde)&quot;);
break;
default:
console.log(&quot;Idade inválida! Por favor, insira uma idade válida.&quot;);
}
14. let categoria = prompt(&quot;Escolha a categoria do desafio matemático
(básico, intermediário, avançado):&quot;).toLowerCase();
switch (categoria) {
case &quot;básico&quot;:
console.log(&quot;Desafios Básicos: Soma, Subtração, Multiplicação,
Divisão simples&quot;);
break;
case &quot;intermediário&quot;:
console.log(&quot;Desafios Intermediários: Potenciação, Radiciação,
Equações do 1º grau, Proporções&quot;);
break;
case &quot;avançado&quot;:
console.log(&quot;Desafios Avançados: Equações quadráticas, Funções,
Derivadas, Integrais&quot;);
break;
default:
console.log(&quot;Categoria inválida! Tente: básico, intermediário ou
avançado.&quot;);
}