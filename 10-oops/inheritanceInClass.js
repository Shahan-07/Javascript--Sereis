class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`usrname is ${this.username}`);
        
    }
}

class Teacher extends user{
    constructor(username,email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`course was added by ${this.username}`);
        
    }
};

const chai = new Teacher("Chai","chai@gmail.com",1233);
chai.addCourse();

chai.logMe();