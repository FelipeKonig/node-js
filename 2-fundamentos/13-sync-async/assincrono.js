const fs = require('fs')

console.log('inicio')

fs.writeFile('arquivo.txt', 'oi', (err) => {
  setTimeout(() => {
    console.log('arquivo criado!')
  }, 2000)
})

console.log('fim')