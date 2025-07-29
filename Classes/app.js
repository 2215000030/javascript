// classes are used after ES6
// its same as constructor function but it is a better way to achieve that.
// class Person{
//     constructor(name,age,email){
//         this.name=name;
//         this.age=age;
//         this.email=email;
//         console.log(this); //  points to that object who calls it
//     }
//     getInfo(){
//         console.log(`this is ${this.name} ${this.age} years old with email ${this.email}`);
//     }
// };
// let person1=new Person("lafda",23,"lafda@gmail.com");
// let person2=new Person();
// person1.getInfo();
// person2.getInfo();
// console.log(person1.__proto__===Person.prototype); true
// console.log(Person.prototype.__proto__);     Object.prototype
// class Student extends Person{
//     constructor(name,age,email,section){
//         super(name,age,email); // calls the parent class constructor
//         this.section=section;
//     }
// };
// let student1=new Student("dhairya",3,'dhairya@gmail.com','A');
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.email);
// console.log(student1.section);
// let student2=new Student();
// console.log(student2.name);
// console.log(student2.age);    undefined
// console.log(student2.email);
// console.log(student2.section);
// let person1=new Person("shaurya",13,'@gmail.com');
// console.log(person1.section); undefined
// we can override getinfo method as well.
// console.log(student1.__proto__===Student.prototype);  true
// console.log(Student.prototype.__proto__===Person.prototype); true
// console.log(Person.__proto__===Function.prototype); true
// console.log(Student.__proto__===Person);  true




