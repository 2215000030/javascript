// js is a weakly typed,dynamically typed,single threaded and synchronous programming language.
// single threaded means one statement executed at a time.
// synchronous means all tasks are done systematically line by line not skip any line of code to jump on another line.
// javascript waits for none.
// console.log("start");
// console.log("after 4 seconds"); runs simultaneously.
// console.log("ended");
// with the help of setTimeout function we can create delay in js
// it basically takes a callback function and 2nd argument is time in millisecond
// it will automatically call that callback function after the given time.
// setTimeout(()=>{
//     console.log("after 4 seconds");
// },4000);     this is the syntax of setTimeout.
// console.log("start");
// setTimeout(function xyz(){
//     console.log("after 4 seconds"); 
    //   when it waits for setTimeout then at that time it wwaits for none 
// and run the programme written below that.
// },4000); 
// console.log("ended");
// setTimeout is browser's method not Javascript.
// console is also browser property or object.
// due to browser we r able to access it.
// whenever setTimeout type things execute.browser basically stores that function with the timer in its localStorage.
// and after time expires it will send that callback function into a queue known as callback queue.
// and there is another thing event loop whose work is basically to check call stack weather it is empty or not if it is empty then it take function from callback queue and send it to callstack and callstack executes it.
// console.log("start");
// setTimeout(()=>{
//     console.log('after 2 sec');
// },2000)
// setTimeout(()=>{
//     console.log('after 4 sec');
// },4000)

// console.log("ended");


// console.log("start");
// setTimeout(()=>{
//     console.log('after 4 sec');
// },4000)
// setTimeout(()=>{
//     console.log('after 2 sec');
// },2000)

// console.log("ended");     same output as above

// console.log('start');
// setTimeout(()=>{
//     console.log('after 0 second');
// },0)
// console.log('ended');  it states that until callstack is not empty function will wait in callback queue.



