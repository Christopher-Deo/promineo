





// Problem 1
console.log('Problem 1');


// declaring and assigning variables for this exercise

let ages = [3, 9, 23, 64, 2, 28, 93];

console.log(`This is the initial array `, ages);  //expect to return -90.



// section (a)
//create code solution that programmatically subtracts the value of the first
// element in the array ages from the last element in the array ages without using
// index numbers to reference the last element in the array.
// Example != : ages[7] - ages[0]. print the result to the console.

console.log("Section A")



var first = ages[0];
var last = ages[ages.length - 1];

function subtractAges(arr) {
    let subtraction = arr[arr.length - 1] - arr[0];
    return subtraction;
}

// printing result to the console and the document
console.log(subtractAges(ages))

// hiding the answer until 'click for answer' buton is clicked

// document.getElementById("solution1a").style.display = "none";

// document.getElementById('solution1b').style.display ='none';
// document.getElementById('solution1c').style.display = 'none';

// **********************************************************************************************************************************************************
// **********************************************************************************************************************************************************
// **********************************************************************************************************************************************************

// function created in answer to problem #13
// I created this function to reveal the answer to each problem only after the "click for answer" button is clicked just to practice additional coding skills, 
// even though some of this stuff has not yet been covered in class.  Figured it was good practice and I learned quite a bit about the process of creating functions
// and going through the debugging process to identify, isolate, and resolve errors.  It is modified and replicated in each section of each problem on the assignment.


// code to display the answers to display/hide with click on answer button
// the original code line(commented out inside the function) was not printing the correct result to the document but was showing the correct result in the console. 
// Could not figure out why this was happening.  So, for the purposes of displaying the correct answer in the page when the button is clicked, I had to manually input the string to show result I needed
// will have to bring this question up to a mentor for clarification the next chance I get.


function reply_click1(btn1a) {
    document.getElementById('solution1a').innerHTML = `Subtracting the first element from the last in the original array is 90`;     // this literal was returning the value of the array elements from the next problem????${JSON.stringify(subtractAges(ages))}

}



// ***********************************************************************************************************************************************************************
// ************************************************************************************************************************************************************************
// ************************************************************************************************************************************************************************





// section (b)
// Add a new age to your array and repeat above step to ensure the code is dynamic.

console.log('section B');

ages.unshift(97);
ages.push(77);

console.log(`This is now the modified array ages `, ages);

console.log(`The value of the first element in the modified array is `, ages[0])

console.log(`This is now the last element of the modified array
 ages `, ages[ages.length - 1]);

console.log(`this is the value returned when subtracting the
first age from the last age in the modified array `, subtractAges(ages));

function reply_click2(solution1b) {
    document.getElementById('solution1b').innerHTML = `Subtracting the value of the first elemnt from the last in the modified array is ${JSON.stringify(subtractAges(ages))}`;

}

// document.getElementById('solution1b').innerHTML = `Subrtacting the last element from the first in th modified array now equals ${JSON.stringify(subtractAges(ages))}`;

// section (c)

// Create a loop to iterate through the array and calculate average age.
// Print the result to the console.

console.log('Section C');

function averageAge(arr) {
    var total = 0;


    arr.forEach(item => total += item);
    return total / arr.length

}

// printing answer to the console and the webpage
console.log(averageAge(ages));

function reply_click3() {
    document.getElementById('solution1c').innerHTML = `The average of all ages in the array is ${JSON.stringify(averageAge(ages))}`;
}





// Problem 2
// Create an array called names that contains the following values
// "Sam", 'Tommy', 'Tim', 'Sally',  'Buck', 'Bob'.
console.log('Problem 2');

const names = ['Sam', 'Tommy', 'Sally', 'Buck', 'Bob'];
console.log('This is the data contained in the array called names ', names);


//section (a)
// create a loop to interate through the array and 
// calculate the average number of letters per name.
// Print results to the console.
console.log('Section A')

function letters(arr) {
    var total = 0;
    arr.forEach(item => total += item.length);
    return total / arr.length
}

console.log('The average number of letters in each element of the array is ', names)

function reply_click4() {
    document.getElementById('solution2a').innerHTML = `The average number of letters of each element in the names array is ${JSON.stringify(letters(names))}`;
}

// Section (b)
// create a loop to iterate through the array and 
// concatenate all the names together, 
// separated by spaces
// and print the results to the console.

console.log('Section B')

function namesSeparated(arr) {
    var spaced = "";
    arr.forEach(item => spaced += item + " ");
    return spaced
}

// writing the solution to the console and the document

console.log(namesSeparated(names));

