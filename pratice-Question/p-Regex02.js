const ex1 = 'Grade 1Grade 2Grade 3Grade 4Grade 5';
const ex2 = 'The pheasant has no agenda';
const ex3 = '75, 50 : 123 / 900 - 321 + 900 = 55';
const ex4 = 'My name is: James';
const ex5 = `Did you find any droids? No, sir. If there were any on board, they must also have jettisoned. Send a scanning crew on board. I want every part of this ship checked. Yes, sir. I sense something...a presence I haven't felt since... Get me a scanning crew in here on the double. I want every part of this ship checked! Boy, it's lucky you've these compartments. I use them for smuggling. I never thought I'd be smuggling myself in them. This is ridiculous. Even if I could take off, I'd never get past the tractor beam.`

// Exercise 01
// Using a regex, get an array of the grade values e.g. Grade 1, Grade 2 ...

const  ascending = ex1.split(/(Grade\s\d)/g);
//console.log(ascending);

const inRegexform = ex1.match(/Grade\s\d/g);
//console.log(inRegexform);

// Exercise 02
// Using a regex, determine whether the string contains the substring 'agenda' or 'age'

    const subString = /agenda/.test(ex2)
    //console.log(subString);


// Exercise 03
// Using a regex, get an array of numbers that are contained in the string (removing any symbols)

    const removeSymbol = ex3.match(/\d{1,3}/g);
    //console.log(removeSymbol);
    
    const remove = ex3.match(/\d+/g);
    //console.log(remove);
    
// Exercise 04
// Using a regex, find out the name contained in the string (after the semicolon :)

    const matching = ex4.match(/:\s+(\w+)/);
    //console.log(matching);


// Exercise 05
// Using a regex, find the number of contractions used in the string.

const reg = ex5.match(/'[dstm]|' [r|ve]/g);
console.log(reg);

