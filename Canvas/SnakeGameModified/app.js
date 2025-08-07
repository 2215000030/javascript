let canvas=document.querySelector("canvas");
let ctx=canvas.getContext("2d");
const cellSize=50; //size of each cell
const boardWidth=1000;
const boardHeight=600;
let direction=[1,0];
let snakeCells=[[0,0]];
let gameOver=false;
let score=0;
let[foodX,foodY]=generatefood();

// function to draw Snake
function draw(){

    if(gameOver){
        clearInterval(intervalId);
        ctx.fillStyle="red";
        ctx.font="55px monospace";
        ctx.fillText("GAME OVER !!!",300,300);
        return;
    }
ctx.clearRect(0,0,boardWidth,boardHeight);


    ctx.fillStyle="red";
for(let i=0;i<snakeCells.length;i++){
    let item=snakeCells[i];
    if(i===snakeCells.length-1)
        ctx.fillStyle="blue"
    ctx.fillRect(item[0],item[1],cellSize,cellSize);
    ctx.strokeStyle="orange";
    ctx.strokeRect(item[0],item[1],cellSize,cellSize)
}

// draw food -

    ctx.fillStyle="green";
    ctx.fillRect(foodX,foodY,cellSize,cellSize);

    // draw Score
    ctx.font="24px monospace";
    ctx.fillText(`Score:${score}`,30,30)

}




// function to update Snake
function update(){
    let HeadX=snakeCells[snakeCells.length-1][0];
    let HeadY=snakeCells[snakeCells.length-1][1];

    let NewHeadX=HeadX+cellSize*direction[0];
    let NewHeadY=HeadY+cellSize*direction[1];
    snakeCells.push([NewHeadX,NewHeadY]);
    if(snakeCells[snakeCells.length-1][0]===foodX && snakeCells[snakeCells.length-1][1]===foodY){
    [foodX,foodY]=generatefood();
    score++;
}
else
    snakeCells.shift();
}



const intervalId=setInterval(function(){
    // update();
    draw();
    update();
    isCollideWall();
    khudkoKhaagya();
},100)


// function to handle keys
document.addEventListener("keydown",function(e){
   const key=e.key;
   if(key==="ArrowDown")
    direction=[0,1];
   else if(key==="ArrowUp")
    direction=[0,-1];
else if(key==="ArrowRight")
    direction=[1,0];
else
    direction=[-1,0];
})


// -----function to check colllision with wall---
function isCollideWall(){
    let lastValue=snakeCells[snakeCells.length-1];
    if(lastValue[0]<0 || lastValue[0]>=boardWidth || lastValue[1]<0 || lastValue[1]>=boardHeight)
        gameOver=true;
}


// ----function to generate food----

function generatefood(){
  
    let x=Math.floor(Math.random()*20)*cellSize;
        let y=Math.floor(Math.random()*12)*cellSize;    
        return [x,y];

}

// function to eat itself
function khudkoKhaagya(){
    for(let i=0;i<snakeCells.length-1;i++){
        if(snakeCells[snakeCells.length-1][0]===snakeCells[i][0] && snakeCells[snakeCells.length-1][1]===snakeCells[i][1])
            gameOver=true;
    }
}