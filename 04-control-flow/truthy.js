
        // truthy value

    const userEmail = "Shahan@.gmail"
    if (userEmail) {
        // console.log("user Email exist");
    }else{
        // console.log("Dont have user email");
    } 

    // checking that an array is empty or not
    if (userEmail.length === 0) {
        console.log("Array is empty");
    }

    // checking that an object is empty or not
    const emptyObj = {}
    if (Object.keys(emptyObj).length === 0) {
        console.log("object is empty");
    }


        // Falsy values

    const UserEmail = ""
    if (UserEmail) {
        console.log("user Email exist");
    }else{
        // console.log("Dont have user email");
    } 


                    // if we have a empty string , value will be executed in else condition means falsy value
                    // if we have a empty Array  , value will be executed in if condition means truthy value


                                // falsy values

                            // false, 0 , -0 , BigInt -> on , "" , null , undefined , NaN



                                // Truthy values

                            //  "0" , 'false' , " " , [] , {} , function(){}




                    // Nullish coalescing operator (??) : null undefined

                let val1;

                // val1 = 8 ?? 10;           case 1
                // console.log(val1);
                
                // val1  = null ?? 10;      case 2
                // console.log(val1);
                
                // val1 = undefined ?? 12
                // console.log(val1);
                
                val1 = null ?? 10 ?? 20;
                // console.log(val1);
                



                // Terniary operator
                // condition ?  true : false

                const iceCream = 100;
                iceCream <=80 ? console.log("less than 80"):console.log("more than 80");
                
                




                // const isEqualto100 = (a,b) => a === 100 || b === 100;

                // console.log(isEqualto100(100,100));


                const num1 = 100;
                const num2 = num1 + 0;
                
                if (num1 ==100) {
                    console.log("number is equal to 100");
                } else if(num2 ==100){
                    console.log("sum of two number is equal to 100");
                } else{
                    console.log("number is not equal to 100");
                    
                }