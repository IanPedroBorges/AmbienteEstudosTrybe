/* secao-3-1
var nota = 100;
if (nota >= 80){
    console.log('Parabéns, você faz parte do grupo de pessoas aprovadas')
}else if (nota < 80 && nota == 60){
    console.log('Você está na nossa lista de espera')
}else if (nota < 60){
    console.log('Infelizmente, você reprovou')
}
---------------------------------------------------

let currentHour = 22;
let message ='';
if (currentHour >= 22){
    message = 'Não deveriamos comer nada , é hora de dormir'
}else if (currentHour >= 18 && currentHour < 22){
    message = 'Rango da noite, vamos jantar :D'
}else if (currentHour >= 14 && currentHour < 18){
    message = 'Vamos fazer um bolo pro café da tarde?'
}else if (currentHour >= 11 && currentHour < 14){
    message = 'Hora do almoço!!!'
}else if (currentHour >= 4 && currentHour < 11){
    message = 'Hmmm, cheiro de café recém-passado'
}else if (currentHour >= 0 && currentHour < 4){
    message = 'Ta de madruga , vai dormir'
}
console.log(message)
-----------------------------------------------------

let weekDay = 'sabado';
if (weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira'){
    console.log('Oba, mais um dia de aprendizado na Trybe >:D')
}else if(weekDay == 'sabado' || weekDay == 'Domingo'){
    console.log('FINALMENTE, descanso merecido! UwU!')
}
----------------------------------------------------------------------

let status = 'Barabam'
switch (status) {
    case 'aprovada':
        console.log('Parabéns, você está no grupo de pessoas aprovadas!');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera;');
        break;
    case 'reprovada':
        console.log('Infelizmente, você reprovou');
        break;

    default:
        console.log('Informação Incorreta')
        break;
}
-------------------------------

let num1 = 500;
let num2 = 800;
let num3 = 1000;
if (num1 > num2 && num1 > num3){
    console.log(num1)
}else if (num2 > num1 && num2 > num3){
    console.log(num2)
}else if (num3 > num1 && num3 > num2){
    console.log(num3)
}
---------------------------

let num = -5;
if (num > 0){
    console.log('Positivo')
}else if (num == 0){
    console.log('zero')
}else if (num < 0){
    console.log('Negativo')
}
----------------------------

let key = 'cavalo';
switch (key) {
    case 'peão':
        console.log('Somente pra uma casa a frente')
        break;
    case 'cavalo':
        console.log('Move em L');
        break;
    case 'torre':
        console.log('Move todas as casas pra frente pro lado ou pra tras');
        break
    case 'bispo':
        console.log('Move pelas diagonais');
        break;
    case 'dama':
        console.log('Move tanto pelas diagonais como pra frente lado e tras');
        break
    case 'rei':
        console.log('Move nas casas adjacentes')
        break
}
----------------------

let salario = 2700;
let inss ;
if(salario >= 1556.94){
    inss = salario * 0.08;
}else if (salario >= 1556.95 && salario <= 2594.92){
    inss = salario * 0.09;
}else if (salario >= 2594.93 && salario <= 5189.82){
    inss = salario * 0.11;
}else if (salario > 5189.82){
    inss = 570.88;
}

let salarioInss = salario - inss;
let ir ;

if(salarioInss <= 1903.98){
    ir = 0;
}else if (salarioInss >= 1903.98 && salarioInss <= 2826.65){
    ir = salarioInss * 0.075 - 142,80;
}else if (salarioInss >= 2826.66 && salarioInss <= 3751.05){
    ir = salarioInss * 0.15 - 354.80;
}else if (salarioInss >= 3751.06 && salarioInss <= 4664.68){
    ir = salarioInss * 0.225 - 636.13;
}else if (salarioInss > 4664.68){
    ir = salarioInss * 0.275 - 869.36;
}
let valorLiquido = salarioInss - ir;
console.log(valorLiquido)

seção 3-2



let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for(let i = 0; i < groceryList.length; i += 1){
    console.log(groceryList[i])
}

------------------------------------


let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (const name of names) {
    console.log(name)
}

--------------------------------------



let dado1 = Math.ceil(Math.random() * 6);
console.log('resultado dado 1:', dado1);
let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6);
  console.log('resultado dado 2:', dado2);
}

---------------------------------------------------


//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('valor menor que 16');
}

---------------------------------------------



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let divisor = 0;

for(let i = 0; i < numbers.length; i += 1){
    divisor += 1;
    soma = soma + numbers[i];
}
let mediaAritmetica = soma / divisor;
console.log(mediaAritmetica)

if(mediaAritmetica > 20){
    console.log('Valor maior que 20')
}else {
    console.log('Valor menor ou igual a 20')
}
------------------------------------

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let num = 0;
let maior = 0;
for(let i = 0; i < numbers.length; i += 1){
    num = numbers[i];
    if(maior < num){
        maior = num;
    }
}
console.log(maior)

--------------------------


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let num = 0;
for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] % 2 !== 0){
        num += 1;
    }else if (num === 0){
        console.log('Nenhum valor impar encontrado')
    }
}
console.log(num)
---------------------

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let num = 0;
let menor = 1000000;
for(let i = 0; i < numbers.length; i += 1){
    num = numbers[i];
    if(menor > num){
        menor = num;
    }
}
console.log(menor)
---------------------------


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i = 0; i < numbers.length; i += 1){
    console.log(numbers[i] /2);
}
--------------------------------------

let number = 10;
let total = 0;
for(let i = 9; i > 0; i -= 1){
    total = number * i;
    console.log(number + ' = ' + number + 'x' + i + ' = ' + total)
}
----------------------------------------



let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0]
let menor = array[0]
for(let i = 1 ; i < array.length; i += 1){
    if(array[i].length > maior.length){
      maior = array[i]  
    }
}

for(let index = 1; index < array.length; index += 1){
    if(array[index].length < menor.length){
        menor = array[index]
    }
}
console.log(maior)
console.log(menor)
--------------------------


function adicionaSaldo(dindin){
return dindin + 500;
}
console.log(adicionaSaldo(1000));

function subtrairSaldo(dindin){
    return dindin - 500;
}
console.log(subtrairSaldo(1000))

function multiplicaSaldo(dindin){
    return dindin * 3;
}
console.log(multiplicaSaldo(1000))

function dividirSaldo(dindin){
    return dindin / 3;
}
console.log(dividirSaldo(1000))

-------------------------------


let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaClientes(cliente){
    if(typeof cliente === 'string'){
        clientesTrybeBank.push(cliente)
    }else {
        return 'nome nao é uma string'
    }
}
adicionaClientes('Ian')
console.log (clientesTrybeBank)
function removerCliente()
-----------------------
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}
player['fullName'] = player.name + ' ' + player.lastName;
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos , e ganhou ' + player.medals.golden + ' medalhas de ouro, e '  + player.medals.silver + ' medalhas de prata.');
console.log(player.bestInTheWorld)
*/

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for (const key in names) {
    console.log('Olá, ' + names[key])
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (const key in car) {
    console.log(key, car[key])
  }