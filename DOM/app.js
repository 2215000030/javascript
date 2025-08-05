// DOM stands for Document Object Model.
// Document is our html file.
// browser wrap up whole html file inside an object named Document.
// so with the help of DOM we can manipulate our html,style part using js.
// so with the help of js we can play with our DOM tree.
// now to play with DOM tree we must learn to select Those elements which we want to manipulate.
// there are 5 ways to do this:
// 1.getElementbyId-->it returns a single element.if mutiple exists it returns first one.
// document.getElementById
// 2.getElementByTagName--->it returns a HTML Collection like an array which contains all those elements.
// document.getElementsByTagName
// remember it is ArrayLike but not a real array so we can't push or pop and can't apply for each method on this.
// 3.getElementByClass--->it returns a NodeList same as array.
// document.getElementsByClassName
// 4.querySelector()-->it return a single element.
// inside argument u can give tagname,id,classname.
// document.querySelector
// 5.querySelectorAll-->it returns Nodelist of all items.
// document.querySelectorAll
// let p=document.querySelector('p');
// p.style.color="orange";
// console.log(p.innerText); considers css as well keep in mind all hidden text
// console.log(p.textContent); does not consider css also reads hidden texts
// console.log(p.innerHTML);    // hi my name is abhimanyu tomar <span style="display: none;">thakur</span> it gives this output all about that tag
// p.innerHTML='hii friend <i style="color: blue;"> Abhimanyu </i>'
// console.log(p.innerHTML);
// console.log(p);
// Attributes are the additional information about the tag etc..
// like for anchor tag href is a attribute,class is a attribute..
// we can get Attribute by a.getAttribute
// we can also set Attribute by a.setAttribute.
// we made a carousel.

// let arr=[1,2,3,4];
// console.log(arr.includes(1));
// console.log(arr.at(2));
// console.log(arr.concat(5,6,7));
// let ans=arr.reduce(function(acc,item,idx){
//         return acc+=item;
// },0);
// console.log(ans);
// let ans=arr.slice(2,3);
// console.log(ans,arr);
// let ans2=arr.splice(1,2,5,6,7);
// console.log(ans2,arr);
// console.log(arr.slice(1,4,5,6,7,8)); not do that of splice


// with the help of setAttribute we can add multiple classes by spaces.

// let p=document.querySelector('p');
// let span=document.querySelector('span');
// p.setAttribute("class","abhi tomar"); but if we want to add one more class then we have to remember all previous classes.
// so we have a method or property classList in which we can add,remove,toggle,contains.
// p.classList.add("abhi","tomar");
// span.classList.add("abhi","tomar")
// p.classList.remove("abhi") can remove multiple as well.
// p.classList.toggle("abhi")  //if already added then remove 
// p.classList.toggle("abhi");  // if already remove then add means toggle the current
// console.log(p.classList.contains("abhi"));

// ---------------------------
// now we will see how to iterate over our dom tree.
// let div=document.querySelector("#div");
// let para=document.querySelector("#para");
// let h1=document.querySelector("h1");
// // 1.parent
// console.log(h1.parentElement);;
// 2.children
// console.log(div.children);
// console.log(div.firstElementChild);
// 3.sibling
// console.log(h1.nextElementSibling);  //iske right waala
// console.log(para.nextElementSibling);  //null for right most
// console.log(para.previousElementSibling);  //iske left waala

// now we will see about how to add elements with the help of dom.

// let div=document.querySelector("#div");
// let newh1=document.createElement("h1");
// let newpara=document.createElement("p");
// newh1.innerText="I know Javascript";
// newpara.innerText="master of javascript";

// div.appendChild(newh1,); // it will append at the last only single argument required other will be ignored.
                        // we can't give text as argument only html element required.

// div.append(newh1,newpara,"also know java");  //can append multiple elements at a time.
                            //can also give text.

// we can also add at start of parent.
// div.prepend(newh1,newpara,"master of java") // also add text. but at start.
// newpara.before("before master of js");  // before a particular node
// newpara.after("after master of js");    //after a particular node.

// we can also remove nodes from dom tree as well.
// 1.removeChild:  //it remove the child of that parent.

// let h1=document.querySelector("h1");
// let para=document.querySelector("p");
// div.removeChild(h1,para);   can't use multiple arguments remove first one only.

// 2.remove():removes a particular node
// h1.remove().   remove h1.










