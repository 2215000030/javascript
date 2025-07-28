
// new keyword before the function call is creating this function as a constructor function.
// whose job is to creating new objects.
// function user(){
//     this.username="Abhimanyu Tomar",
//     this.password="abcde"

// }
// let user1=new user();
// console.log(user1); 
//  gives new object
// let user2=user();
//  console.log(user2);  gives undefined.
// user1.age=24; add age to object as key.
// console.log(user1);

// function User(name,pass){
//     this.username=name,
//     this.password=pass

// }
// let user1=new User("lafda",1234);
// console.log(user1);
// console.log(user1.__proto__===user.prototype); true
// console.log(user.prototype.__proto__===Object.prototype); true
// console.log(user.__proto__===Function.prototype);  true
// Convention(Optional but not compulsion) of constructor function.
// function name must be start with capital letter.
// Object.prototype.description=function(){
//     console.log("hii");
// }.                       as this is a common function and i want it to be accessed for every object 
                            // so i can put it in Object.prototype
// user1.description();

