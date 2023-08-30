# Curso em Vídeo - JavaScript

Anotações feitas por Micael Azevêdo  
contato: azr.micael@gmail.com

## Módulo A: Conhecendo o JavaScript

### Aula 1 – O que o JavaScript é capaz de fazer?  

#### Diferença entre Client e Server  

Client       | Server  
-------------|----------------------------------------
celulares    | servidores do YouTube, da Google etc.  
computadores | -
tablets      | -  

Os servidores enviam cópias de arquivos (html) para os clientes.

JavaScript é uma tecnologia client-side  
Obs.: Ele também funciona em servidores.

#### Website (exemplo)

Conteúdo (HTML)      | Aparência (CSS)  | Interações (JS)
---------------------|------------------|-----------------
arquivos .txt        | cores            | configurações
arquivos .png        | dimensões        | segurança
arquivos .mp4        | etc.             | etc.  

HTML e CSS são tecnologias de construção de sites, enquanto que JS é uma linguagem de programação. Portanto, devo dizer que ***desenvolvo*** coisas em HTML e CSS e que programo em JS.

O JSé responsável pelas interações do cursor, ampliar imagens (enquanto o fundo fica, muitas vezes, com uma cor escura) etc.  

Ctrl + L : limpa o console do Google Chrome.  

#### Questões que devo responder sobre Aula 01

1. Qual a diferença entre cliente e servidor?
2. Para que serve HTML, CSS e JS?
3. Quais (exemplos) sites utilizar JS?

---

### Aula 2 – Como chegamos até aqui?

#### Datas importantes

> **1993** - Tim Berners-Lee: World Wide Web (WWW), HTML, Protocolo HTTP  
> **1993** - Marc Andreessen: Desenvolveu o 1º navegador, o Mosaic (nos EUA)  
> **1995** - Netscape: Criou a linguagem de programação **JavaScript** (JS)

Obs.: O nome JavaScript foi escolhido graças a uma jogada de marketing dado ao sucesso da palavra Java na época. Java é o nome de uma linha da Indonésia, muito famosa por seu café.  

Apesar do nome parecido e terem sido criadas baseadas em C, as linguagem Java e JavaScript são completamente diferentes.

A Microsoft criou a JScript, uma linguagem de programação semelhante a JS, mas com o nome diferente. Isso motivou a Netscape a buscar a padronização do JavaScript.  

> **1997** - ECMAScript - A linguagem JS foi padronizada pela ECMA  

#### Motores internos de JS dos principais navegadores

Motor JS     | Navegador
-------------|--------------  
V8           | Google Chrome  
Nitro        | Safari  
Karakan      | Opera  
SpiderMonkey | Firefox  
Chakra       | Microsoft Edge

O V8 se destacou por gerar código JIT (Just In Time).

> **2010** - Node.js - surgiu da modificação do V8 (motor interno de JS do Chrome)  

O Node.js é uma máquina que roda JS fora do navegador.

#### Questões que devo responder sobre Aula 02

1. Qual empresa criou o JavaScript?
2. Java e JavaScript são a mesma coisa?
3. O que é ECMAScript?  
4. Quais (exemplos) programas foram criados em JS?

---

### Aula 3 – Dando os primeiros passos

#### Bibliografia Recomendada

Livros

* (2013) JavaScript - O guia definitivo, 6th ed - David Flanagan
* (2016) Learning JavaScript, 3rd ed - Ethan Brown  
* (2020) JavaScript - The Definitive Guide, 7th ed - David Flanagan  
* (2020) JavaScript - Guia do Programador, 1st ed - Maurício S. Silva  

Guias

