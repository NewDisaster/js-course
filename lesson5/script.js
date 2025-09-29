//JavaScript условия if else. Тернарный оператор. Логические операторы. Оператор нулевого слияния.
const year = 2025

if (year === 2025){
    console.log('Ура!')
    console.log('Сейчас самое время, чтобы изучить JavaScript!')
}else if (year === 3000){
    console.log('Слишком поздно. Нейросеть заменила программистов.')
}
else {
    console.log('Неизвестный год =/')
}

//Тернарный оператор

const year1 = 2025
const message = year1 === 2025 ? 'Начинаем учиться' : 'Неизвестный год'
console.log(message)


//Еще пример

const year2 = 3000
const message2 = year2 ===2025
    ? 'Начинаю учиться'
    : year2 ===3000
    ? 'Нейросети победили'
    : 'Неизвестный год :/'
console.log(message2)

//Логически операторы || или

false || false //false
true || false //true
false || true //true
true || true //true
 
const age = 17
const withParent = true

if (age > 18 || withParent) {
    console.log('Проходите')
}else {
    console.log('Несовершеннолетним вход закрты')
}

const result = '' || false || null || undefined || 0 || 'Привет' || 'Пока' //Опертор вычисляет все операнды слева на право по порядку и приводит их 
                                                                           //к булевому типу данных. Если встречает true - выводит первое значение
console.log(result) 

//Оператор && и 

console.log(false && false) //false
console.log(true && false) //false
console.log(false && true) //false
console.log(true && true) // true

const age1  = 16
const isYoung = age < 18

isYoung && console.log('Покажите паспорт!') //Может так встречаться

// оператор ! не

console.log(!!0) // можно ! приводить к булевому типу
console.log(!!1)

//Оператор нулевого слияния ??

const a = 0
const b = 100

const result1 = a || b
const result2 = a ?? b

console.log(result1)
console.log(result2)