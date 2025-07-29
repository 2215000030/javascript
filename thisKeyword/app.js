// this points to what ,it is totally depend upon how it is being called 
// or how function calling or invocation happens.
// we will see all 5 cases of this
// 1. in case of regular function calling
// function fun(){
//     console.log(this); this points to window in case of direct regular function calling.
// }
// fun();
// 2.in case of method calling.
// let obj={
//     a:5,
//     fun:function(){
//         console.log(this);  this points to that object which contain that method in this case obj.

//     }
// }
// obj.fun();

// let obj={
//     a:5,
//     fun:function(){
//         console.log(this);  this points to window because of regular calling
//     }
// }
// let myfun=obj.fun;
// myfun();  here is regular calling.

// 3.in case of constructor calling.
// function Fun(){
//     this.a=9;  // points to newly ceated object
//     this.fn=function(){
//         console.log(this); // this points to newly created Object.
//     }
// }
// let a=new Fun();
// a.fun();
// 4.in case of call,apply,bind
// call--methodname.call(whose refernece,comma separated arguments which catches in form of variable in that function definition)
// apply--methodname.apply(whose refernece,comma separated arguments which catches in form of array in that function definition)
// bind--method.name.bind(which reference u want to bind with this)
// let obj1={
//     a:5,
//     fn:function(a,b){
//         console.log(this,a,b);
//     }
// }
// let obj2={
//     a:6
// }
// obj1.fn.call(obj2,1,2,3);  this refer to obj2 as i pass it in argument
// obj1.fn.apply(obj2,[1,2,3]); same
// let b=obj1.fn.bind(obj2);  this points to obj2
// b();
// 5.in case of arrow functions this points to its parent'this.
// let obj={
//     a:5,
//     fn:function(){
//         const b=()=>{
//             console.log(this);
//         }
//         b();
//     }
// }
// obj.fn();  this points to obj
// let c=obj.fn;  
// c();  this points to window
