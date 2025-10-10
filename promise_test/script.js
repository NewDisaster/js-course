// console.log(1)

// const promise = new Promise(function (resolve, reject) {
//     console.log(resolve)
//     console.log(reject)
// })

// const myPromise = new Promise((resolve, reject) => {
//   const random = Math.random()
//   console.log(random)
//   if (random < 0.5){
//     reject('Не успех')
//   }
  
// });

// myPromise
// .then(result => {
//   console.log(result)
// })
// .catch(error => {
//     console.log(error)
// })
// const result = 'Успех'
// const error = 'Успех'

// console.log('result:', result)
// console.log('error:', error)

// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))

// console.log('middle')

// fn().then(res => {
//   console.log(res)
// })

// console.log('end')
//start middle 1  end success

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4);


// console.log('start');

// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });

// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)

// console.log('end');

//start  end  promise1 timer1 promise2 timer2


//+++++++++++++++++++++++++++++++++++++++++++++++//
async function hello() {
  return 'Привет';
}

hello().then(console.log); 
console.log('Пока?')