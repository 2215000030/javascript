// 1.Array.forEach method : it is basically used to do the work with every elements of Array.
// arr.forEach(function(item,index){
//     work
// })
// it does not return anything.
// let arr=["abhi","manyu","tomar"];
// let newarr=[];

// let returnValue=arr.forEach(print);
// function print(item,index){
    // console.log(`${item} + ${index} -->${arr[index]}`);
//     newarr.push(item+index);
// }

// console.log(newarr);
// console.log(returnValue);

// 2.Array.map:it accepts a callback function.
// it returns a new array of same size with new elements defined in function.
// let arr=[1,2,3,4,5,6,7];
// let newarr=arr.map(function(item,index){
//     return [item,index];
// })
// console.log(arr);
// console.log(newarr);
// 3.filter:it also accepts a callback function.
// it also return a new Array with truthy values.
// let arr=[1,2,3,4,5,6,7,8]
// let newarr=arr.filter(function(i){
//     return i>5;
// })
// console.log(arr);
// console.log(newarr);
// console.log(arr);
// let zeroArray=arr.fill(0,1,4);
// console.log(zeroArray);
// console.log(arr);
// 4.sort():sort the array by default on lexicographically order and u can give comparator as well for custom sorting .
// sorting takes place in same array means destructive.
// it returns refernece of new sorted array.
// let arr=[13,5,8,132,3,9,7];
// let newarr=arr.sort((a,b)=> a-b);
// console.log(arr);
// console.log(newarr);
