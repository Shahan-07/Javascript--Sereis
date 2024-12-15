    class user{


        constructor(username,email,password){
            this.username = username;
            this.email = email;
            this.password = password;
        }

        encryptPassword(){
            return `${this.password}abc `
        }

        changeUserName(){
            return `${this.username.toUpperCase()}`
        }

        changeGmail(){
            return `${this.email.toUpperCase()}`
        }; 

    };

    const chai = new user("chai","chai@gmail",12345);
    console.log(chai.encryptPassword());
    console.log(chai.changeUserName());
    console.log(chai.changeGmail());


                    // Behind the Scene when Class was not present on Early stages //

            
            function user(username,email,password){
                this.username = username;
                this.email = email;
                this.password = password;
            }

            user.prototype.encryptPassword = function(){
                return `${this.password}abcd`;
            }

            user.prototype.changeGmail = function(){
                return `${this.email.toUpperCase()}`
            }

            const tea = new user("tea","tea@gmail",1232123);

            console.log(tea.encryptPassword());
            console.log(tea.changeGmail());
            
            