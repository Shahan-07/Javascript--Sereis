

// Adding list item through functions

function addLanguage(langName){
    const li = document.createElement('li');
    const addText = document.createTextNode(langName);
    li.appendChild(addText);
    document.querySelector('.language').appendChild(li);
}
addLanguage('Rust');


function addinglanguage(language){
    const li = document.createElement('li');
    const textAdding = document.createTextNode(language);
    li.appendChild(textAdding);
    document.querySelector('.language').appendChild(li);
}
addinglanguage('GoLang');



function newLanguage(newlang){
    const li = document.createElement('li');
    const text = document.createTextNode(newlang);
    li.appendChild(text);
    document.querySelector('.language').appendChild(li);
}
newLanguage('Javascript');

function addPara(para){
    const newElemnt = document.createElement('p');
    const addtext = document.createTextNode(para);
    newElemnt.appendChild(addtext);
    document.querySelector('.paragraph').appendChild(newElemnt);
}
addPara('this is new paragraph');


function add(lang){
    const additems = document.createElement('p');
    const Addtext = document.createTextNode(lang);
    additems.appendChild(Addtext);
    document.querySelector('.new').appendChild(additems);
}
add('Hello');





        // editing the elements

    // const secondchild = document.querySelector('li:nth-child(2)');
    // const newli = document.createElement('li');
    // newli.textContent = 'Go'
    // secondchild.replaceWith(newli);

    // const first = document.querySelector('li:first-child');
    // const neew = document.createElement('li');
    // neew.textContent = "AI";
    // first.replaceWith(neew);

    const thirdChild = document.querySelector('li:nth-child(3)');
    const newElement = document.createElement('li');
    newElement.textContent = 'new Language';
    thirdChild.replaceWith(newElement);


            // Remove an element

        // const lastlang = document.querySelector('li:last-child');
        // lastlang.remove();

