const resposta1 = prompt("Você quer seguir para a área de FrontEnd ou BackEnd?")

  if (resposta1 == "FrontEnd"){
    prompt("Você quer aprender React ou Vue?")
  } else if (resposta1 == "BackEnd") {
    prompt("Você quer aprender C# ou Java?")
  } 
  
  const resposta2 = prompt("Você quer seguir se desenvolvendo na área escolhida ou se tornar FullStack? Responda - seguir - para se desenvolver na área ou - tornar - para se tornar FullStack")

  if (resposta2 == "seguir") {
    prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?")
  } else {
    alert("Ótima escolha! Continue estudando!")
  }

  const resposta3 = prompt("Tem mais alguma tecnologia que você gostaria de aprender?")
    alert(`A ${resposta3} é muito interessante!`)
  
  let resposta;
  while (resposta!== "não"){
    resposta = prompt("Mais alguma tecnologia que você gostaria de aprender? Se não tiver mais nenhuma, digite - não -.")
  }
    alert("Ok. Nos vemos em breve! Bons estudos!")
  
