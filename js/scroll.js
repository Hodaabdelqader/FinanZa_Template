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
//----------------------------------------
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