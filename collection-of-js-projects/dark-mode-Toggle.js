const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.backgroundColor = "black"
    } else{
        bodyEl.style.backgroundColor = "white"
    }
}

inputEl.addEventListener("click",()=>{
updateBody();
});

