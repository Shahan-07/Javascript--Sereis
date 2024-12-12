function SetUserName(username){
    this.username = username
};

function createUser(username,email,password){

    SetUserName.call(this,username)

    this.email = email;
    this.password = password
};

const chai = new createUser("Chai", "fb@.com", "123456");
console.log(chai);
