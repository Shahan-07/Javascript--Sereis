
        // 1):  for loop

    for (let i = 0; i <= 10; i++) {
        const element = i;
        console.log(element);
    }
    
            //  2): When a user inputs a number
            // Loop from 1 to the entered number
            // If the current number is divisible by 3 then print "Fizz"
            // If the current number is divisible by 5 then print "Buzz"
            // If the current number is divisible by 3 and 5 then print "FizzBuzz"
            // Otherwise print the current number

        let answer = prompt("please enter a number");

        for (let i = 1; i <= answer; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("fizzBuzz");
            } else if(i % 3 === 0){
                console.log("Fizz");
            } else if(i % 5 === 0){
                console.log("Buzz");
            }else{
                console.log(i);
                }
            
        }



    // 3): program about for loop and if statment in it

    for (let i = 0; i < 6; i++) {
        const element = i;
        if (element == 5) {
            console.log("5 is best number");
            
        }
        console.log(element);
        
    }


             //nested loops to make tables

        for (let i = 1; i <=5; i++) {
            console.log(`outer loops value : ${i}`);
            for (let j = 1; j <= 10; j++) {
                // console.log(`inner loops value: ${j}`);
                console.log(i + '*' + j + '=' + i*j);
                
            }
            
        }


            // Nested loops

        for (let i = 1; i <=5; i++) {
            console.log(`outer loops and value is: ${i}`);
            for (let j = 1; j <=5; j++) {
                console.log(`inner loops and value is : ${j}`);
                
            }
            
        }


            // loops on an array

            let myArray = ["Thor","Superman","Iron Man"];

            for (let index = 0; index < myArray.length; index++) {
                const element = myArray[index];
                console.log(element);
                
                
            }



            // break statment in for loop

        for (let i = 1; i <=10; i++) {
            if (i == 5) {
                console.log(`5 is detected`);
                break;
            }
            console.log(`Value of i is :${i}`);
            
        }



        // continue statment in loops

        for (let i = 1; i <=10; i++) {
            if (i == 5) {
                console.log(`5 is detected`);
                continue;
            }
            console.log(`Value of i is :${i}`);
            
        }