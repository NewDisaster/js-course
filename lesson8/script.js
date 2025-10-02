// console.log('Привет из консоли!')

// const numberFromString = Number('100')
// const stringFromNumber = String(10)
// const booleanFromNull = Boolean(null)

// alert('Привет из alert')
// confirm('Подтверждение действия')

// const answer = prompt('Введите ответ:')

/*______________________________________________________*/


// function logHello() {
//     console.log('Привет!')
// }

// logHello()
// logHello()
// logHello() 
/*______________________________________________________*/


 
// function logMessage() {
//     const message = 'Привет'
//     console.log(message)
// }

// logMessage()
// console.log(`${message}, друг!  `)

// /*______________________________________________________*/

// const message = 'Глобальный привет!'

// function logMessage() {
//     const message = 'Локальный привет!'
//     console.log(message)

//     for (let i = 0; i < 3; i++) {
//         const message = `Итерация цикла ${i}`
//         console.log(message) 
//     }
// }

// logMessage()
// console.log(message) 
// /*______________________________________________________*/


// {
//     const number = 1
//     console.log(number)

//     {
//         const number = 2
//         console.log(number)

//         {
//             const number = 3
//             console.log(number)
//         }
//     }
// }

// console.log(number)

/*______________________________________________________*/

// function logMessage(message,count) {
//     for (let i = 0; i < count; i++) {
//         console.log(message)
//     }
// }

// logMessage('Привет', 3)
// logMessage('Пока', 2)

/*______________________________________________________*/
// const globalMessage = 'Привет'

// function logMessage(message = 'Мяу', count = 1) {
//    const messageFormatted = `(((${message})))`
    
//     for (let i = 0; i < count; i++) {
//         console.log(messageFormatted)
//     }
// }

// logMessage(undefined,3)
// console.log(globalMessage)

/*______________________________________________________*/

// function sumFiveNumbers(
//     num5,
//     num1 = 100,
//     num2 = 200,
//     num3 = 300,
//     num4 = 400,
// ){
//     const sum = num1 + num2 + num3 + num4 + num5

//     console.log(`Сумма чисел равна ${sum}`)
// }

// sumFiveNumbers(1000)

/*______________________________________________________*/
// function sum(a,b) {
//     return a + b

//     console.log('Привет')
//     console.log('Пока')
// }

// console.log(sum(100, 1))

/*______________________________________________________*/

// function getAgeType(age) {
//     if (typeof age !== 'number') {
//         return 'Возраст указан не корректно!'
//     }

//     if (age < 1 || age >= 125) {
//         return 'Такого возраста не может быть!'
//     }

//     if (age < 18) {
//         return 'Несовершеннолетний'
//     }

//     return 'Взрослый'
// }

// console.log(getAgeType('Не число'))
// console.log(getAgeType(126))
// console.log(getAgeType(17))
// console.log(getAgeType(27))
/*______________________________________________________*/

function getSecretMessage(name) {
    if (!name) return
    return `О, а я тебя знаю! Ты же тот самый ${name}?`
}

console.log(getSecretMessage('Макс'))

/*______________________________________________________*/