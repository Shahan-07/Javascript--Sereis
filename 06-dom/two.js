const parent = document.querySelector('.parent');
//console.log(parent);
//console.log(parent.children);

//console.log(parent.children[0].innerHTML);      // targetting the 0'ith index child of the parent element

//console.log(parent.firstElementChild);      // targetting the first element of parent


//console.log(parent.lastElementChild);      // targetting the last element of parent

const DayOne = document.querySelector('.day');

console.log(DayOne.nextElementSibling);             // targetting the next sibling of the elements


console.log("Nodes : ",parent.childNodes);          // displays all the nodes of parent element, wheter  it is element or text node means space node

console.log("Elements : ",parent.children);         // displays only the element nodes of parent element