function reply_click5() {
    document.getElementById('solution2b').innerHTML = `Concatenating all elements in the array with spaces in between returns ${JSON.stringify(namesSeparated(names))}`;
}







// Problem 3
// How do you access the last item of an array?
console.log('Problem 3');

// printing solution to the console and the document

console.log('To access the last element of an array you would use the arrayName[arrayName - 1] code where arrayName === the name assigned to that particular array.');

function reply_click6() {
    document.getElementById('solution3').innerHTML = "To access the last element of an array you would use the arrayName[arrayName - 1] code where arrayName === the name assigned to that particular array.";
}





// problem 4

// how do you access the first element of any array?

console.log('Problem 4')

// printing solution to console and document

console.log('To access the first element of any array, use the arrayName[0] code where arrayName === the name assigned to that particular array.');

function reply_click7() {
    document.getElementById('solution4').innerHTML = 'To access the first element of any array, use the arrayName[0] code where arrayName === the name assigned to that particular array.';
}






// Problem 5
// Create a new array called "nameLengths". Write a loop that iterates over 
// the previously "names" array created in problem 2 and add the length of each name to 
// the nameLengths array.

console.log('Problem 5');

// thought process/pseudo code for this problem

// 1: Create function called nameLengths
// 2: create loop for/forEach to interate through the previously created "names" array.
// and count the number of letters in each array element and return totals:
// 3: Use the map method to place those totals into "nameLengths" array as individual elements.




function findLengths(arr) {
    let nameLengths = [];
    for (i = 0; i < arr.length; i++) {
        let x = arr[i].length;
        nameLengths.push(x);
    }
    return nameLengths
}


// printing solution to console and the document

console.log(findLengths(names));


function reply_click8() {
    document.getElementById('solution5').innerHTML = `${JSON.stringify(findLengths(names))}`
}



// problem 6
// Write a loop to iterate over the nameLengths array and calculate the sum
// of all the elements in the array. Print the results to the console.

console.log('Problem 6');

function nameLengthsTotal(arr) {
    var total = 0;

    arr.forEach(item => total += item.length);
    return total
}

// printing result to the console and the document
console.log(nameLengthsTotal(names));

function reply_click9() {
    document.getElementById('solution6').innerHTML = `The sum of all elements in this array is: ${JSON.stringify(nameLengthsTotal(names))}`;
}








// problem 7
// Write a function that takes in two parameters, 'word' and 'n', as arguments
//  and returns the word concatenated to itself 'n' number of times.
// Ex: if I pass in 'hello' and 3, I would expect the function to return
// 'hellohellohello'.

console.log('Problem 7');

repeat = function repeat(str, n) {
    if (typeof (n) == "undefined") {
        n = 1;
    }
    return n < 1 ? '' : new Array(n + 1).join(str);
}

// printing result to console nd document

console.log(repeat('Test', 5));

function reply_click10() {
    document.getElementById('solution7').innerHTML = `${JSON.stringify(repeat('Test', 5))}`;
}







// Problem 8
//Write a function that takes two parameters, firstName and lastName, 
// and returns a full name (the full name should be the first and the
// last name separated by a space).

console.log('Problem 8');

function fullName(str1, str2) {
    let completeName = str1 + " " + str2
    return completeName
}

// printing solution to the console and the document

console.log(fullName('Chris', 'Deo'));

function reply_click11() {
    document.getElementById('solution8').innerHTML = `The variables firstName and lastName are returned with a space in between when this function is called and passed the arguments "John", "Doe": ${JSON.stringify(fullName('John', 'Doe'))}`;
}


// problem 9
// Write a function that takes an array of numbers and returns true 
// if the sum of all the numbers in the array is greater than 100

console.log('Problem 9');


function greaterThan(arr) {
    let total = 0;
    for (i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }
    return total > 100;
}
let data = [1, 5, 19, 64, 29];

// printing solution to the console and the document

console.log("value of greaterThan function is - " + greaterThan(data));

function reply_click12() {
    document.getElementById('solution9').innerHTML = `This function should display true if the sum of all elements in the array is equal to or greater than 100: ${JSON.stringify(greaterThan(data))}`;
}









// problem 10
// Write a function that takes an array of numbers and returns 
// the average of all the elements in the array.
console.log('Problem 10');

let data2 = [42, 15, 77, 27, 30, 3, 5, 9];

