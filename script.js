const musicBtn = document.getElementById("music-toggle");
const music = document.getElementById("ambient-audio");

if (musicBtn && music) {

musicBtn.addEventListener("click", async () => {

try{

if(music.paused){

await music.play();

musicBtn.textContent="🔇 MUTE";

}else{

music.pause();

musicBtn.textContent="🔊 MUSIC";

}

}catch(e){

console.log(e);

}

});

}

const enterBtn=document.querySelector(".enter-btn");

if(enterBtn){

enterBtn.addEventListener("click",()=>{

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

});

}

const canvas=document.getElementById("particles");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let particles=[];
for(let i=0;i<120;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2+1,

v:Math.random()*0.8+0.2

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="rgba(212,175,55,.8)";

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fill();

});

update();

requestAnimationFrame(draw);

}

function update(){

particles.forEach(p=>{

p.y+=p.v;

if(p.y>canvas.height){

p.y=0;

p.x=Math.random()*canvas.width;

}

});

}

draw();

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});
const enter = document.querySelector(".enter-btn");

if (enter) {

    enter.addEventListener("click", function (e) {

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {

            window.location = "origenes.html";

        }, 900);

    });

}