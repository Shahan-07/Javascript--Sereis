const testimonial = [    {
                        name: "Cherise G",
                        photoUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        text: "Apple is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!"
                                        },
                    {
                        name: "Rosseta Q",
                        photoUrl: "https://images.unsplash.com/photo-1588144606768-3a6a1edf7729?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        text: "I would recommend Apple for anyone trying to get the word out about their business. It has saved me so much time!"
                    },
                    {
                        name: "Killey Sikkema",
                        photoUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        text: "I highly recommend Apple. It has been so important for us as we continue to grow our company."
                    },
];

const imageEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".username");


let index = 0;

updateTestimonial();
function updateTestimonial() {
    const {name,photoUrl,text} = testimonial[index];
    imageEl.src =photoUrl;
    textEl.innerText = text;
    userNameEl.innerText = name;
    index++;
    if(index === testimonial.length){
        index = 0;
    }

    setTimeout(()=>{
        updateTestimonial();                                        
    },2500);
}