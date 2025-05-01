let btns=document.querySelector(".btn");
let isFound=true;
let count=0;
btns.addEventListener("click",() =>{
    if(isFound){
        btns.textContent=count
    }

})