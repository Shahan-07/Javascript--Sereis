class user{
    constructor(email,password){
        this.email = email;
        this.password = password;               
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value.toUpperCase();
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value.toUpperCase();
    };
}

const chai  = new user("chai@gmail.com", "abcds");
console.log(chai._password);
console.log(chai._email);
