const prompt = require("prompt-sync")();

function printInfo(){
    console.log("Contact managment system");
    console.log("------------------------");
    console.log("1. Add a Contact");
    console.log("2. Delete a Contact");
    console.log("3. View a Contact");
    console.log("4. Search Contact");
    console.log("5. Exit");
}

function addContact(){
    const name = prompt("Name: ");
    const email = prompt("Email: ");
    const Contact = {
        name: name,
        email: email
    }
    contacts.push(Contact);
    console.log("Added");
    
}

function deleteContact(){
    console.log("Contacts IDs");
    for(let i = 0; i < contacts.length; i++){
        const contact = contacts[i];
        console.log((i + 1).toString() + ":", contact.name);
    }
    const number = parseInt(prompt("Enter an ID: "));
    if(isNaN(number) || number > contacts.length){
        console.log("Invalid")
        return
    }
    contacts.splice(number -1,1);
    console.log("Removed.");
    
}

function searchContact(){}

function listContacts(contacts){
    for(let contact of contacts){
        console.log("############");
        console.log("Name: ", contact.name);
        console.log("Email: ",contact.email);
        
    }
    
}

printInfo();

const contacts = []

let keepGoing = true
while(keepGoing){
    const number = prompt("Enter an Operation (1-5): ");
    console.log();
    
    switch (number) {
        case "1":
            addContact()
            break;
        case "2":
            deleteContact()
            break;
        case "3":
            listContacts(contacts)
            break;
        case "4":
            searchContact()
            break;
        case "5":
            keepGoing = false;
            break;

        default:
            console.log("Unknown");
            break;
    }
}