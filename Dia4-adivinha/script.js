//const num = Math.floor(Math.random()*(10-0+1)+0);
const num = "5";
const num2 = prompt("Digite um número de 0 a 10: ")

let i = 0;

while (i< 2){
if (num2 === num){
  alert("Parabéns, você acertou o número!")
} else {
  num2 = prompt("Hummm, não era esse o número. Tente novamente, digite um número de 0 a 10: ");
  i++;
}

}
