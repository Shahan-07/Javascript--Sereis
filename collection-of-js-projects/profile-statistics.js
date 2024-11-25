const counters = document.querySelectorAll(".counter");


counters.forEach((counters)=>{
    counters.innerText = "0";
    incrementCounter();

    function incrementCounter(){
        let currentNum = +counters.innerText;
        const dataceil = counters.getAttribute("data-ceil");
        const increment = dataceil / 15;
        currentNum =Math.ceil (currentNum + increment);
        
        if(currentNum < dataceil){
            counters.innerText = currentNum;
        } else{
            counters.innerText = dataceil;
        }
        setTimeout(incrementCounter,60)
    }
});