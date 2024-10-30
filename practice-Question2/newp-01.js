        //1): Square root of a Number

    // let a = prompt("Enter a number");
    // let b = Math.sqrt(a);

    //console.log(b);


        // Calculate the Area of a Triangle 

    // let base = prompt("please enter a number");
    // let height = prompt("please enter a number");
    // let result = (base  * height) / 2;

    //console.log(result);
    

        // Swap Two Numbers Using temporary 

    // let value1 = prompt("please Enter value1");
    // let value2 = prompt("please Enter value2");
   // console.log(`The value of value1 is ${value1}, && value of value2 is${value2}`);

    // let value3;
    // value3 = value1;
    // value1 = value2;
    // value2 = value3;

    //console.log(`After swapping The value  of value1 is ${value1}, && value of value2 is${value2}`);

    
            // Method 2

    // let a  = parseInt(prompt('please enter value of a'));
    // let b = parseInt(prompt('please enter the value of b'));
    //console.log(`The value of a is  ${a}, && value of b is${b}`);
    
    // a = a + b;
    // b = a - b;
    // a = a - b;
    //console.log(`After swapping The value  of a is ${a}, && value of b is ${b}`);
    

            //Convert kilometers to miles
        const kilometers = 2;
        const miles = kilometers * 0.621371;
        //console.log(`${kilometers}kilometer is equal to ${miles}`);
        

            // Convert Celsius to Fahrenheit 

        // const Celsius = prompt('please enter  the value of Celsius');
        // const Fahrenheit = (Celsius * 9/5) + 32;
        //console.log(`${Celsius} degree Celsius is equal to ${Fahrenheit} degree Fahrenheit`);



            //Program to Check if a number is Positive, Negative, or Zero

        // function checkNumber (Number){
        //     if(Number > 0){
        //         console.log(`${Number} The number is positive`);
        //     } else if (Number < 0){
        //         console.log(`${Number} The number is negative`);
        //     } else{
        //         console.log(`${Number} The number is zero`);
        //     }
        // }

        // checkNumber(2);
        // checkNumber(0);
        // checkNumber(-2);



                // JavaScript Program to Generate a Random Number using Math.random() 

            const randomNumber = Math.random();
            //console.log("Random Number : ", randomNumber);     // gives random number between 0 and 1

            const randomInt = Math.floor(Math.random() * 10) +1;
            console.log(randomInt);



                     // number is even or odd

                prompt('please enter the number');
                if(num % 2 === 0){
                    console.log('number is even')
                }else{
                    console.log('number is odd');
                }
            
            

                // JavaScript Program to Check if a Number is a Prime Number

            const number = parseInt(prompt('Enter a number'));
            let prime  = number > 1;

            for(let i =2; i < number; i++){
                if(number % 1 === 0){
                    prime = false;
                    break;
                }
            }

         //console.log(prime ?`${number} is a prime number`:`${number} is not a prime number`);
            


                    //Program to Find Largest Number Among Three Numbers 

            function checking(value1,value2,value3) {
                if(value1 >= value2 && value1 >= value3){
                    return value1;
                } else if(value2 >= value1 && value2 >= value3){
                    return value2;
                }else{
                    return value3;
                }
            }


            let a = prompt('please enter the first number')
            let b = prompt('please enter the second number')
            let c = prompt('please enter the third number')

            let result = check(a,b,c);
            console.log(`${a},${b},${c} : Largest = ${result}`);


            
            