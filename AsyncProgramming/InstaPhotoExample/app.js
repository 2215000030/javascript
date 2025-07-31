// This is method 1 it is better than method 2 written below because it does loose coupling
// in this method we use callback functions

// -----------Method 1----------
// function step1(fn){
//     setTimeout(()=>{
//         console.log(`photo select kr lia`);
//         // when step1 done then only step2 must be called. 
//         fn("selected photo");
//     },2000);

// }
// function step2(selectedPhoto,fn){
//     setTimeout(()=>{
//         console.log(`${selectedPhoto} pr filter applied`);
//         fn("filtered photo");
//     },4000);

// }
// function step3(filteredImage,fn){
//     setTimeout(()=>{
//         console.log(`${filteredImage} pr caption laga dia`);
//         fn("filtered and caption photo");
//     },3000);

// }
// function step4(finalimage){
//     setTimeout(()=>{
//         console.log(`${finalimage} uploaded`);
//     },2000);
// }
// step1(function(image){
//     step2(image,function(image){.        this thing is called callback hell.
//         step3(image,function(image){
//             step4(image)
//         })
//     })
// });
// CallbackHell:when your flow of code expand horizontally instead of vertically also known as pyramid of doom.
// it also create so much dependency step2 depends upon step1 etc..
// -----------------------
// this method will also done work but it is not recommended
// because it tightly binds step2 with step1 means always step1 will call step2
// but suppose if we want to upload photo with caption but without filter
// so it will not be achievable without modifying existing code.

// ------------Method 2---------


// function step1(){
//     setTimeout(()=>{
//         console.log(`photo select kr lia`);
//         // when step1 done then only step2 must be called. 
//         step2("selected photo");
//     },2000);

// }
// function step2(selectedPhoto){
//     setTimeout(()=>{
//         console.log(`${selectedPhoto} pr filter applied`);
//         step3("filtered photo");
//     },4000);

// }
// function step3(filteredImage){
//     setTimeout(()=>{
//         console.log(`${filteredImage} pr caption laga dia`);
//         step4("filtered and caption photo");
//     },3000);

// }
// function step4(finalimage){
//     setTimeout(()=>{
//         console.log(`${finalimage} uploaded`);
//     },2000);
// }
// step1();
// function a(fn,n){
//     console.log("hii a");
//        fn();
//        n();
//     console.log(fn);
// }
// function b(sum){         
//    example to show how to pass function inside argument to another function.
//     console.log("hii b",sum);
// }
// a(b,function(){
//     console.log("helllo");
// });

