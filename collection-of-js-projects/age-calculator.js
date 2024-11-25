const buttonEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge(){

    const birthdayVal = birthdayEl.value;

    if(birthdayVal === ""){
        alert("Please enter your birthday");
    } else{
        const age = getAge(birthdayVal);
        resultEl.innerText = `your age is ${age} ${age > 1 ? "years" : "year"} old`
    }

}

    function getAge(birthdayVal){
        const currentDate = new Date();
        const birthdayDate = new Date(birthdayVal)
        let age = currentDate.getFullYear() - birthdayDate.getFullYear();
        const months = currentDate.getMonth() - birthdayDate.getMonth();

        if(months < 0 || (months === 0 && currentDate.getDate()< birthdayDate.getDate())){
            age--;
        }
        return age;
        
    }

buttonEl.addEventListener("click",calculateAge)