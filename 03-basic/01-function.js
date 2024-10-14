
        // 1);  Simple way of declaring a function;

// function myName(){
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("H");
//     console.log("A");
//     console.log("N");
// }

// myName();


        // 2);  Adding two numbers in a function

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
    
// }

// addTwoNumbers(9,1);


        // 3 Adding two numbers in different ways


    // function twoNumbers (number1,number2){

        // let result = number1 + number2;     // 1st way of returing a number
        // return result;

    //     return number1 + number2;
    // }
    // const result = twoNumbers(3,3);
    // console.log("result is", result);
    


        // 4: Subtracting two numbers
    // function myNumbers(number3, number4){

    //     return number3 - number4;

    // }
    // const myresult = myNumbers(5,3);
    // console.log("The subtracted value is",myresult);
    
        // 5); passing the parameters in a function

    // function userLoggedIn(username){
    //     return `${username} has just logged in`
    // }

    // console.log(userLoggedIn("Shahan Alam"));


         // 6); when there are undefined value
    
    // function userlogged(userName ){
    //     if(!userName){
    //         console.log("please enter a username");
    //         return
    //     }
    //     return `${userName} has just logged in`
    // }
    // console.log(userlogged());
    

        // 7);  passing mutiple parameters in a function

    // function calcCartPrice(...num1){
    //     return num1;
    // }
    // console.log(calcCartPrice(200,300,400));
    
    // const user = {
    //     username: "Shahan",
    //     price : 2
    // }

    // function Handleobj(anyobject){
    //     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
        
    // }

    // Handleobj(user);

    // Handleobj({
    //     username:"Shahan Alam",          // we can also pass it like direct by calling a function
    //     price: 100
    // });


        // 8);  passing a value through an array

    // const myArray = [100,200,300,400];
    // const newArray = [22,33,44,55];

    // function returnSecondArray (getArray){
    //     return getArray[1];
    // }

    // console.log(returnSecondArray(myArray));
    // console.log(returnSecondArray(newArray));
    
        // 9); convert fahrenhiet to celcius

    // function toCeclcius(f){
    //     return (5/9) * (f-32);
    // }
    // console.log(`The teperature is ${toCeclcius(90)} in celcius`);
    


    // practice question


    // 1

    // function toFahrenhiet(c){
    //     return (0 * 9/5) + (c+ 32) 
    // }
    // console.log(toFahrenhiet(20));
    

    // 2

    const x = (x,y)=>{
        return x * y;
    }
    // console.log(x(4,4));
    

    // 3): taking an object and calling a fuction in this

    const myObj = {
        firstName: "Shahan",
        lastName:"Alam",
        fullName: function(){
            return this.firstName +" "+ this.lastName
        }
    }
    // console.log(myObj.fullName());



// 4); knowing that the number is real number or not

// function doMaths(num){
//     num = Number(num);

//     if(num){
//         var newNumber = (num+100) / 4;
//         return newNumber
//     }else{
//         return ("not a number");
//     }
// }
// var customNum = doMaths("Shahan");
// console.log(customNum);

// var customNum = doMaths(1212);
// console.log(customNum);




// Simple question of function

// function myFunction(num1 , num2){

//     return num1+num2;
// }

// console.log(myFunction(5,5));



const newObject = {
    name:"Shahan",
    city:"mingora"
}

function handleobject (anyobject){
    if (anyobject.hasOwnProperty("names") && anyobject.hasOwnProperty("city")) {
        return `name is ${anyobject.name} and he belong from ${anyobject.city}`
    } else {
        return "error found "
    }
    
};
console.log(handleobject(newObject));




const myArray = [12,"Shahan",18,20];

function handleArray(getArray){
    return getArray[1];
}
console.log(handleArray(myArray));
