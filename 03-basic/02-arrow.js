                // simple way of using this context

    const user={
        username:"Shahan",
        price:99,

        welcomeMeassage: function(){
            console.log(`${this.username}, welcome to website `);
            
        }
    }
    user.welcomeMeassage();


                // Arrow function

        const addTwo = (num1,num2) => {
            return num1 + num2
        }

        console.log(addTwo(2,2));
        

        // Immediatly invoked finction IIFE

        //  Named IIFE

        (function chai(){
            console.log("DB connected");
            
        })();  // semicolon is improtant beacuse when there are two iife function so semicolon is important in between them

        ((name) => {
            console.log(`Db two is connected to , ${name}`);
            
        })("Shahan");
