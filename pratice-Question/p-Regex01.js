const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

// Exercise 01
// Using a regex pattern, get the 3 letter words in the ex1 string.

const firstWords = ex1.match(/[a-zA-Z]{3}/);  // for first three words
const firstDigits = ex1.match(/[a-zA-Z]{3}/g);   // for first three words gplobally
console.log(firstDigits);
//console.log(firstWords);



// Exercise 02
// Using a regex pattern, remove all of the numbers from the ex2 string.

    const numbers = ex2.replace(/[A-Z]/g,'');
    //console.log(numbers);
    
    const Alphabets = ex2.replace(/[0-9]/g,'');
    //console.log(Alphabets);
    



// Exercise 03
// Using a regex pattern, find the monetary value contained within the ex3 string.

    const specialChar = ex3.match(/\$\d.\d\d/);
    //console.log(specialChar);
    



// Exercise 04
// Using a regex pattern, find the telephone number contained within the ex4 string.

    const telephoneNum = ex4.match(/(\d{3,4}\s?){3}/g);
    //console.log(telephoneNum);


// Exercise 05
// Using a regex pattern, find the email address contained within the ex5 string.