* [ECMA-262, 12th ed, June 2021 ECMAScript® 2021 Language Specification](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
* [Guia de referência do Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/)

Programas

* Microsoft Visual Code (VSCode)
* Node.js  

#### Questões que devo responder sobre Aula 03

1. Inglês é pré-requisito para o aprendizado de JS?  
2. Qual a melhor forma de estudar para realmente aprender?  
3. Quais programas devem ser instalados?

---

### Aula 4 – Criando o seu primeiro script

#### Relembrando

> **HTML** é uma linguagem de marcação  
> **CSS**  é uma linguagem de estilos  --> \<style><\style>  
> **JS**   é uma linguagem de programação --> \<script><\script>  

Obs.: Você não diz que programa em HTML e CSS, você desenvolve coisas nelas.

#### Primeiro arquivo HTML

Ao criar um novo arquivo com extensão .html no VSCode, é possível tem um código base para iniciarmos nossa escrita, e isso é feito de forma automática, como ilustrado a seguir:

![Figura 1: Gerando código inicial em HTML5](.\img\html5-1.png "HTML5_01")

Selecionando a opção `html:5`, é gerado o seguinte código:

![Figura 2: Código inicial em HTML5](.\img\html5-2.png "HTML5_02")

#### Inserindo estilo

Partindo do código da Figura 2, podemos inserir, após a linha 7, o trecho de estilo (CSS):

~~~HTML
<title>Document</title> <!-- Texto da linha 7 -->
~~~

~~~CSS
<style> /* trecho em CSS */
    body {
        background-color: rgb(76, 89, 95);
        color:white;
        font: normal 12pt Didot; /* Didot é uma tipo de fonte */
    }
    h1 {
        color:rgb(78, 180, 227)
    }
</style>
~~~

#### Mensagens de Alerta

Podemos emitir mensagens em janelas flutuantes

~~~JavaScript
// janela com 'Alerta' e [OK]  
window.alert('Alerta') 

// janela com 'Pergunta?' e [OK] ou [Cancelar] 
window.confirm('Pergunta?') 

// janela com 'Pergunta?' e caixa de texto com [OK] ou [Cancelar]
window.prompt('Pergunta') 
~~~

#### Comentários

Comentário em uma linha de código

~~~javascript
// Isso é um comentário  
~~~

Comentário em mais de uma linha de código

~~~javascript
/* 
Isso é um comentário 
em mais de uma
linha de código.
*/   
~~~

#### Questões que devo responder sobre Aula 04

1. Como organizar pastas no VSCode?  
2. Como instalar o Node.js?  
3. Quais diferenças entre HTML5, CCS3 e JS no código?
4. Como disparar alertas, confirmações e perguntas?

---

## Módulo B: Comandos Básicos do JavaScript

Armazenar, tratar e realizar operações com dados (aritmética, lógica e relacional)

### Aula 5 – Variáveis e Tipos Primitivos

#### Variáveis são como vagas de estacionamento

(A variável/vaga) **var** (de nome) **n1** (recebe) **=** **carro1**  
Também é possível utilizar **let** para declarar uma variável.

Obs.:

* **var** tem escopo de função, é bem abrangente.
* **let** tem escopo de bloco

Exemplos:

~~~javascript
var n1 = 5     // a variável n1 recebe 5 
var n2 = 8.5   
let n3 = 15    // a variável n3 recebe 15
var n1 = null  // a variável n1 se torna nula (sem nada, vazia)
~~~

As strings podem ser declaradas de 3 formas:

~~~javascript
var s1 = "JavaScript"
var s2 = 'Curso em Vídeo'
var s3 = `String`  
~~~

Acredito que a forma mais usual seja a de aspas duplas, mas quando devo utilizar cada uma delas?

[comentário]

Exemplo de utilização de variável junto com mensagem:

~~~javascript
var nome
nome = window.prompt('Qual o seu nome?')
window.alert('Olá, ' + nome + '! Seja bem vindo.')
~~~

#### Identificadores

* Começam com letra, $ ou _
* Não podem começar com número
* Não podem conter espaços
* Não podem ser palavras reservadas
* Pode usar letras e números
* Pode usar acentos e símbolos

#### Variáveis

* Maiúsculas e minúsculas são diferentes
* Servem para guardar dados

#### Tipos primitivos de dados (*typeof*)

* number (não diferencia inteiros e reais)
  * Infinity
  * NaN (Not a Number)
* strings (são cadeias de caracteres)
* boolean (true ou false)
* null (pertence ao *object*)
* undefined
* object
  * Array
* function

#### Questões que devo responder sobre Aula 05

1. O que é uma variável?  
2. Há diferença entre declarar um número inteiro ou real?  
3. Quais são os tipos primitivos de dados?
4. O que significa colocar o valor null dentro de uma variável?

---

### Aula 6 – Manipulação de dados

Aula focada na manipulação de *strings* e *numbers*.  

O sinal **+** é pode ser utilizado de das formas:  

* Adição (*Number*)
* Concatenação (*String*)

Portanto, é importante entendermos com quais tipos de dados estamos trabalhando e, quando necessário realizar conversões.

O código `window.prompt('pergunta?')`, por exemplo, sempre retorna uma *string*, por essa razão, é necessário (em alguns casos) converter para *number*. A seguir veremos como isso pode ser feito.

#### Conversões

As conversões podem ser feitas de  *string* para *number*:

~~~~JavaScript
// dada a variável n
var n = window.prompt('Cite um número primo?') // resposta: 7 (string)

// converter de string para número inteiro
Number.parseInt(n)

// converter de string para número real
Number.parseFloat(n)

// converter de string para número (geral)
Number(n)
~~~~

E de *number* para *string*:

~~~~JavaScript
// dada a variável n
var n = 5 // (number)

// converter de number para string
String(n)
n.toString(n)
~~~~

É possível ainda fazer a declaração da variável e convertê-la de uma só linha:

~~~~JavaScript
var n = Number(window.prompt('Cite um número primo?'))
~~~~

#### Aspas ou crases?

Há duas formas de se incluir variáveis no texto:

* Concatenação: é feito de forma usual, sendo o texto delimitado por aspas (simples ou duplas);
* *Template string*: o texto é delimitado por crases, e as variáveis aparecem entre ``${n}``.

Exemplo:

~~~~JavaScript
// declarando as variáveis
var nome = 'Micael'
var idade = 25

// usando concatenação usual
'O aluno ' + nome + ', de ' + idade + ' anos, é dedicado.'

// usando template string
`O aluno ${nome}, de ${idade} anos, é dedicado.`

'O aluno Micael, de 25 anos, é o dedicado.' // resultado para ambos os casos
~~~~

#### Tratamento de dados

Há situações onde precisamos colocar todas as letras em **maiúsculas**, **minúsculas** ou simplesmente **contar** o número de caracteres. Se estivermos tratando de dados numéricos, podemos necessitar **fixar** o número de casas decimais, **substituir** um ponto por vírgula (ou qualquer outra coisa), ou até mesmo **converter** o número para uma moeda específica.

A seguir serão apresentado alguns comandos e seus respectivos resultados, para isso assumiremos as seguintes variáveis:

~~~~JavaScript
var s1 = 'JavaScript'
var n1 = 1545.5
~~~~

Comando                | Descrição                  | Resultado
-----------------------|----------------------------|---------------
```s1.toUpperCase()``` | todas as letras maiúsculas | JAVASCRIPT
```s1.toLowerCase()``` | todas as letras minúsculas | javascript
```n1.toFixed(2)```    | fixa duas casas decimais   | 1545.50
```n1.toFixed(2).replace('.',',')```  | fixa duas casas decimais e substitui '.' por ','  | 1545,50
```n1.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})``` | aplica o formato de moeda real (BRL) | R$ 1545,50

#### Questões que devo responder sobre Aula 06

1. Como é possível guardar o valor digitado em um `prompt()` dentro de uma variável?
2. Como fazer que um número digitado em um `prompt()` possa ser utilizado em cálculos?
3. Como transformar um texto todo para letras maiúsculas?
4. Como mostrar um número formatado com valor monetário?

---

### Aula 7 – Operadores (Parte1)

#### Operadores

* Aritméticos
* Atribuição
* Relacionais
* Lógicos
* Ternários

#### Aritméticos

São binários, precisam de dois operadores para funcionar.

Operador | Descrição                | Exemplo
:-------:|--------------------------|---------
\+       | Soma                     | 5 + 2 = 7
\-       | Subtração                | 5 - 2 = 3
\*       | Multiplicação            | 5 * 2 = 10
/        | Divisão real             | 5 / 2 = 2.5
%        | Resto da divisão inteira | 5 % 2 = 1
**       | Potência                 | 5 ** 2 = 25

#### Precedência

Operador | Descrição
---------|----------
( )      | primeiro resolve o que estiver entre parênteses
\**      | depois os casos de potência
*, /, %  | o que vier primeiro entres eles
+, -     | o que vier primeiro entres eles

Exemplos:

~~~~JavaScript
var a = 5 + 3 // => 8
var b = a % 5 // => 3 (resto da divisão 8/5)
var c = 5 * b ** 2 // => 45 (resultado de 5 * (3 ** 2) = 5 * 9 = 45)
var d = 10 - a / 2 // => 6 (resultado de 10 - (8 / 2) = 10 - 4 = 6)
var e = 6 * 2 / d // => 2 (resultado de (6 * 2) / 6 = 12 / 6 = 2 )
var f = b % e + 4 / e // => 3 (resultado de (3 % 2) + (4 / e) = 1 + 2 = 3)
~~~~

#### Auto-atribuições

Partindo da atribuição simples `var n = 3`, temos:

Auto-atribuição | Simplificando | Resultado
:--------------:|:-------------:|:---------:
n = n + 4       | n += 4        | 7
n = n - 5       | n -= 5        | 2
n = n * 4       | n *= 4        | 8
n = n / 2       | n /= 2        | 4
n = n ** 2      | n **= 2       | 16
n = n % 5       | n %= 5        | 1

#### Operador Incremento

Partindo de, por exemplo, `var x = 5`, temos:

Operador | Descrição                            | Exemplo
---------|--------------------------------------|---------
x++      | Incremento: soma um ao seu operando  | `x = x + 1` => `x++` = `6`
x--      | Decremento: subtrai um do operando   | `x = x - 1` => `x--` = `5`

Há diferença no *retorno* ao utilizar o incremento pós-fixado (`x++`) ou prefixado (`++x`).  
Veja o exemplo a seguir (comandos utilizados no *Node.js*):

~~~~JavaScript
> var n = 10   // Aqui, a variável n foi declarada como 10
undefined      // Esse é o retorno padrão 
> var m = n++  // Ao utilizar do incremento pós-fixado...
undefined      // Esse é o retorno padrão
> m            // Repare que ainda não foi acrescido em +1 
10             // Este será o seu retorno imediato

> var n = 10   // Aqui, a variável n foi declarada como 10
undefined      // Esse é o retorno padrão 
> var m = ++n  // Ao utilizar do incremento prefixado...
undefined      // Esse é o retorno padrão
> m            // Repare que agora foi acrescido em +1 
11             // Este será o seu retorno imediato
~~~~

Podemos observar que o operador prefixado (`++n`) retorna o valor de seu operando após a adição, enquanto que o operador pós-fixado (`n++`), retorna o valor de seu operando antes da adição.

Quando devo usar o incremento pós-fixado ou o prefixado??

#### Questões que devo responder sobre Aula 07

1. Para que serve o operar `%` em JS?
2. A resposta de `6 + 4 / 2` é igual a 5 ou a 8?
3. Se uma variável `n` está valendo `10`, qual será o valor de `n += 5` ?
4. Para que servem os operadores `++` e `--`?

---

### Aula 8 – Operadores (Parte 2)

#### Relacionais

O resultado é sempre um valor booleano.

Operador | Descrição                     | Exemplo 1          | Exemplo 2
:-------:|-------------------------------|--------------------|-------------
\>       | Maior que                     | 5 > 2 = `true`     | 2 > 2 = `false`
<        | Menor que                     | 4 < 7 = `true`     | 6 < 3 = `false`
\>=      | Maior ou igual                | 8 >= 8 = `true`    | 7 >= 8 = `false`
\<=      | Menor ou igual                | 7 <= 9 = `true`    | 5 <= 4 = `false`
==       | Igualdade (desconsidera tipo) | 5 == 5 = `true`    | 5 == '5' = `true`
\===     | Idêntico (considera tipo)     | 7 === '7' = `false`| 7 === 7 = `true`
!=       | Diferente (desconsidera tipo) | 4 != 3 = `true`    | 4 != '4' = `false`
\!==     | Diferente (considera tipo)    | 7 !== '7' = `true`| 7 !== 7 = `false`

Repare que utilizamos `===` ou `!==`, há a distinção entre *number* e *string*.

#### Lógicos

Operador | Descrição
:-------:|---------------------------
\!       | Negação (não)
&&       | Conjunção (**e** lógico)  
\|\|     | Disjunção (**ou** lógico)

O operador `!` aceita dois possíveis resultados:

* `!true` --> retorna *false*;
* `!false` --> retorna *true*.

O operador de conjunção `&&` (*e*) aceita quatro possíveis resultados:

* `true && true` --> retorna *true*;
* `true && false` --> retorna *false*;
* `false && true` --> retorna *false*;
* `false && false` --> retorna *false*.

O operador de disjunção `||` (*ou*) aceita quatro possíveis resultados:

* `true || true` --> retorna *true*;
* `true || false` --> retorna *true*;
* `false || true` --> retorna *true*;
* `false || false` --> retorna *false*.

A ordem de precedência dos operadores é:

1. Aritméticos
    1. termos entre parênteses `( )`;
    2. potência (`**`);
    3. multiplicação (`*`), divisão (`/`) ou resto da divisão (`%`);
    4. soma (`+`) ou subtração (`-`).
2. Relacionais (sem ordem de precedência entre eles)
3. Lógicos
    1. negação (`!`);
    2. conjunção (`&&`);
    3. disjunção (`||`).

#### Ternário

Esse operador tem a seguinte configuração:

teste **?** `true` **:** `false`

Veja o exemplo a seguir:

Uma vez declarada a variável `media` e lhe atribuído um valor, temos a questão:  

~~~~JavaScript
media >= 7 ? 'Aprovado' : 'Reprovado'
~~~~

O valor da variável `media` é maior ou igual a 7?  
Se a resposta for *true*, resultado é `'Aprovado'`, se for *false*, o resultado será `'Reprovado'`.

Declarada a variável `x` que recebe 8...

~~~~JavaScript
var x = 8
var res = x % 2 == 0 ? 5 : 9
~~~~

A variável `res` pode receber **5** se `x % 2 == 0` for *true* ou **9** se for *false*.  
Sendo `x = 8`, temos que `8 % 2 == 0` (*true*), pois a divisão não tem resto.  
Logo: `res = 9`.

Mais exemplos:

~~~~JavaScript
idade >= 15 && idade <= 17     // a idade está entre 15 e 17?
estado = 'RJ' || estado = 'SP' // o estado é RJ ou SP?
salário > 1500 && sexo != 'M'  // o salário é maior que 1500 e não é homem?
~~~~

#### Questões que devo responder sobre Aula 08

1. Qual é a diferença entre usar `=`, `==` e `===` em códigos escritos em JS?
2. Em uma mesma expressão eu tenho os operadores `||` e `&&`, quem eu resolvo primeiro?
3. Sabe usar o operador ternário para colocar um entre dois valores em uma variável?

---

## Módulo C: Entendendo o DOM

### Aula 9 – Introdução ao DOM

*Document Object Model*: Vertente Web do JS para qual a linguagem foi criada.
O DOM é um conjunto de objetos dentro do navegador que vai dar acesso aos componentes internos do seu website.

#### Árvore DOM

Exemplo dela, com os *parents* e *children*:

* window
  * location
  * document
  * history
    * html
      * head
        * meta
        * title
      * body
        * h1
        * p
          * strong
        * div

#### Métodos de acesso

* por Marca `getElementsByTagName()`
* por ID `getElementById()`
* por Nome `getElementsByName()`
* por Classe `getElementsByClassName()`
* por Seletor (CSS) `querySelector()` ou `querySelectorAll()`

Obs.: Toda `id` é representada por `#`, enquanto que `class` é representado por `.`.  
Exemplo:

~~~~HTML
<h1>Iniciando estudos com DOM</h1>
<p>Aqui vai o resultado</p>
<div id ="msg">Clique aqui</div>
<script>
    var d = window.document.querySelector('div#msg') // hashtag
    d.style.background = 'blue'
</script>
~~~~

#### Questões que devo responder sobre Aula 09

1. O que significa DOM?
2. Sabe montar a árvore DOM de um website simples?
3. O que são elementos *Parent* e elementos *Child* em uma árvore DOM?
4. Quais são os  cinco principais métodos de selecionar elementos DOM dentro do JS?

---

### Aula 10 – Eventos DOM

Evento é tudo aquilo que pode acontecer com a `<DIV>` (do exemplo atual), ou com qualquer outro elemento.

Exemplos:

* `mouseenter`: quando o cursor do mouse entra na área da `<DIV>`;
* `mousemove`: enquanto o cursor se move sobre a área da `<DIV>`;
* `mousedown`: quando ocorre o click mantendo pressionado o botão mouse1;
* `mouseup`: quando, após o *mousedown*, solta-se o botão mouse1;
* `click`: click comum, apertar é soltar rapidamente o mouse1;
* `mouseout`: quando o cursor do mouse deixa a área da `<DIV>`.  

Ver mais em: [Event reference | MDN](https://developer.mozilla.org/pt-BR/docs/Web/Events).

#### Função

É um conjunto de códigos (linhas) que vão ser executadas só quando o evento ocorrer. Elas são agrupadas em blocos, delimitado por chaves `{}`, dessa forma:

~~~~JavaScript
function ação(param) {

}
~~~~

Dado um `<DIV>` em HTML:

~~~~HTML
<div id="area">
    Interaja...
</div>
~~~~

Podemos criar funções:

~~~~JavaScript
var area = window.document.querySelector('div#area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar() {
    area.innerText = 'Clicou!'
    area.style.background = 'rgb(233, 35, 35)'
}
function entrar() {
    area.innerText = 'Entrou...'
    area.style.background = 'rgb(233, 226, 35)'
}
function sair() {
    area.innerText = 'Saiu.'
    area.style.background = 'rgb(5, 164, 5)'
}
~~~~

Caso haja algum erro no código, a melhor forma de descobrir onde ele está é pedir para **inspecionar** a página no navegador e observar no **console** em que linha ocorreu o erro.

Exemplo de erro no console:

~~~~JavaScript
ex006.html:25 Uncaught ReferenceError: indow is not defined
    at ex006.html:25:20
~~~~

Nesse caso, o erro está na linha 25.

#### Questões que devo responder sobre Aula 10

1. Consegue citar três eventos que podem acontecer com elementos DOM de um site?
2. O que é uma função? COmo criar funções em JS?
3. Como pegar os valores de caixas de texto e fazer cálculos com eles?

---

## Módulo D: Condições em JavaScript

Condições simples (*if*), compostas (*if* e *else*), aninhadas (*else if*) e múltiplas (*switch..case*).

### Aula 11 – Condições (Parte 1)

#### Sequências

Exemplos de comandos que não posso mudar a ordem:

~~~~JavaScript
// ponto inicial
var n = 3
n += 2
window.alert(n)
// ponto final
~~~~

#### Condições

Se tornam necessárias quando há mais uma possibilidade.  
O que fazer quando acontecer *a*? e quando acontecer *b*?

#### Condição Simples (*if*)

Se a `condição_a` não for atendida, nada vai acontecer:

~~~~JavaScript
if (condição_a) {
  true
}
~~~~

#### Condição Composta (*if* e *else*)

Se a `condição_a` não for atendida, tem outra possibilidade:

~~~~JavaScript
if (condição_a) {
  true
} else {
  false
}
~~~~

#### Questões que devo responder sobre Aula 11

1. Como usar a extensão **Node Exec** no VSCode?
2. Como criar uma condição em seu programa JS?
3. O que difere a condição simples e das compostas?

---

### Aula 12 – Condições (Parte 2)

#### Aninhadas (*else if*)

São condições compostas com outras condições dentro dela.  
Se a `condição_a` não for atendida...

~~~~JavaScript
if (condição_a) {
  bloco_a
} else {
  if (condição_b) {
    bloco_b
  } else {
    bloco_c
  }
}
~~~~

Exemplo prático:

~~~~JavaScript
var horaAgora = new Date()
var hora = horaAgora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 6) {
    console.log('Boa madrugada.')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else if (hora <=23){
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada.')
}
~~~~

#### Múltiplas (*switch..case*)

Serve para valores fixos. Onde uma expressão testa vários valores fixos e retorna para o fluxo normal do programa.

~~~~JavaScript
switch (expressão) {
  case valor1:
    comandos para executar
    break
  case valor2:
    comandos para executar
    break
  case valor3:
    comandos para executar
    break
  default:
    comandos para executar
    break
}
~~~~

---

### Exercícios JavaScript (Parte 1)

#### Modelo

* body
  * header
    * título
  * section
    * div's
  * footer
    * copyright etc.

---

### Exercícios JavaScript (Parte 2)

Hora do dia.

![Figura 3: Script para dizer a hora do dia](.\img\time-day.png "hora_dia")

---

### Exercícios JavaScript (Parte 3)

Verificador de Idade.

![Figura 4: Script para verificar a idade e sexo](.\img\age-checker.png "verificador_idade")

#### Questões que devo responder sobre os exercícios (parte 1-3)

1. Como mudar a cor de fundo de um site **dinamicamente** usando JS?
2. Consegue inserir uma imagem dentro do seu site sem ter a tag `<img>` previamente criada?
3. Ja treinou o uso de condições simples, compostas, aninhadas e múltiplas?

---

## Módulo E: Repetições em JS

Repetições com teste no início (*while*), com teste no final (*do..while*) e com controle (*for*).

### Aula 13 – Repetições (Parte 1)

Laços ou Interações.

~~~~JavaScript
function comerPizza() {
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
}
~~~~

Sair do ponto **A** para chegar no ponto **B**, passando por repetições (*loops*), onde uma condição é testada e o laço acontece enquanto (*while*) a condição for verdadeira.

~~~~JavaScript
while (condição) {

}
~~~~

Exemplo da pizza:

~~~~JavaScript
function comerPizza() {
  while (temFatia()) {

  }
}
~~~~

Estrutura de repetição com teste lógico no início (*while*):

~~~~JavaScript
var c = 1
while (c <= 3) {
    console.log(`Passo ${c}`)
    c++ // c = c + 1    
}
~~~~

Estrutura de repetição com teste lógico no final (*do* com *while*):

~~~~JavaScript
var c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 3)
~~~~

#### Questões que devo responder sobre Aula 13

1. Como fazer uma determinada atividade acontecer **várias vezes**?
2. Quais as diferenças entre as estruturas de **condição** e as de **repetição**?
3. Qual a diferença entre estruturas *while* e *do..while*?

---

### Aula 14 – Repetições (Parte 2)

Estrutura de repetição com variável de controle (*for*):

~~~~JavaScript
for (inicio ; teste ; incr) { // Inicialização, teste lógico e incremento

}
~~~~

Exemplo sem *for*:

~~~~JavaScript
var c = 1;
while (c <= 10) {

  c++
}
~~~~

Exemplo com *for*:

~~~~JavaScript
for (var c = 1; c <= 10; c++) {
  
}
~~~~

#### Modo de Depuração (*Debugging*)

Para iniciar o depurador, basta ir em *Run* >> *Start Debugging* (ou apertar F5):  
Acessando a opção *Run and Debug* na barra lateral, é possível ver as variáveis, adicionar *breakpoints* e assistir itens específicos. Como ilustrado a seguir:

![Figura 5: Run e Debug](.\img\debugging.png "Debugging")

#### Questões que devo responder sobre Aula 14

1. Como usar a extensão Live Server no VS Code?
2. Como usar o Modo de Depuração do VS Code?
3. Foram realizados testes com as estruturas *while*, *do..while* e *for*?
4. Quer aprender mais como manipular dados em controles HTML com JS?

---

### Exercícios JavaScript (Parte 4)

Comentários sobre os exercícios que foram propostos:

#### Vamos Contar

Código com a opção de contar, sendo fornecido pelo usuário: início, fim e passo.

* Acrescentar botão **Contar** e mensagem: "Preparando a contagem...";
* Quando iniciar, mudar para "Contando:" e na linha seguinte a contagem com emojis;
* Se passo = 0, Passo inválido! Considerando Passo = 1 (usando `window.alert`);
* Se caixa vazia, mensagem: "Impossível contar".

Minha versão:

![Figura 6: Vamos Contar](.\img\let-s-count.png "counter")

#### Tabuada

Código com tabuada

* Caixa Número, botão "Gerar Tabuada"
* Considerar tabuada de 0 e de números negativos (inteiros);
* Se caixa vazia, `window.alert`: "Por favor, digite um número!"

Minha versão:

![Figura 7: Tabuada](.\img\multiplication-table2.png "tabuada")

---

### Exercícios JavaScript (Parte 5)

Resolução do exercício "Vamos Contar"

---

### Exercícios JavaScript (Parte 6)

Resolução do exercício "Tabuada"

#### Questões que devo responder sobre os exercícios (parte 4-6)

1. Treinou o uso das estruturas de repetição *while*, *do..while* e *for*?
2. Aprendeu a manipular objetos de formulários HTML usando JS?
3. É possível tornar seus códigos menores e mais simplificados?
4. Você acha que usar *array* é muito difícil?

---

## Módulo F: Avançando nos Estudos

### Aula 15 – Variáveis Compostas

Variáveis simples só conseguem armazenar um valor por vez, enquanto que as variáveis compostas devem ser capazes de armazenar vários valores em uma mesma estrutura, elas são as *arrays*.

Um *array* é uma variável que tem vários elementos, cada elemento é composto por seu valor e por uma chave de identificação.

Exemplo:

~~~~JavaScript
let num = [5, 8, 4]; // elementos representados por 0, 1, 2
console.log(num); // => [5, 8, 4]
~~~~

É possível acrescentar um novos termos:

~~~~JavaScript
console.log(num); // => [5, 8, 4]

num [3] = 6; // adicionando o número 6 na key 3
console.log(num); // => [5, 8, 4, 6]

num.push(7); // adicionando o número 7 na próxima key disponível
console.log(num); // => [5, 8, 4, 6, 7]
~~~~

Dá pra checar quantos elementos tem num *array* usando o comando `num.length`:

~~~~JavaScript
console.log(num); // => [5, 8, 4, 6, 7]
num.length; // => 5 (comprimento do array)
~~~~

É possível organizar os elementos em ordem crescente:

~~~~JavaScript
console.log(num); // => [5, 8, 4, 6, 7]
num.sort(); // ordena os elementos 

console.log(num); // => [4, 5, 6, 7, 8]
~~~~

Usando o *for..in*:

~~~~JavaScript
let num = [8, 1, 7, 4, 2, 9];
console.log(num);
console.log('');

for (let i in num) {
    // para cada posição (i) dentro de num...
    console.log(`A posição ${i} tem o valor ${num[i]}`);
}

/*
É o mesmo que fazer:
for (let i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`);

} 
*/
~~~~

O resultado será:

~~~~JavaScript
[ 8, 1, 7, 4, 2, 9 ]

A posição 0 tem o valor 8
A posição 1 tem o valor 1
A posição 2 tem o valor 7
A posição 3 tem o valor 4
A posição 4 tem o valor 2
A posição 5 tem o valor 9
~~~~

Usamos o `.indexOf()` para buscar valores num *array*:

~~~~JavaScript
let num = [8, 1, 7, 4, 2, 9];
console.log(num); // => [8, 1, 7, 4, 2, 9]

num.indexOf(7); // => 2 (retornou a key onde o valor 7 se encontra)
num.indexOf(3); // => -1 (o número pesquisado não está no array)
~~~~

#### Exemplos práticos

~~~~JavaScript
Welcome to Node.js v16.15.1.
Type ".help" for more information.
> var nomes = ['Joana', 'Maria', 'Lucas', 'Carlos']
undefined
> nomes
[ 'Joana', 'Maria', 'Lucas', 'Carlos' ]
> nomes.length // checar quantidade de elementos
4
> nomes.sort() // ordenar por ordem alfabética ou crescente (números)
[ 'Carlos', 'Joana', 'Lucas', 'Maria' ]
> nomes
[ 'Carlos', 'Joana', 'Lucas', 'Maria' ]
> nomes[0] // selecionar termo na posição 0 (1ª posição)
'Carlos'
> nomes.indexOf('Lucas') // buscar por termo e indicar sua posição
2
> nomes.push('José') // adicionar termo
5
> nomes
[ 'Carlos', 'Joana', 'Lucas', 'Maria', 'José' ]
~~~~

#### Questões que devo responder sobre Aula 15

1. Consegue simplificar seus códigos usando *arrays*?
2. Como ordenar um *array* usando uma chamada de função?
3. Como disparar uma função simples quando pressionada uma tecla?
4. Quer aprender mais sobre funções?

---

### Aula 16 – Funções

Funções são ações executadas assim que são *chamadas* ou em decorrência de algum *evento*.  
As funções podem receber parâmetros e retornar um resultado

~~~~JavaScript
function parOuImp(n){ // função com parâmetro formal
  // testando se um número é par ou ímpar
  if (n % 2 == 0) {
    return 'par';
  } else {
    return 'ímpar';
  }
}

let res = parOuImp(5); // chamada com parâmetro real
console.log(`O nº fornecido é ${res}.`); // => O nº fornecido é ímpar.
~~~~

#### Questões que devo responder sobre Aula 16

1. Aprendeu a usar direito a extensão do *Live Server*?
2. Aprender a usar o Modo de Depuração do VSCode?
3. Treinou o uso de *arrays* e *functions*?

---

### Exercícios JavaScript (Parte 7 - 8)

#### Analisador de Números

Fornecer como entrada um **Número (entre 1 e 100)**: [*caixa de número*] [**Adicionar**];

Array com os valores apresentados num *Select*:

* Valor x adicionado.
* Valor y adicionado.  
* Valor z adicionado.

Após adicionar os dados... [**Finalizar**];

* O maior valor informado foi y.  
* O menor valor informado foi x.  
* Somados todos os valores, temos c.  
* A média dos valores digitados é z.

Observações:

* Se caixa vazia + Adicionar = `window.alert('Valor inválido ou já encontrado na lista')`;  
* Se lista vazia + Finalizar = `window.alert('Adicione valores antes de finalizar!')`.

Minha versão:

![Figura 8: Analisador de Números](.\img\number-analyzer.png "analisador de números")

#### Questões que devo responder sobre os exercícios (parte 7-8)

1. Você assistiu o curso completo?
2. Fez todos os exercícios propostos?
3. Tentou fazer os exercícios sem a ajuda do vídeo?
4. Criou uma situação qualquer e tentou resolver por conta própria?

---

### Aula 17 – Próximos Passos

#### O que vimos até aqui

* fundamentos da linguagem
* variáveis e dados
* operadores
* condições
* repetições
* arrays
* functions
* DOM

#### Quais são os próximos passos?

Fazer os Cursos de HTML5 e CSS!

Ainda sobre JavaScript...

* functions
  * arrow functions
  * callbacks
  * funções anônimas
  * IIFE
* objetos
* modularização (código em arquivos separados)
* RegEx (expressões regulares)
* JSON
* AJAX
* NodeJS (rodar scripts no servidor)
* Bibliotecas e Frameworks
  * jQery
  * Vue.js
  * Angular

#### Introdução a Objeto

Utilizamos chaves para declarar um objeto:

~~~~JavaScript
let amigo = {nome:'José', sexo:'M', peso:85.4, engordar(p){}}
~~~~

Dessa forma, podemos atribuir nomes para os termos, ao invés de ficarmos dependentes de posições, como é no caso dos *arrays*.  
Observe que declaramos *strings*, *numbers* e *functions*.

Um exemplo mais detalhado, incluindo testes de função:

~~~~JavaScript
let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar (p=0) {
        console.log('Engordou');
        this.peso += p;
    }
};

