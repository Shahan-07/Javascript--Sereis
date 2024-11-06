

// Adding list item through functions

function addLanguage(langName){
    const li = document.createElement('li');
    const addText = document.createTextNode(langName);
    li.appendChild(addText);
    document.querySelector('.language').appendChild(li);
}
addLanguage('java');


function add(lang){
    const additems = document.createElement('p');
    const Addtext = document.createTextNode(lang);
    additems.appendChild(Addtext);
    document.querySelector('.new').appendChild(additems);
}
add('Hello');



        // editing the elements

    const secondchild = document.querySelector('li:nth-child(2)');
    const newli = document.createElement('li');
    newli.textContent = 'Go'
    secondchild.replaceWith(newli);

    const firstchild = document.querySelector('li:first-child');
    const newl= document.createElement('li');
    newl.textContent = "python";
    firstchild.replaceWith(newl);



            // Remove an element

        const lastlang = document.querySelector('li:last-child');
        lastlang.remove();