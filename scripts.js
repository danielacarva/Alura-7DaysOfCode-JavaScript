let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

function comparar(){

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
}

const nome = prompt("Qual o seu nome?");
const idade = Number(prompt("Quantos anos você tem?"));
const linguagem = prompt("Qual linguagem de programação você está estudando?");

const mensagem1 = alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);
console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

const pergunta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)

  resposta = "1";

  switch (resposta){

  case "1":
    console.log("Muito bom! Continue estudando e você terá muito sucesso");
    alert("Muito bom! Continue estudando e você terá muito sucesso!")
    break;
  case "2":
    console.log("Ahh que pena.. Já tentou aprender outras linguagens?");
    alert("Ahh que pena.. Já tentou aprender outras linguagens?")
  }
  
