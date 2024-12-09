const promiseOne = new Promise( (resolve,reject)=>{

    setTimeout(function(){
        //console.log("Async Task is completd");
        resolve();
    },1000)                                              // making of promise and resolving it 1st method;
});

promiseOne.then(function(){
    //console.log("promise Consumed");
    
});



new Promise((resolve, reject) => {
    setTimeout(function(){
        //console.log("Async Task 2 Coompleted");
        resolve();                                          // resolving the promise 2nd method
    },1000)
}).then(function(){
    //console.log("promise 2 consumed");
    
});


const promiseThree = new Promise((resolve, reject) => {
    
    setTimeout(function(){
        resolve({username: "Shahan", email: "Shahan@.com"});
    },1000)                                                         // resolving the promise and passing the data
})
promiseThree.then(function(user){
    //console.log(user);
});




const promiseFour = new Promise((resolve, reject) => {
    
    setTimeout(function(){
        let error = false;

        if(!error){
            resolve({username: "shahan", email:"shahan.com"});
        } else{
            reject("Somthing went wrong");
        }
    },1000)
});


promiseFour.then((user)=>{
    //console.log(user);
    return user.username;
}).then((username)=>{
    //console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    //console.log("The promise is either been rejected or resolved");
    
});


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true;
    if(!error){
        resolve({name:"javascript", password: "123"});
    } else{
        reject("ERROR: JS went wrong");
    };
    },1000)
});

async function consumePromsieFive() {
    try {
        const response = await promiseFive
      //  console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromsieFive();


async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        //console.log(data);
    } catch (error) {                                       // handling the data using try catch method
        //console.log("Errors");
        
    }
}
getAllUser();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{console.log(error);
});