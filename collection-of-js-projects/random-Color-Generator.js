const conatinerEl = document.querySelector(".container");

for (let index = 0; index < 28; index++) {

    const colorConatinerEl = document.createElement("div");
    colorConatinerEl.classList.add("color-container");
    conatinerEl.appendChild(colorConatinerEl);
}

const colorConatinerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorConatinerEls.forEach((colorConatinerEl)=>{
        const newColorCode = randomColor();
        colorConatinerEl.style.backgroundColor = "#" + newColorCode;
        colorConatinerEl.innerText = "#" + newColorCode;
    });
}


function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;

}
