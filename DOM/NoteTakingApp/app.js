// let div=document.querySelector("div");
let ol=document.querySelector("ol");
let input=document.querySelector("input");
let btn=document.querySelector("button");

btn.addEventListener("click",function(e){
    // let h1=document.createElement("h1");
    // h1.innerText=`${div.children.length+1}. ${input.value}`;
    // input.value="";
    // div.appendChild(h1);
    // h1.addEventListener("click",function(){
    //     h1.remove();
    //     for(let item=0;item<div.children.length;item++){
    //         let oldContent=div.children[item].textContent;
    //            div.children[item].textContent=`${item+1}. ${oldContent.substring(oldContent.indexOf(".")+2)}`
    //     }
    // })
    let li=document.createElement("li");
    li.innerText=input.value;
    input.value="";
    ol.appendChild(li);
    li.addEventListener("click",(()=>{
        li.remove();
    }))
})

// these both are methods.

