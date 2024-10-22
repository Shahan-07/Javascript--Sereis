

                 // Question 1

            const concatenate = (str1,str2) =>
                str1.slice(1) + str2.slice(1);

            console.log(concatenate("abc","def"));
            
        
                // question 2

            const countEvenNumbers = (arr) =>
                arr.filter(num => num % 2 === 0).length;

            console.log(countEvenNumbers([1,2,3,4,5,6]));
            console.log(countEvenNumbers([2,2,2,2,2,2]));
        

                // question 3     is the number is in ascending order or not

            const isAscending = (arr) => {
                for ( let i = 0; i < arr.length; i++){
                    if(arr [i+1] < arr[i]) return false;
                }
                return true;
            }
            console.log(isAscending([1,2,3,4,5]));
            console.log(isAscending([1,3,4]));
            console.log(isAscending([1,2,3,4,9,8]));
        


                // question 4     finding the largest even number in an array

            const largestEven = (arr) =>
                Math.max(...arr.filter(num => num % 2 === 0));

            console.log(largestEven([1,6,8]));
            console.log(largestEven([1,44,66,88]));

        
        

                // question 5   repalce a number with string

                const replaceFirstDigit = (str) =>
                    str.replace(/[0-9]/g, '*');             // g indicates global value

                console.log(replaceFirstDigit('Abc14444d2d5d7'));
                console.log(replaceFirstDigit('1234jhsdfbs6jsbdhvb'));
            
            


                // Question 6   if it is a leap year

                const isLeapYear = (year) => year % 4 === 0;

                console.log(isLeapYear(2016));
                console.log(isLeapYear(2017));
                console.log(isLeapYear(2018));
                console.log(isLeapYear(2019));
                console.log(isLeapYear(2020));
                

                // Question 7

                const parseCSV = (csvString) =>
                    csvString.split().map(row => row.split(","));

                const str = ` abc, def, ghi, jkl ,mno, pqr , stu,vwx ,yza`;
                console.log(parseCSV(str));
                


                // Question 8    printing the random Hexadecimal

                const getRandomNum = ()=>
                    Math.floor(Math.random() *10).toString();

                const getRandomColor = ()=>
                    '#' + Array.from({length : 6}).map(getRandomNum).join('');

                console.log(getRandomColor());
                console.log(getRandomColor());
                console.log(getRandomColor());
                

                // Question 9


                const everyElemnt = (arr,fn) => {
                    for(let i=0; i<arr.length; i+=1){
                        if(!fn (arr[i])){
                            return false;
                        }
                    }
                    return true;
                }
                //console.log(everyElemnt([1,2,3,4,5,6],(x) => x > -1));
                console.log(everyElemnt([6,7,8],(x) => x > 7));




                // Question 10

                const alphaBeticaO = (str) =>
                    str.split('').sort((a,b) => a > b ? 1 : -1)             // sort keeps the elements in ascending or descending order
                .join('');                                                 // join () is used to convert Array into string
                console.log(alphaBeticaO('webmaster'));                   //  split brings the space between the words
                console.log(alphaBeticaO('javascript'));
                
            
        
                // question 11

                const alphaBetica = (str) =>
                    str.split('').sort().join('');

                console.log(alphaBetica('hello'));
                
            

                    // question 12

                const countLetters = (str,letters = ['a','e','i','o','u']) =>
                    str.split('').filter(s => letters.indexOf(s) > -1).length;

                console.log(countLetters('aeib'));
                

                    //  question 13    Extracting unique character from a string

            const getUniqueChars = (str) =>
                [...new Set(str.split(''))];    // set keyword gives us a unique character

            console.log(getUniqueChars('aaabbbccc'));
            console.log(getUniqueChars('eeeffgghi'));
            
            
            const getNonRepeatedChars = (str) =>
                str.split('')
                .filter((item ,index, arr) =>
                    arr.filter(arrItem => arrItem === item).length === 1
                );

            console.log(getNonRepeatedChars('abacdebcd'));
            

            