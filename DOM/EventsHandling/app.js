
// let but=document.querySelector("button");

// but.onclick=function(){
//     console.log("clicked");
// }
// but.onclick=one;
// but.onclick=two;  //upper one get override.

// function one(){
//     console.log("one");
// }
// function two(){
//     console.log("two");
// }
// but.onclick=function(){
//     one();             // both of them will call on one event.
//     two();
//     but.style.color="blue";
// } 
// but.onmouseleave=function(){
//     console.log("mouse leaved");
  //this has more priority then the inline handler.
// Note:: when we write inline event in html only then we have to call that function but when in js u only have to assign it.
// it will call by browser.

// but u r seeing the last one overrides the previous one .
// then event listeners come into pictures.
// because of following advantages.
        // Can handle multiple events	
        // Can remove listener
// let body=document.querySelector("body");
// but.addEventListener("click",function(){
//    document.body.style.backgroundColor="red";
// })

// ---------------input Events--------
    // let input=document.querySelector("input");
    // input.addEventListener("input",function(e){
    //     console.log(e);
    // })

    // TASK-what u write in input it must be shown on your h2;
    // let h2=document.querySelector("h2");
    // let input=document.querySelector("input");
    // // input.addEventListener("input",function(e){
    // //     h2.innerText=e.target.value;
    // // })
    // // input.addEventListener("keydown",function(e){
    // //     console.log(e.key);
    // // })
    // input.addEventListener("change",function(e){
    //         console.log(e);  //	User changes the value and blurs the input (loses focus)
    // })
    // input.addEventListener("focus",function(e){
    //     console.log(e);// when input is focused or clicked.
    // })
// difference betweeen change and blur is that blur triggers when input loses focus.
// while change happens when input loses focus and value also changes.if value is not changed and input loses focus then it will not triggered.

// ---------------form events-----
// it is the default behaviour of form that when submit button clicked it refresh the page.
// so to prevent that we use .preventDefault method so it does not get refresh when submitted.
// let form=document.querySelector("form");
// form.addEventListener("submit",function(e){
//   e.preventDefault();
//     console.log(e.target.elements[0].value);  //.elements shows all the fields inside the form.
// })
// setTimeout(function(){
//     document.body.style.backgroundColor="red";
// },3000);
