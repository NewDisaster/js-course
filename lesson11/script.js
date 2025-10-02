/*__________________________________________________________*/
//JavaScript объекты — сравнение, копирование, объединение, деструктуризация, остаточные параметры.



/*__________________________________________________________*/


// const obj1 = {age: 10}
// const obj2 = {age: 10}

// console.log(obj1 === obj2)

//Объект это ссылочный тип данных (хранится в памяти.)
//JS хранит не примитивные значения(например объекты) по ссылке
//на место в памяти.

/*__________________________________________________________*/


// const obj1 = {name: 'Макс'}
// const obj2 = obj1

// obj2.name = 'Точно Макс?'

// console.log(obj2.name)

/*__________________________________________________________*/
//areObjectsEqual - выполняет поверхностное сравнение. 
//Если внутри объектов будут объекты, она не сможет их сравнить
//Для глубокого сравнения нужно применять рекурсию



//  const obj1 = {
//     name: 'Макс',
//     age: 27
// }
// const obj2 = {
//     name: 'Макс',
//     age: 27,
// }

// const areObjectsEqual = (object1, object2) => {
//     const keys1 = Object.keys(object1)
//     const keys2 = Object.keys(object2)

//     if (keys1.length !== keys2.length) {
//         return false
//     }

//     for (const key in object1) {
//         if (object1[key] !== object2[key]){
//             return false
//         }
//     }
//     return true

// }

// console.log(`Равны ли обекты obj1 и obj2: ${areObjectsEqual(obj1, obj2)}`)

/*__________________________________________________________*/
//Вариант с рекурсией и глубоким сравнением


// const obj1 = {
//     name: 'Макс',
//     age: 27,
//     address: {
//         city: 'Москва',
//         zipcode: '123456',
//     }
// }
// const obj2 = {
//     name: 'Макс',
//     age: 27,
//     address: {
//         city: 'Москва',
//         zipcode: '123456',
//     }
// }

// const areObjectsEqual = (object1, object2) => {
//     const keys1 = Object.keys(object1)
//     const keys2 = Object.keys(object2)

//     if (keys1.length !== keys2.length) {
//         return false
//     }

//     for (const key in object1) {
//         const value1 = object1[key]
//         const value2 = object2[key]
//         const areValuesObjects = typeof value1 === 'object' && typeof value2 === 'object'

//         if (areValuesObjects) {
//             return areObjectsEqual(value1, value2)
//         }
        
//         if (value1 !== value2){
//             return false
//         }
//     }
//     return true

// }

// console.log(`Равны ли обекты obj1 и obj2: ${areObjectsEqual(obj1, obj2)}`)

/*__________________________________________________________*/
//Клонирование объекта


// const obj1 = {name: 'Макс'} 
// const obj2 = Object.assign( {}, obj1)

// console.log('obj1', obj1)
// console.log('obj2', obj2)
/*__________________________________________________________*/
//Клонирование объекта


// const obj1 = {name: 'Макс'} 
// const obj2 = {... obj1}

// console.log('obj1', obj1)
// console.log('obj2', obj2)


/*__________________________________________________________*/
//Объединение объектов - поверхностное

// const obj1 = {name: 'Макс'}
// const obj2 = {age:27}

// const user = Object.assign({}, obj1, obj2)

// console.log('user:', user)



/*__________________________________________________________*/
//Объединение объектов - поверхностное
// const obj1 = {name: 'Макс'} 
// const obj2 = {age:27}


// const user = {...obj1, ...obj2}

// console.log('user:', user)

/*__________________________________________________________*/

// const obj1 = {name: 'Макс'}

// const obj2 = {
//     age:27,
//     address: {
//         city: 'Москва',
//     }
// }

// const obj3 = {
//     name: 'Максим',
//     isDeveloper: false,
//     address:{
//         zipcode: 123456,
//     }
// }

// const user = {...obj1, ...obj2, ...obj3}
// console.log('user', user)

//В этом примере address перезаписывается из obj3. 
//Чтобы записывался общий addres нужно костылить либо подключать библиотеки.

/*__________________________________________________________*/

// const user ={
//     name: 'Макс',
//     age: 28,
//     address: {
//         city: 'Москва',
//         zipcode: 123456,
//     }
// }

// console.log(user.address.city) //Вывести city


/*__________________________________________________________*/

// const user ={
//     name: 'Макс',
//     age: 28,
// }

// console.log(user.address?.city)  //Чтоб программа не падала


/*__________________________________________________________*/
//Деструктуризация объекта (деструктурирующее присваивание)

// const user = {
//     name: 'Макс',
//     age: 27,
//     isDeveloper: false,
// }

// const {name, age, isDeveloper} = user

// console.log('name:', name)
// console.log('age:', age)
// console.log('isDeveloper:', isDeveloper)
/*__________________________________________________________*/


// const logAddress = (city, street, houseNumber, apartmentNumber) => {
//     console.log(`
//         Адрес:
//         г. ${city}, ул. ${street},
//         д. ${houseNumber}, кв ${apartmentNumber}.
//         `)   
// }

// logAddress('Москва', 'Пушкина',21,35)
/*__________________________________________________________*/


// const logAddress = ({city, 
//                     street, 
//                     houseNumber, 
//                     apartmentNumber
//                 }) => {
//     console.log(`
//         Адрес:
//         г. ${city}, ул. ${street},
//         д. ${houseNumber}, кв ${apartmentNumber}.
//         `)   
// }

// logAddress({
//     city: 'Москва',
//     street: 'Пушкина',
//     houseNumber: 21,
//     apartmentNumber: 35,
// })

/*__________________________________________________________*/

// const user = {
//     name: 'Александр',
// }

// const admin = {
//     name: 'Boss'
// }

// const {name: userName} = user
// const {name: adminName} = admin
// console.log(`
//     userName: ${userName}
//     adminName: ${adminName}`)
/*__________________________________________________________*/

// const user1 = {
//     name: 'Макс',
//     age: 28,
//     city: 'Москва',
// }
// const user2 = {
//     name: 'Саня',
//     age: 5,
// }

// const {city = 'не указан'} = user2; //присвоение по умолчанию
// console.log(`Город: ${city}`)

/*__________________________________________________________*/

// const user = {
//     city: 'Москва'
// }
// const { city: userCity = 'Не указано'} = user
// console.log(userCity)


/*__________________________________________________________*/

const logUser = (user) => {
    const {name, age, city, ... otherInfo} = user

    console.log(`
        Имя: ${name}
        Возраст: ${age}
        Город: ${city}
        `)
        console.log(otherInfo)
}

logUser({
    name: 'Макс',
    age: 27,
    city: 'Дзержинск',
    company: 'Avito',
    jobPost: 'Tech-Support',
})


/*__________________________________________________________*/



/*__________________________________________________________*/



/*__________________________________________________________*/




/*__________________________________________________________*/




/*__________________________________________________________*/




/*__________________________________________________________*/



/*__________________________________________________________*/




/*__________________________________________________________*/




/*__________________________________________________________*/




/*__________________________________________________________*/



/*__________________________________________________________*/




/*__________________________________________________________*/




/*__________________________________________________________*/




/*__________________________________________________________*/



/*__________________________________________________________*/




/*__________________________________________________________*/




/*__________________________________________________________*/




/*__________________________________________________________*/



/*__________________________________________________________*/




/*__________________________________________________________*/




/*__________________________________________________________*/