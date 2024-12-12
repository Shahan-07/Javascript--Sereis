let myUser = {
    username:"Hitesh",
    loginCount : 8,
    signedIn:true,

    getUserDetail : function(){
        //console.log(`username: ${this.username}`);
        
    }
}
//console.log(myUser.username);  



                    // Constructor Function  //

            function user(username,loginCount,isLoggedIn){
                this.username = username;
                this.loginCount = loginCount;
                this.isLoggedIn = isLoggedIn;

                this.greeting = function(){
                    //console.log(`Welcome ${this.username}`);
                    
                }

                return this;
            }

            const userOne = new user("Shahan",12,true);
            //console.log(userOne);
            
            const userTwo = new user("Shifan",19,"yes");
            //console.log(userTwo);

            
