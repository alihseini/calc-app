let displayBox=document.querySelector(".display");
let list= document.querySelectorAll(".show");
list.forEach(item=>{
    item.addEventListener("click", showDisplay);
});
function showDisplay(event){
    const x=event.target.innerText;
    if(displayBox.innerHTML==0){
        return displayBox.innerHTML=x
    }
    else{
        return displayBox.innerHTML+=x
    };
};
function calc(){
    displayBox.innerHTML=eval(displayBox.innerText);
}
function allclear(){
    displayBox.innerText=0
}
function clear(){
    let text= displayBox.innerText;
    if(text.length==1){
        displayBox.innerText=0
    }
    else{
        displayBox.innerText=text.substring(0, text.length - 1)
    }
}
document.querySelector(".calc").addEventListener("click", calc);
document.querySelector(".allclear").addEventListener("click",allclear );
document.querySelector(".clear").addEventListener("click",clear );
