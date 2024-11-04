 // mais de um valor 
 const x = 10
 const y = 'felipe'
 const z = [1,2]

 console.log(x,y,z)

 // contagem de impressões

 console.count(`o valor de x é: ${x}, contagem`)
 console.count(`o valor de x é: ${x}, contagem`)
 console.count(`o valor de x é: ${x}, contagem`)
 console.count(`o valor de x é: ${x}, contagem`)

 // variável entre string
 console.log('o nome é %s e ele é dev', y)

 setTimeout(() => {
   console.clear()
 }, 2000)