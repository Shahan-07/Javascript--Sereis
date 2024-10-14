
                        //      Arrays Metho0ds            / /
                        
// push : it adds the items in the end

//pop :  it removes the items from the end

// unshift : it adds the items in the start of an array

// Shift :  it removes the item from the start of an array


let newArray = [1,2,3,4,5];
// console.log(newArray.includes(3));    // it will show the (true) value beacuse 3 is included in our array

let indexArray  =[0,1,2,3,4,5];
// console.log(newArray.indexOf(2));       // shows that which element is in which position


// program to merge the two arrays in one array // through spread operator

// let marvel = ["thor","ironman","hulk"];
// let superHeros= ["superman","Batman","Flash"];

// const allHeros =[...marvel , ...superHeros];
// console.log(allHeros);


// program of combining all the nested arrays in one array

// let fisrtArray = [1,2,3,[9,0,7],4,[7,8,9],[3,3,4,5]];
// let realArray = fisrtArray.flat(Infinity);

// console.log(realArray);


// program to make an array from anything

// console.log(Array.from("Shahan"));

// program to make array from some numbers value

// let score1=1000;
// let score2=2000;
// let score3=3000;

// console.log(Array.of(score1,score2,score3));


                    // practsie Questions


 // 1

// const fruits = ["Banana","Mango","orange","pineapple"];
// console.log(fruits.toString());

 // 2

// inn splice method (1,2)  the first element(1) adds the new element and the second element(2) removes the element

// const fruits = ["Banana","Apple","Orange","mango"];            // original Array will be change

// fruits.splice(1,1,"Kiwi","Lychee"); 
// console.log(fruits);


// 3

// in slice method the first element(1) is from and the second one(2) is to... means give a new array from index 1 to 3; but 3 is not included

// const fruits = ["Banana","Apple","Orange","mango"];             // original array will not be changed and will give new array.
// newFruits = fruits.slice(1,3);
// console.log(newFruits);



// 4): program to find the index of an array.

// const fruits = ["Banana","Apple","Orange","mango"];
// let Newfruits = fruits.indexOf("Banana");

// console.log(Newfruits);



// 5):  program to see whether the element is included in array or not

// const fruits = ["Banana","Apple","Orange","mango"];
// let Newfruits = fruits.includes("Apple");

// console.log(Newfruits);



// 6): program to set the elements Alphabatically in an Array.

// const fruits = ["Banana","Apple","Orange","Kiwi","Mango"];
// let alphaFruits = fruits.sort();

// console.log(alphaFruits);




// 7): program to make an array reverse

// const fruits = ["Banana","Apple","Orange","Kiwi","Mango"];
// let reverseFruits = fruits.reverse();

// console.log(reverseFruits);

