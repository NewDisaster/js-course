console.log(2 ** 10) //Возведение в степень
console.log(13 % 5) //Остаток от деления
console.log(5 % 2) 

//Бинарный оператор - применяется к двум числам
//Унарный оператор - применяется к ондному числу

console.log(-10) //унарный оператор, пример
  
console.log(typeof +'123') // Эквивалентно console.log(typeof(Numner('123')))
console.log(+'3' + +'5') //Пример использования, унарные операторы отрабатывают раньше, чем бинарные.

let count = 1
count += 2 // Немножко синтаксического сахара 
console.log(count)

let message = 'Я не повторяю одно и то же дважды!'
message += message //Для строк так же работает 
console.log(message)

let count1 = 10
count1++
count1--   

 //Есть перфиксная и постфиксная запись - count++ и ++count

 console.log('а' < 'б')
 console.log('ы' > 'f')
 console.log('JavaScript' > 'Java')
 //Сравнивает по номеру в Unicode


 // JS в таком сравнении приводит типы к одному типу данных (это называется нестрогое сравнение)
 console.log(2 == '2')
 console.log('3' == 3)

 //Лучше проверять так - строгое сравнение
 console.log(2 === '2')
 console.log('3' === 3)