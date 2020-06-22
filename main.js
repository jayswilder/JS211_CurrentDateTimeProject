// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

function numberToString() {
  var num = 10 ;
  var n = num.toString();
  var convertedNumber = "Your number 10 has now been changed to a: " + typeof n
  console.log("This number is now a string: " + n);
  document.getElementById("display-numString").innerHTML = convertedNumber;
}

// numberToString();

// Write a JavaScript program to convert a string to the number.


function stringToNumber() {
  var myString = "20"
  var a = parseInt(myString)
  var convertedString = "Your string of 20 has been changed to a type of: " + typeof a;

  console.log("This string is now a number: " + a);
  console.log(typeof a);
  document.getElementById("display-stringNum").innerHTML = convertedString;
}




// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean - Booleans can only have two values: true or false.
  // * Null - In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
  // * Undefined - A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.
  // * Number - a numeric value such as 16 or -16.5
  // * NaN - is a value representing Not-A-Number. NaN values are generated when arithmetic operations result in undefined or unrepresentable values. Such values do not necessarily represent overflow conditions. A NaN also results from attempted coercion to numeric values of non-numeric values for which no primitive numeric value is available. For example, dividing zero by zero results in a NaN — but dividing other numbers by zero does not.
  // * String - A string (or a text string) is a series of characters like "John Doe". Strings are written with quotes. Example: x = "John 3:16";
  
  function dataTypes() {

    l = document.getElementById('typesList').value;
    // typeBoolean = "Boolean - Booleans can only have two values: true or false.";
    // typeNull = "Null - In JavaScript null is 'nothing'. It is supposed to be something that doesn't exist.";
    // typeUndefined = "Undefined - A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.";
    // typeNumber = "Number - a numeric value such as 16 or -16.5";
    // typeNaN = "NaN - is a value representing Not-A-Number. NaN values are generated when arithmetic operations result in undefined or unrepresentable values. Such values do not necessarily represent overflow conditions. A NaN also results from attempted coercion to numeric values of non-numeric values for which no primitive numeric value is available. For example, dividing zero by zero results in a NaN — but dividing other numbers by zero does not.";
    // typeString = "String - A string (or a text string) is a series of characters. They are written with quotes. Example: x = 'John 3:16'";


      document.getElementById('display-dataTypes').innerHTML = l
    
  }


  
// Write a JavaScript program that adds 2 numbers together.

function addingNumbers() {
  // Get the value of the first number
  a = parseInt(document.getElementById('firstNumber').value);

  // Get the value of the second number
  b = parseInt(document.getElementById('secondNumber').value);

  var addedNumbersText = "The sum of your numbers is: ";
  var addedNumbers = a + b;
  console.log("Adding 2 numbers together: a + b = answer below. ")
  console.log(a + b);
  document.getElementById("display-addNums").innerHTML = addedNumbersText + addedNumbers;
}




// Write a JavaScript program that runs only when 2 things are true.

function twoTrue() {
  x = parseInt(document.getElementById("itemOne").value);
  y = parseInt(document.getElementById("itemTwo").value);

  if (x < 10 && y > 1) {
    document.getElementById("display-trueTwo").innerHTML = "Congratulations! Both inputs fit the conditions!";
  } else {
    document.getElementById("display-trueTwo").innerHTML = "Oh no! Try again!";
  }

}



// Write a JavaScript program that runs when 1 of 2 things are true.

function oneFalse() {
  f = parseInt(document.getElementById("inputOne").value);

  if (f == 10 || f < 5) {
    document.getElementById("display-falseOne").innerHTML = "Congratulations! One of the conditions is met!";
  } else {
    document.getElementById("display-falseOne").innerHTML = "Oh no! Try again!";
  }

}


// Write a JavaScript program that runs when both things are not true.  

function twoFalse() {
  t = parseInt(document.getElementById("valueOne").value);
  u = parseInt(document.getElementById("valueTwo").value);
  
  if (t != 1 && u != 5) {
    document.getElementById("display-falseTwo").innerHTML = "Congratulations! The condition is met!";
  } else {
    document.getElementById("display-falseTwo").innerHTML = "Oh no! One of these statements is true! Try again!";
  }

}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
