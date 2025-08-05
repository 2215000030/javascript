const images=["image1","image2","image3"];
var i=0;
const image=document.querySelector('img');
setInterval(function(){
    i=(i+1)%images.length;
    image.setAttribute("src",images[i]);
},1000);