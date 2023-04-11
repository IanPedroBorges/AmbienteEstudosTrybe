const father = document.getElementById('pai');
let newBrother = document.createElement('section')
newBrother.innerHTML = 'eae'
father.appendChild(newBrother);
console.log(father);
const ondeEstou = document.getElementById('elementoOndeVoceEsta');
let newSon = document.createElement('section');
newSon.innerHTML = 'ola'
ondeEstou.appendChild(newSon);
const SonOfSon = document.getElementById('primeiroFilhoDoFilho');
let SonOfSonOfSon = document.createElement('section');
SonOfSonOfSon.innerHTML = 'opa';
SonOfSon.appendChild(SonOfSonOfSon);
const terceiroFilho = SonOfSonOfSon.parentNode.parentNode.nextSibling.nextSibling;
console.log(terceiroFilho)