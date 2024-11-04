import chalk from 'chalk'

const nota = 4

const resultado = nota >= 7 
  ? console.log(chalk.green.bold('Parabéns! Tu foi aprovado :)')) 
  : console.log(chalk.bgRed.black.bold('Parabéns! Tu foi reprovado :D'))

resultado