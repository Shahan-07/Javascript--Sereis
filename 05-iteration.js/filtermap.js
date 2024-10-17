

            // Basic filter method

        // const myNums = [1,2,3,4,5,6,7,8,9,10];

        // const newNums = myNums.filter((num) => num > 5)
        // console.log(newNums);
        

        // const myNums = [1,2,3,4,5,6,7,8,9,10];

        // const newNums = myNums.filter((num) => {
        //     return num > 5             // if we want to make the scope so then [ return keyword ] is must
        // })
        // console.log(newNums);


        

                // using filter method to access the value


                const books = [
                {
                        title :"book one", genre : "fiction", publlish : 1990,
                        edition : 2000
                },
                {
                        title :"book two", genre : "non-fiction", publlish : 1890,
                        edition : 2020
                },
                {
                        title :"book three", genre : "History", publlish : 1993,
                        edition : 2010
                },
                {
                        title :"book four", genre : "Science", publlish : 1930,
                        edition : 2011
                },
                {
                        title :"book five", genre : "History", publlish : 1920,
                        edition : 2009
                },
                {
                        title :"book six", genre : "fiction", publlish : 1960,
                        edition : 2014
                },
                {
                        title :"book seven", genre : "Science", publlish : 1960,
                        edition : 2012
                }
                ]

                const userBooks = books.filter((bk) => bk.genre === "History");
                console.log(userBooks);
                
                const user = books.filter((bk)=> bk.publlish === 1960);
                console.log(user);






// ----------------------++++++++++++------------------------++++++++++++-----------------------------++++++++++++----------------------------------


            // Basic map method

            // const myNumbers = [1,2,3,4,5,6,7,8,9,10];

            // const newNums = myNumbers.map((num) => num +10);
            // console.log(newNums);


            // const myNumbers = [1,2,3,4,5,6,7,8,9,10];

            // const newNums = myNumbers.map((num) =>{
            //     return  num + 10;                       // return keyword is compulsory in block scope function............
            // });
            // console.log(newNums);



            // chaining method through map and filter

                        const myNumbers = [1,2,3,4,5,6,7,8,9,10];

                        const newNums = myNumbers
                        .map((num) => num * 10)
                        .map((num) => num + 1)
                        .filter((num) => num > 40)

                        console.log(newNums);
                        



// ---------------+++++++++++++++-----------------------------++++++++++++++++++++++++++++-----------------------------+++++++++++++++++++++++++--------------------



        // program of basic reduce

                const shopping = [
                        {
                                courses : "java",
                                price : 2444
                        },
                        {
                                courses : "javascript",
                                price : 4444
                        },
                        {
                                courses : "python",
                                price : 7444
                        }
                ]

                const myPrice =  shopping.reduce((acc,item) => acc + item.price ,0);

                console.log(myPrice);
        
                // 2): program of reduce 

        const newVal = [1,2,3,4];

        const out = newVal.reduce(function(acc , curr){
        console.log(`acc : ${acc}  curr : ${curr} `);                   // for understanding purpose
        return acc + curr;
        },3);
        console.log(out);
        


        const arr = [1,2,3,4];
        const result = arr.filter((item) => item >2)
        .map((item) => item + 2);

        console.log(result);
        