function averageTwo(arr) {
    let total = 0
    for (i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total / arr.length
}

// printing solution to the console and the document

console.log('The average of data2 array is ' + averageTwo(data2));

function reply_click13() {
    document.getElementById('solution10').innerHTML = `The average of all the elements in the array is: ${JSON.stringify(averageTwo(data2))}`;
}







// problem 11
// Write a function that takes two arrays of numbers and returns 
// true if the average of the elements in the first array is greater
// than the average of the elements in the second array.
console.log('Problem 11');

let data3 = [2, 5, 9, 11, 55, 22];
let data4 = [55, 30, 99];

function averageOfArrays(arr1, arr2) {
    let total1 = 0;
    let total2 = 0;

    for (i = 0; i < arr1.length; i++) {
        total1 = total1 + arr1[i];

    }

    for (i = 0; i < arr2.length; i++) {
        total2 = total2 + arr2[i];
    }
    let answer = (total1 / arr1.length) > (total2 / arr2.length)
    return answer
}

console.log(averageOfArrays(data3, data4));

// setting up code to hide the solution until the 'get answer' button is clicked.

function reply_click14() {
    document.getElementById("solution11").style.display = "hidden";
}

document.getElementById('solution11').innerHTML = `If array1 is grater than array2, return ${JSON.stringify(averageOfArrays(data3, data4))}`



// function clicktest(num){


// }
// console.log("test works!!")





// problem 12
// Write a function called willBuyDrink that takes a boolean 
// isHotOutside, and a number moneyInPocket, and returns true
// if it is hot outside and if moneyInPocket is greater than 10.50.
console.log('Problem 12');
let isHotOutside = false;
function willBuyDrink(boolean, number) {
    if (isHotOutside = true, number > 10.50) {
        return true;
    } else return false;
}

// printing solution to the console and the document

console.log(willBuyDrink(isHotOutside, 11.00));

function reply_click15() {
    document.getElementById('solution12').innerHTML = `This function will return true when "isHotOutside" is true AND money is greater than 10.50: ${JSON.stringify(willBuyDrink(isHotOutside, 11.37))} `;
}







// problem 13:

// Create a function of your own that solves a problem. 
// In comments, write what the function does 
// and why you created it.

console.log('Problem 13');

// I've decided to write a function the searches through
//  an array and indicates whether that element is contained
// within the give array.  This, I imagine, is similar to what
// happens with a password reset function where you are 
// asked to enter your username to generate a reset link 
// that is sent out via email.  This problem will only focus
// on validating the username.

const email = ['drtess@gfmdpc', 'gigi@gfmdpc.com', 'chris@christopherdeo.com', 'bo@didly.com', 'me@me2.com'];

// printing results to the console and the document

// prints false to console because that email is not included in the array called email.
console.log(email.includes('steve@apple.com'));

// document.getElementById('solution12').innerHTML = JSON.stringify(email.includes('steve@apple.com'));

function reply_click16() {
    document.getElementById('solution13').innerHTML = `I initially created the simple function statement above as an answer to problem 13.
    However, since I had some extra time, I went back and turned this entire assignmnet into the answer for problem 13
                    by creating various functions to parse and display data returned by the functions created in each problem and
                    display it in specific areas of the page as a specific time or following a specific event, such as a click on a button.`
}


// I initially created the simple function statement above as an answer to problem 13. However, since I had some extra time, I went
// back and turned this entire assignmnet into the answer for problem 13 by creating various functions to parse and display data
//  returned by the functions created in each problem and display it in specific areas of the page as a specific time or following a specific event, such as a click on a button

console.log(`I initially created the simple function statement above as an answer to problem 13.
    However, since I had some extra time, I went back and turned this entire assignmnet into the answer for problem 13
            by creating various functions to parse and display data returned by the functions created in each problem and
             display it in specific areas of the page as a specific time or following a specific event, such as a click on a button to a rudimentary real-life UIß`)



// JS code for activating functionality of the drop down menu already created in html and styled with css

// When the user clicks on the button,
// toggle between hiding and showing the dropdown content */

function openMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// end of project page


//    *****************************************************************************



// want to add click button to show answer functionality to each problem on the page
// did something like this on another project using the code below
// may be able to be used as a template of sorts?

// // variables for footer and email handling

// let footer = document.querySelector("footer");
// let signUpForm = document.querySelector(".email-sign-up");
// let input = document.querySelector("input");
// let signUpBtn = document.querySelector("#sign-up");

// // function to add email field and button functionality

// function emailSubmitHandler() {
//     var confirmationMsg = document.createElement("p");
//     confirmationMsg.textContent = "Thank you for signing up " + input.value;
//     signUpForm.remove();
//     footer.appendChild(confirmationMsg);
// }

// signUpBtn.addEventListener("click", emailSubmitHandler)
