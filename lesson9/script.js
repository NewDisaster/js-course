/*________________________________________________ */

// console.log(sum(2, 3))

// function sum(a, b) {
//     return a + b
// }
/*________________________________________________ */

// function logMessage() {
//     console.log('Привет')
// }

// function logMessage() {
//     console.log('Пока!')
// }

// logMessage()

/*________________________________________________ */

// logMessage()

// function logMessage() {
//     console.log('Привет')
// }

// function logMessage() {
//     console.log('Пока!')
// }

/*________________________________________________ */

// function logAll() {
//     console.log(arguments)
// }

// logAll('Привет', 555, false)

/*________________________________________________ */

// const logHello = function() {
//     console.log('Привет!')
// }

// logHello( )

// Это называется function exprassion. 
// Такие функции нельзя переопределить (так как const)
// Вызов таких функций нельзя указывать до их объявления

/*________________________________________________ */

// const logHello = () =>{
//     console.log('Привет!')
// }
// Arrow function
//Так же нельзя вызывать до ее объявления
//Не имеют доступа к неявной переменной arguments 

/*________________________________________________ */

// const logSum = (a, b) => {
//     console.log(a + b)
// }

// logSum(1, 2)

/*________________________________________________ */

// const sum = (a, b) => a + b

// console.log(sum(2,3))

//Можно записывать в одну строку, тот же return
/*________________________________________________ */

// function fn1() {
//     return 'Я функция 1'
// }

// function fn2() {
//     return 'Я функция 2'
// }

// function fn3() {
//     return 'Я функция 3'
// }

// console.log(fn1)
// console.log(fn2)
// console.log(fn3)

// //Если вызывать без (), то будет показываться содержимое функций
/*________________________________________________ */

// function fn1() {
//      return 'Я функция 1'
//  }

//  fn2 = fn1

//  console.log(fn2())

/*________________________________________________ */
//Функции можно передавать в другие функции. 
// Такие функции называются callback

// const logMessage = (actionBefore, actionAfter) => {
//     actionBefore()
//     console.log('Привет!')
//     actionAfter()
// }

// const fn1 = () => console.log('before')
// const fn2 = () => console.log('after')

// logMessage(fn1, fn2)

// logMessage(
//     () => console.log('before'),
//     () => console.log('after')
// )

/*________________________________________________ */
//Функция может возвращать результатом другую функцию

const validate = (hasAccess) => {

    return hasAccess
        ? () => console.log('Доступ разрешен')
        : () => console.log('Доступ запрещен')
    
}

const logMessage = validate(true )
logMessage()