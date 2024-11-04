// nome

console.log('process.argv:', process.argv)

const args = process.argv.slice(2)

console.log('args: ', args)

const nome = args[0].split('=')[1]

console.log('nome:', nome)

const idade = args[1].split('=')[1]

console.log('idade:', idade)

console.log(`O nome dele é ${nome} e sua idade é ${idade}`)