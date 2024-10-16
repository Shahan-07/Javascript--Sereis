
                                        // Summary

                // For...in: Use for iterating over object properties. Not recommended for arrays.

                    // For...of: Use for iterating over iterable collections like arrays and strings, yielding values directly.

                        // For Each: A method specifically for arrays, executing a callback for each element.



                    // on object we will apply For in loop only .......
                    // on Array we will apply For of loop and also we can apply for each loop.....




             // basic syntax, for of loop

        const arr = [1,2,3,4,5];

        for (const number of arr) {
                console.log(number);
        }


            // for of loops on strings

        const greeting = "Helloworld!";
        for (const Greet of greeting) {
                console.log(`Each character is ${Greet}`);
        }



            // for of loops on Arrays

        const cars = ["Toyota","Honda","ford"];
        for (const car of cars) {
                console.log(`car is : ${car}`);
                
        }




            // Maps and applying for of loop in it

        const map = new Map();
        map.set("Pak", "Pakistan");
        map.set("AFG", "Afghanistan");
        map.set("UK","United Kingdom");

        for (const [key, value] of map) {
                console.log(key, ':', value);
                
        }





    //-------------+++++++++++++---------------------------------+++++++++++++++++++------------------------------------++++++++++++++++-----------------




            // For In loop applying on objects

        const myObject = {
                js : "javascript",
                cpp : "C++",
                rb : "Ruby",
                Swift : "Swift by Apple"
        };

        for (const key in myObject) {
                console.log(`${key} shortcut is for ${myObject[key]}`);
                
        }




            // for in loops on Array

        const programming = ["js","Ruby","python","java"];
                for (const key in programming) {
        console.log(programming[key]);
        
                }


            // For in loop on Map

        const newMap = new Map();
        map.set("Pak", "Pakistan");
        map.set("AFG", "Afghanistan");
        map.set("UK","United Kingdom");             // it will not be executed because map is not iteratable in For in loop

        for (const key in newMap) {
        console.log(key);
        }

    //--------------++++---------------------------+++++++++++++++++---------------------------++++++++++++-------------++++++++++++++-------------





                        // For each loop

                        const coding = ["javscript","Ruby","Java","Python"];

                        coding.forEach((value)=>{
                        console.log(value);
                
                        })



                     // For each loop and its index and array values

                const codings = ["javscript","Ruby","Java","Python"];

                coding.forEach( (value,index,arr)=>{
                console.log(value, index, arr);
                })



                    // For each loop and taking objects in it, returning thier values in array format

                const myCoding = [

                        {
                                languageName : "javascript",
                                languageFileName : "JS",
                        },
                        {
                                languageName : "Python",
                                languageFileName : "Py",
                        },
                        {
                                languageName : "Java",
                                languageFileName : "Jav",
                        }
                ];

                myCoding.forEach((value)=>{
                        console.log(value.languageName,`:`, value.languageFileName);
                        
                })