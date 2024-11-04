const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log('args:', args)

const nome = args['nome']
const profissao = args['profissao']

console.log('nome:', nome)
console.log('profissao:', profissao)

console.log(`O nome dele é ${nome} e a profissao dele é ${profissao}`)