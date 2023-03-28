/*
var nota = 100;
if (nota >= 80){
    console.log('Parabéns, você faz parte do grupo de pessoas aprovadas')
}else if (nota < 80 && nota == 60){
    console.log('Você está na nossa lista de espera')
}else if (nota < 60){
    console.log('Infelizmente, você reprovou')
}*/

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