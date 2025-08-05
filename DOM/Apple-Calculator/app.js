
let grays=document.querySelectorAll(".gray")
let result=document.querySelector("#result");
let sizes=document.querySelectorAll(".size");
// let zero=
for(let i=2;i<sizes.length-1;i++){
    let item=sizes[i];
    item.addEventListener("click",function(){
        result.innerText+=item.innerText;
    })
}
grays[0].addEventListener("click",function(){
        result.innerText="";
})
sizes[1].addEventListener("click",function(){
    result.innerText=result.innerText.substring(0,result.innerText.length-1);
})
sizes[sizes.length-1].addEventListener("click",function(){
    let ans=result.innerText;
    try{
    result.innerText=eval(ans);}
    catch(e){
        result.innerText="Invalid";
    }
    if(result.innerText.length>15){
        result.innerText=result.innerText.substring(0,15);
    }

})