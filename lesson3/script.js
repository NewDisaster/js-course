const greeting = 'Привет'
const name = 'Макс'
const goodbye = `Пока`

let message = `${greeting}, ${name}!`

console.log(message)

message = `${name}, ${goodbye}!`

console.log(message)

const number = 1_000_000 //Эквивалентно 1000000, просто для удобства чтения
console.log(number);

console.log(9900000000000091n + 1n) //сложение Big  int. Складывется только типы Big int, обычные числа к ним прибавить не получится.
console.log(9900000000000091n + 2n)

//Явное преобразование типов

const age = '11'

console.log(age)
console.log(Number(age))

const isAdult = true


console.log(isAdult)
console.log(Number(isAdult))


//Объекты не преобразовываются
const obj = {}

console.log(String(obj))

//ПРЕОБРАЗОВАНИЕ В БУЛЕВЫЙ ТИП ДАННЫХ

console.log(Boolean(-1))
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(2))

console.log(Boolean('Привет!'))
console.log(Boolean('0'))
console.log(Boolean(' '))
console.log(Boolean(''))