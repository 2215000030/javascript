
// Promises are introduced to tackle the problem of callback hell.
// let promise=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         // resolve("mja aa gya");
//         // resolve();   promise resukt will be undefined
//         reject("aisi taisi h gyi")
//     },2000)

// });
// promise.then(function(data){
//     console.log(data);},function(data){
//             // console.log(data);      .then ke andar first function for resolve and 2nd function for reject
//     })
// }).catch(function(err){
//     console.log(err);
// })
// console.log(promise);
// this is the syntax to work with promise 
// usually we did not create promise we basically handle the outcomes of promise.
// if a promise is resolve then it is worked by .then function
// if promise is reject then it is handled by .catch method.
// either a promise will be resolve or reject.

// .then and .catch method also returns a new promise.
// if you r returning a normal value from those function it will simply mean to resolve that promise with that value.
// it means if your catch method also runs without any error it will also resolve the current promise.
// if nothing is returned then by default resolved promise is returned with undefined valus.
// these are the ways to run catch method for a promise:
// 1.reject same promise 
// 2.throw an error
// 3.return a rejected promise i.e.  return Promise.reject(3). immediatly reject promise with the given value.
// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve(30)},3000);

// })
// promise.then((data)=>{
//     console.log(data);
//  Promise.reject("goo");    it will not call catch method because it returns nothing so by default it return undefined.
// })                         so it will be resolved with undefined value.
// .then((data)=>{
//     console.log(data);
//     return data;
// })                       // output is  hii 30 undefined mja aa gya

// .catch((data)=>{
//     console.log(data);
//     return data;
// })
// .then(()=>{
//     console.log('mja aa gya');
// })
// console.log('hii');


// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve(30)},3000);

// })
// promise.then((data)=>{
//     console.log(data);
//     
//  return Promise.reject("goo");
// })                                   here u r returning a new rejected promise so it will be call the catch method.
// .then((data)=>{
//     console.log(data);               Output :hii 30 goo mja aa gya
//     return data;
// })
// .catch((data)=>{
//     console.log(data);
//     return data;
// })
// .then(()=>{
//     console.log('mja aa gya');
// })
// console.log('hii');
// --------------

// let pr=new Promise(function(res,rej){

//     res(new Promise((res,rej)=>{
//         setTimeout(()=>res(40),5000)
//     }))
// })
// console.log(pr);

// in the above case the outer promise will not be settled until inner promise not get settled.
// in this case the outer promise follows or adopts inner promise state means 
// if inner promise get resolved with some value ,the outer promise also get resolved with same value.
// if inner promise get reject outer one will also reject with same value despite outer is written resolve.
// but listen
// if we r returning outerpromise with reject(innerPromise) it will not do according to above 
// it will suddenly get reject with inner promise whole object as value.
// please see below example.


// const innerPromise = new Promise((res, rej) => {
//   setTimeout(() => res("Inner resolved!"), 1000);
// });

// const outerPromise = new Promise((resolve, reject) => {
//   reject(innerPromise);
// });

// outerPromise
//   .then(value => console.log("Outer resolved:", value))
//   .catch(err => {
//     console.log("Outer rejected with:", err);
    
//     // Check if err is a promise
//     if (err instanceof Promise) {
//       err.then(val => console.log("Inner promise inside rejection resolved with:", val));
//     }
//   });

// let pr=new Promise((res,rej)=>{
//     res(67);
// })
// .catch((d)=>{
    // console.log(d);   // also work order does not matter in this case.
// })
// .then((d)=>{
//     console.log(d);
// })

// -----------Promises API--------
// 1.Promise.all(array of promise)---Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
// also a promise it gets resolved if all resolved and get resolved values for all promises and return in array.
// if any of promise get rejected it also get rejected with the first rejected promise.
// let promise1=Promise.resolve(20);
// let promise2=Promise.reject(200);
// let promise3=Promise.resolve(2000);
// Promise.all([promise1,promise2,promise3]).then((arrayOfValues)=>{
//     console.log(arrayOfValues);
// }).catch((err)=>{
//     console.log(err);
// })
// 2.Promise.any(array of promise)---The any function returns a promise that is fulfilled by the first given promise to be fulfilled,
//  or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. 
// It resolves all elements of the passed iterable to promises as it runs this algorithm.

//  let promise1=Promise.reject(20);
// let promise2=Promise.reject(200);
// let promise3=Promise.reject(2000);
// Promise.any([promise1,promise2,promise3]).catch((arrayOfValues)=>{
//     console.log(arrayOfValues);
// }).then((value)=>{
//     console.log(value);
// })

// 3.Promise.race()----Creates a Promise that is resolved or rejected when any of the provided Promises are resolved 
// or rejected.
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "one");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 100, "two");
// });

// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);
//   // Both resolve, but promise2 is faster
// }).catch((d)=>{
//   console.log(d);
// })
// Expected output: "two"
// 4.Promise.allSettled()----Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "foo"),
// );
// const promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result.status)),
// );

// Expected output:
// "fulfilled"
// "rejected"