console.log('Antes de function engordar (com p = 0):'); // => Antes de function engordar (com p = 0):
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`); // => José pesa 85.4 Kg.

console.log('');
amigo.engordar(2);

console.log('Depois de function engordar (com p = 2):'); // => Depois de function engordar (com p = 2):
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`); // => José pesa 87.4 Kg.
~~~~

---

### Extra (Anotações diversas)

---

#### Entrada de dados com tecla Enter

Durante as aulas de DOM, aprendi chamar funções de diversas formas, sendo a mais usual a de apertar/clicar em um botão (criado através de um *input*) com o mouse:

~~~~JavaScript
<input type="button" value="OK" onclick="checkLoc()">
~~~~

 Porém, dada a  minha necessidade em chamar funções utilizando a tecla `Enter`, escrevi o seguinte código:

~~~~JavaScript
addEventListener('keypress', kpEvent);
        function kpEvent(e) {
            if (e.code == 'Enter' || e.code == 'NumpadEnter') {
                checkLoc();
            }
        }
~~~~

Um exemplo prático de sua aplicação pode ser encontrado no exercício `ex011b.html` da aula 11.

---

#### Foco na caixa após clicar no botão

Ao fornecer um dado numa caixa (*text field* etc.) e utilizar seu respectivo botão para chamar determinada função, podemos fazer com que o foco retorne para caixa sem precisar clicar nela.

