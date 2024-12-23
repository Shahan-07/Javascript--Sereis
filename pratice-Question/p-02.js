const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

const result = people.reduce((acc , person) => acc + parseInt(person.salary),0);    // parseInt convert string to integar

//console.log(result);


const age = people.filter(person => new Date().getFullYear() - new Date(person.DOB).getFullYear()>30)
//console.log(age);


const Name = people.map(({firstName, lastName}) => `${firstName}, ${lastName}`);   //  printing first and Last Name
//console.log(Name);


const New = people.map(person => ({...person,fullName: `${person.firstName}, ${person.lastName}`})) ;        // printing full, first and last name
//console.log(New);


const ascendingOrder = people.sort((personA,personB) => new Date(personA.DOB) - new Date(personB.DOB));        // Getting in Ascending order
//console.log(ascendingOrder); // new Date(...) is used to convert the date strings (DOB) into JavaScript Date objects,
                                // which can be easily compared using numerical operations.





            //const department = people.reduce((acc,person) =>({...acc, [person.department]: acc[person.department] + 1 || 1}),{});
            //console.log(department);

    
                const department = people.reduce((acc,person) =>{
                    acc[person.department] = (acc[person.department] || 0) + 1;
                    return acc;
                },{});
            // console.log(department);