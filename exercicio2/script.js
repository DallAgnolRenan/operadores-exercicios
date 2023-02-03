
let numero1 = Number(prompt('Escreva um número'))
let numero2 = Number(prompt('Escreva outro número'))

let op1 = numero1 > numero2
let op2 = numero1 === numero2
let op3 = numero1 % numero2 === 0
let op4 = numero2 % numero1 === 0

console.log (`Primeiro número é maior que o segundo?: ${op1}`)
console.log (`O primeiro numero é igual ao segundo: ${op2}`)
console.log (`O primeiro numero é divisível pelo segundo?: ${op3}`)
console.log (`O segundo numero é divisível pelo primeiro?: ${op4}`)