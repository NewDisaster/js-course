//функции alert, prompt и confirm для взаимодействия с пользователем. Условия switch case.

// alert('Привет!')

// const message = 'Привет из message'
// alert(message)

// alert(1+2+3)

////////////////////////////////////////////////////
// const userAge = prompt('Сколько тебе лет?', 18)
// console.log(`Возраст: ${userAge}`)
// if (userAge >= 18){
//     console.log('Доступ разрешен')
// } else{
//     console.log('Доступ запрещен')
// }

//////////////////////////////////////////////////////
// const userAge = Number(prompt('Сколько тебе лет?'))

// if (userAge === 0){
//     console.log('Такого возраста не может быть!')
// }else {
//         console.log(`Твой возраст: ${userAge}`)
//     }
//////////////////////////////////////////////////////
// const isUserReady = confirm('Ты готов?')

// if (isUserReady){
//     console.log('Продолжаем продолжать!')
// }else {
//     console.log('Ладно, подождем')
// }



///////////////////////////////////////////
// const age =+prompt('Сколько тебе лет?')

// switch(age) {
//     case 0: {
//         console.log('Такого возраста не бывает!')
//         break
//     }

//     case 18: {
//         console.log('Покажи паспорт')
//         break
//     }
    
//     case 1000: {
//         console.log('=/')
//         break
//     }

//     default: {
//         console.log(`Твой возраст: ${age}`)
//     }
// }

//////////////////////////////////////////////
const age =+prompt('Сколько тебе лет?')
switch(true) {
    case age < 1: {
        console.log('Такого возраста не бывает!')
        break
    }

    case age === 18: {
        console.log('Покажи паспорт')
        break
    }
    
    case age > 125: {
        console.log('=/')
        break
    }

    case age >0 && age <= 125: {
        console.log(`Твой возраст: ${age}`)
        break
    }

    default: {
        console.log('Возраст введен не корректно')
    }
}