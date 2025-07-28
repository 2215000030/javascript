// if you try to access a property of a object then js firstly find it inside that object
// ,if not found then it will go to its prototype for check that property.
// Prototype:it is also another object which is used as a 
// fallback source of properties.
// __proto__:it is called dender proto used to check its prototype.
// let obj={a:4,b:6};
// console.log(obj.__proto__===Object.prototype);
// console.log(Object.prototype.__proto__); --->null
// Arrays behind the scene convering itself to an Object.
// that's why we r able to apply methods on array.
// console.log(obj.__proto__);
// console.log(obj.prototype); -->undefined
// console.log(Object.__proto__);
// console.log(Object.prototype);
// let arr=[1,2,3];
// console.log(arr.__proto__===Array.prototype);
// console.log(Array.prototype.__proto__===Object.prototype);
// function a(){
//     console.log("hii");
// }
// console.log(a.__proto__===Function.prototype);
// console.log(Function.prototype.__proto__); --> Object.prototype
// console.log(Array.__proto__===Function.prototype); true
// let z="Hello";
// console.log(z.__proto__===String.prototype); true
// console.log(String.prototype.__proto__===Object.prototype);  true
// console.log(String.__proto__===Function.prototype true);
// this is inheritance.
// everything inside js is an object.
