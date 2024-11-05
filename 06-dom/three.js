// example 1

const heading = document.createElement('h1');
console.log(heading);

heading.className = 'mainH1';       // giving a class to an element
heading.id = 'myId';                // giving an id to an element
//heading.innerText = "My heading"    // setting some innertext to the element
heading.style.backgroundColor = 'tan';  // setting the background color
const addText = document.createTextNode("This is h1");      // setting the text insdide the element
heading.appendChild(addText);

document.body.appendChild(heading);



// Example 2

// const div = document.createElement('p');
// console.log(div);


// div.className = "paragraph";
// div.id = "myPara";

// div.style.color = "blue";
// div.style.fontSize = "20px";

// const addtext = document.createTextNode('This is my paragraph');
// div.appendChild(addtext);

// document.body.appendChild(div);


// example 3

const div = document.createElement('div');
console.log(div);

div.className ="newClass";
div.id = '-id';

div.style.backgroundColor = 'pink';
div.style.width = '50px';

const addT = document.createTextNode("This is the div of body");
div.appendChild(addT);

document.body.appendChild(div);


