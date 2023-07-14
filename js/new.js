document.getElementById("btn1").onclick=function(el){
    document.getElementById("p1").innerHTML=`Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit `;
}
document.getElementById("btn2").onclick=function(el){
    document.getElementById("p1").innerHTML=`Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
    Diam dolor diam ipsum et `;
}
document.getElementById("btn3").onclick=function(el){
    document.getElementById("p1").innerHTML=`Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos .`;
}

let nums=document.querySelectorAll(".nums .num");
let sectioon= document.querySelector(".counter .container");
let started= false;
function startCounter(ele){
    let goal =ele.dataset.goal;
    let count =setInterval(()=>{
    ele.textContent++;
    if(ele.textContent==goal){
        clearInterval(count);
    }
    },2500/goal);}
    window.onscroll = function(){
        if (window.scrollY >= sectioon.offsetTop) {
            if(!started){
                nums.forEach((num) => startCounter(num));
            }
            started=true;
        }
    };
//-------------------------------------
let scrollcon=document.querySelector(".scroll");
let leftBtn=document.getElementById("left");
let rightBtn=document.getElementById("right");
rightBtn.addEventListener("click",()=>{
    scrollcon.style="scroll-behavior: smooth";
    scrollcon.scrollLeft+=250;
})
leftBtn.addEventListener("click",()=>{
    scrollcon.style="scroll-behavior: smooth";
    scrollcon.scrollLeft-=250;
})
//----------------------------------------------
let upBtn=document.querySelector(".up-btn");
    window.addEventListener("scroll",()=>{
        if(window.pageYOffset >=100){
            upBtn.classList.add("show")
        }else{
            upBtn.classList.remove("show");
        }
    })
    upBtn.onclick=function(){
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    }
//--------------------------------------
    let row=document.querySelector(".scrollrev");
    let leftCircle=document.getElementById("leftc");
    let middleCircle=document.getElementById("middle")
    let rightCircle=document.getElementById("rightc");
    rightCircle.addEventListener("click",()=>{
        row.style="scroll-behavior: smooth";
        row.scrollLeft+=360;
    })
    middleCircle.addEventListener("click",()=> {
        row.style="scroll-behavior: smooth";
        row.scrollLeft-=160;
    })
    leftCircle.addEventListener("click",()=>{
        row.style="scroll-behavior: smooth";
        row.scrollLeft-=560;
    });
    