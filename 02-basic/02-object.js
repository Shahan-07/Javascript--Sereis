
mySym = Symbol("key1"); // declaration of symbol and uses it in object


//  how an object look like is;

// const User = {
//     name: "Shahan Alam",
//     age : 20,
//     location: "Swat",
//     Email : "Shahan.gmail.com",
//     isLoggedIn : false,
//     lastLogged : ["Sunday","Monday","Friday"],
//     [mySym]:"key1"
// }

    // Accessing the key objects 1st way

// console.log(User.Email);

    // Accessing the key objects 2nd way

// console.log(User["age"]);

    // decleration of symbol and print it on console

// console.log(User[mySym]);


    // overriding the value means add new value to object.

// User.Email = "Shahan.gmail";
// console.log(User);

    // freezing an object

// Object.freeze(User);


        // Nesting of objects

// const regularUser ={
//     email : "user@gmail.com",
//     fullName: {
//         userFullname : {
//             firstName:"Shahan",
//             lastName : "Alam"
//         }
//     }
// }

// console.log(regularUser.fullName.userFullname.lastName);


    // how to add an object with anaother

const obj1 = {1 : "a", 2 : "b"};
const obj2 ={3 : "c", 4 : "d"};
const obj3 ={5 : "e", 6 :"f"};

const obj4 = {...obj1, ...obj2, ...obj3};


// const obj4 =Object.assign({},obj1,obj2,obj3);    2nd method and will not used many times

// console.log(obj4);

    // finding the keys and values of an object

//console.log(Object.keys(obj1));
//console.log(Object.values(obj1));
//console.log(Object.hasOwnProperty("a"));  // means that the value is present in object or not


        // De- structuring of objects

    // const instructor = {
    //     name: "Shahan",
    //     Email : "Shahan.gmail.co",
    //     CourseInstructor :"Chin kov",
    //     Price : 99
    // }

    // const {CourseInstructor} = instructor;
    // console.log(CourseInstructor);

    // const {Email} = instructor;
    // console.log(Email);
    
    // const {Price} = instructor;
    // console.log(Price);

    
                        // practice


    //  1);  Accessing the elements of an objects
    // const myObj = {
    //     name :"Shahan",
    //     age:20,
    //     myCars:{
    //         car1:"Bmw",
    //         car2:"Ford",
    //         car3:"Toyota"
    //     }

    // }

    // console.log(myObj.myCars["car3"]);

    // 2); make teh value of an object to uppercase
    
const myObj = {
    name :"Shahan",
    age:20,
    myCars:{
        car1:"Bmw",
        car2:"Ford",
        car3:"Toyota"
    }

}
const newValues = myObj.myCars.car1.toUpperCase();
console.log(newValues);





