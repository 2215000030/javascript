
// await is only used inside async function.
// async function by default returns a promise .
// if u returned a normal valur from it it returns a resolved promise with that value.
// await promise -- at this line code stops until this line not completes.
// but behind the scenes js did not wait it basically when await encounters it pop that function from call stack and when promise settled that function again come into call stack and executes it.
// let p=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(20)
//     },5000);
// })
//  async function xyz(){
//      let ans=await p;  // here this whole above things happens.
//     console.log("promise done",ans);
//  }
//  xyz();

