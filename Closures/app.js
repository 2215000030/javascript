// A function bundled together with reference to its surrounding or lexical environment called closures.
// function a(){
//     let ans=78;
//     function b(){
//         let ans2=90;
//         function c(){
//             console.log(ans2);
//             // console.log(ans);
//             // ans=88;
//             return ans;
//         }
//         return c;
//     }
//     return b;
// }
// let val=a();
// val()();


// -----------------
// real life usagse:make private variables like we do in classes and objects in oops.
// lets make a practical appplication counter.
// function counter(){
//     let count=0;
//     return {
//         getCount:function(){
//             return count;
//         },
//         increment:function(){
//             count++;
//         },
//          decrement:function(){
//             count--;
//         },
//         reset:function(){
//             count=0;
//         }

//     }
// }

// let counter1=counter();
// console.log(counter1.getCount());
// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// console.log(counter1.getCount());
// counter1.decrement();
// console.log(counter1.getCount());
// counter1.reset();
// console.log(counter1.getCount());
// let counter2=counter();
// console.log(counter2.getCount()); its count will be start from 0.

