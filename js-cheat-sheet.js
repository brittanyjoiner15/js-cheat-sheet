//Javascript comments - they're like this!

//Printing
console.log('If you want to print something, just put it in here');

//Declaring a variable

var name = 'brittany';
var age = 27;



//Values and Types

Number = 1 ;
Strings = 'Words in parenthesis';
Booeleans = true or false;



//Operators

typeof(10); //tells you what type of number it is;
var tenPlus age = 27 + 10; //var tenPlus will equal 37, can also do math on variables that are nums;
console.log(10 > 8); // Will print true;
console.log('Z' < 'a'); // Converts strings to characterer codes, will print True;
console.log('Apple' < 'Orange'); // Converts first string to character code, will print true;
>= greater or equal
<= less or equal== euqual  // Use an extra equal sign when dealing with numbers
!= not equal // Use an extra equal sign when dealing with numbers
&& means And
|| means Or
! means Not 
? is conditional statement 
console.log(true ? 'a' : 'b'); // Means if criteria is true, return a, if false return b;


//Convert something to another type

String(123);
Number('123');


//Shortcuts for increasing values

a -= 5 is the equivalent of a = a - 5
a++ is the equivalent of a = a = 1


//Conditional Statements

var weather = "foggy";
if (weather == "sunny") {
    console.log("I will go outside and play.");
} else if (weather == "foggy") {
    console.log("A good day to play hide and seek.");
} else {
    console.log("JavaScript is more fun anyway.");
}


//While Loops - keeps going as long as criteria is true

var count = 0;
while (count < 3) { // ( contains criteria ) 
    count = count + 1;
    console.log(count);
}


//Do loops - exeuctes once regardless and then continues while criteria is true

var count = 0;
do {
    count = count + 1;
    console.log(count);
} while (count < 0);


//For loops - when you want something to happen a specific amount of times

for (var i = 0; i < 10; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}


//Breaking loops

1) use a conditional statement 
2) add break; in it
3) use continue; when you want to stop this current iteration and move on to next (use with if)


//Switch - another way to write multiple if statements

    var weather = 'sunny';
    switch (weather) {
        case 'rainy':
            console.log('stay at home');
            break;
        case 'sunny':
            console.log('drink lots of water');
        case 'cloudy':
            console.log('go outside and play');
            break;
        default:
            console.log('not sure what weather this is');
            break;
    }


//Functions - creating one

var square = function (x) {
    return x * x;
};
console.log(square(5));


var greet = function () {
    console.log("Hello World!");
}
greet();

var add = function (x, y) {
    return x + y;
}
add(5, 9);


//Creating arrays

var evenNumbers = [2, 4, 6, 8, 10];
var friends = ['Johnny', 'David', 'Sarah'];

//Accessing values in arrays

console.log(evenNumbers[1]);
var i = 4;
console.log(evenNumbers[i]);

//Iterating through an array
for (var i = 0; i < evenNumbers.length; i++) {
    console.log(zeroPad(evenNumbers[i], 3));
}

//Arrays in arrays

access by doing this: 
console.log(forecasts[0][1]);


//Array methods

array.push('David'); // add to end of array

array.shift() // removes first element in array

array.pop() // removes last element in array

array.unshift('Betty'); // adds to front of array

array.indexOf('Jane'); // see what spot in index first mention of Jane is

array.lastIndexOf('Peter'); // see what spot in index last mention of Peter is

array.slice(0,2); // returns part of array, starts with first one and goes to one before second number, if second number not specified it will go to the end;

array.slice(-3,-1); // can go backwards too

array.join(','); //joins all items in array together in one string with () between them

array.reverse(); //reverses array, doesn't just return a reversed value, it 


//Removing something from a function

var removeCustomer = function (array, name) {
    var index = array.indexOf(name);
    if (index !== -1) {
        return array.slice(0, index).concat(array.slice(index + 1));
    }
    return array;
}
queue = removeCustomer(queue, 'Jane');
console.log(queue);


//String Methods

myString.toUpperCase(); // makes it uppercase

myString.toLowerCase(); // makes it lowercase

myString[1]; // access characters inside a string

myString.charAt(1); // another way to access characters inside a string

myString.charCodeAt(0); // returns character code

String.fromChatChode(65, 66, 67); // create a string from char code numbers

myString.indexOf('e'); // Looks for letter e in string and returns where it's found in first place

myString.lastIndexOf('weather'); // Looks for last instance

myString.slice(5, 8); // return part of string

myString.substring (5, 8); //same as slice, but treats - values as 0

myString.substr(5, 8); // starts at an index and goes on for number characters specified in second argument, if blank, will go through to the end; 

myString.replace ('nice','fantastic') // replace instance of x, with y, but only does first instance

myString.split(' '); // Splits string into an array based on the deliminator you choose

myString.trim(); // Removes whitespace

myString.split(' ').trim() // You can chain methods together


// loop for iterating over a string

var myString = 'The weather is nice';
for (var i = 0; i < myString.length; i++) {
    console.log(myString[i]);
}



// Objects 

var inventory = {
    Milk: 35;
    Eggs: 80;
    'Chocolate Bar': 28;
}

inventory.Milk // to access value of that... will return 35

inventory.Peanut = 11; // create a new property in an object

delete inventory['Ice Cream'] // deletes property

'Peanut' in inventory // sees if property is in an object

inventory.hasOwnProperty('Flour') //same thing as above

// to iterate through an object

for (variable in object) {
  console.log(variable);
}

// Nesting objects

var inventory = {
    '1': {
        name: 'Milk',
        stock: 35,
        price: 2.99
    },
    '2': {
        name: 'Egg',
        stock: 80,
        price: 1.50
    }
}

// Math

Math.round(10.49) // rounds normally, this would return 10

Math.ceil(.91) // rounds up to smallest integer greater or equal

Math.floor(1.95) // rounds down

Math.abs(-1) // returns absolute value, basically removes negatives

Math.trunc(1.23) // doesn't round, just removes things after decimal point

Math.sqrt(16) // returns square root

Math.min(x,y) // returns min value

Math.max(x,y) // returns max value

Math.random() // generates a random number



// Number Objects

Number.isInteger(0.2) // returns true or false if number is integeter/whole number

Number.parseFloat('1.23') // accepts a string and returns floating point number / fractional

Number.parseInt('10',2) // raccepts string and base, and returns integeter