No exemplo a seguir, (1) o usuário fornece um número (`input:number`) que será armazenado na variável `n`, em seguida, (2) a caixa numérica volta a ficar vazia (ao assumir seu valor `= ''`):

~~~~JavaScript
var n = window.document.querySelector('input#number').value;
window.document.querySelector('input#number').value = '';
~~~~

Utilizando o comando `.focus()`, o cursor retorna para caixa:

~~~~JavaScript
window.document.querySelector('input#number').focus();
~~~~

---

#### Menor e maior termo de um array

Inicialmente, achei que poderia ordenar um vetor usando o `.sort()` e apenas selecionar o primeiro termo como sendo o menor e o último como sendo o maior, mas acontece que esse ordenamento é alfanumérico (*String*). Exemplo:

~~~~JavaScript
var array = [5, 1, 10, 7]; 
array; //        => [ 5, 1, 10, 7 ]
array.sort(); // => [ 1, 10, 5, 7 ]
~~~~

No caso do exemplo acima, o valor selecionado como maior seria, erroneamente, o número 7. Para contornar esse problema, temos duas possíveis soluções.

1\. Podemos estabelecer um `for` para determinar quem é o maior e o menor:

Inicialmente, quando há apenas um valor no *array*, podemos assumir que o menor e o maior número são iguais e estão na posição 0, ou seja:

~~~~JavaScript
let highestValue = values[0];
let lowerValue = values[0];
~~~~

Em seguida, podemos usar o `for` para comparar um termo com o sucessor, fazendo isso para todas as posições (`pos`) no array (`values`) em questão:

~~~~JavaScript
array; // => [ 5, 1, 10, 7 ]
for (let pos in values) {
    if (values[pos] > highestValue) {
        highestValue = values[pos];
    }
    if (values[pos] < lowerValue) {
        lowerValue = values[pos];
    }
  }
~~~~

2\. Podemos usar a seguinte expressão:

~~~~JavaScript
vetor.sort((a,b) => a-b); // => [ 1, 5, 7, 10 ]
~~~~

---
