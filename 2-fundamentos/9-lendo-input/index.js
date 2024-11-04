const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question('Qual a sua linguagem preferida?', (language) => {
  corretAnswer = language.toLowerCase() === 'java'
    ? console.log(`A minha linguagem preferida é: ${language}`)
    : console.log(`Tu é um jumento`)
  readline.close()
})