// ASSIGNMENT ON VARIABLES
// 1.	To convert Celsius to Fahrenheit, you can use the following formula:
let celsius = 12;
let fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

// 2.	Create a string with the name of your favorite food. The first letter of the string should be capitalized.
const favouriteFood = "Pizza";
console.log(favouriteFood);

// 4.	Build a single string that resembles the following joke.
Why couldn't the shoes go out and play?
They were all "tied" up!

var joke = "Why couldn't the shoes go out and play?\nThey were all \"tied\" up!";
console.log(joke);

// 5.	Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.
let firstLine = "Blowing from the west";
let secondLine = "Fallen leaves gather";
let thirdLine = "In the east";
let haiku = firstLine + "\n" + secondLine + "\n" + thirdLine;
console.log(haiku);

// 6.	Create a variable called fullName and assign it your full name as a string.
var fullName = "Zita Agada"

// 7.	Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.
// Print the total to the JavaScript console.
let numbers = 10.25 + 3.99 + 7.15;
var bill = numbers;
var tip = bill * 0.15;
var total = bill + tip;
console.log(total);

// // 8.	Mad Libs is a word game where players have fun substituting words for blanks in a story. For this exercise, use the adjective variables below to fill in the blanks and complete the following message.
// "The Intro to JavaScript course is __________. James and Julia are so __________. I cannot wait to work through the rest of this __________ content!"

// "The Intro to JavaScript course is __________. 
// James and Julia are so __________. 
// I cannot wait to work through the rest of this __________ content!"
let adjective1 = "amazing";
let adjective2 = "fun";
let adjective3 = "entertaining";
let medLib = "The Intro to JavaScript course is " + adjective1 + " . James and Julia are so " + adjective2 + " . I cannot wait to work through the rest of this" + adjective3 + " content!"
console.log(medLib);

// 9. Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).
let firstName = "Zita";
let interest = "movies";
let hobby = "sleep";
let awesomeMessage = `My name is ${firstName}. I love ${interest}. I like to ${hobby}.`;
console.log(awesomeMessage);



// // ASSIGNMENT ON CONDITIONALS:
// // 1. Write an if...else statement that:
// ●	prints "even" if the number is an even number
// ●	prints "odd" if the number is an odd number
let number = 53;

if (number % 3 === 0) 
{
  console.log("even");
} else {
  console.log("odd");
}

// 2.	Write a series of conditional statements that:
// ●	Prints "not a group" if musicians is less than or equal to 0
// ●	Prints "solo" if musicians is equal to 1
// ●	Prints "duet" if musicians is equal to 2
// ●	Prints "trio" if musicians is equal to 3
// ●	Prints "quartet" if musicians is equal to 4
// ●	Prints "this is a large group" if musicians is greater than 4
const musicians = 1;

if(musicians <= 1) {
 console.log("Not a group");
} else if(musicians === 1) {
  console.log("Solo");
} else if(musicians === 2) {
  console.log("Duet");
} else if(musicians === 3) {
  console.log("Trio");
} else if(musicians === 4) {
  console.log("Quartet");
} else if(musicians > 4) {
  console.log("This is a large group");
}

// 3.	To help solve this mystery, write a combination of conditional statements that:
// 1.	sets the value of weapon based on the room and
// 2.	sets the value of solved to true if the value of room matches the suspect's room
var suspect = "Mr. Parkes"; 

if (suspect === "Mr. Parkes") {
room = "dining room"
  weapon = "knife";
} else if (suspect === "Ms. Van Cleve") {
    room = "gallery"
  weapon = "trophy";
} else if (suspect === "Mrs. Sparr") {
    room = "ballroom"
  weapon = "poison";
} else if (suspect === "Mr. Kalehoff") {
    room = "billiards room"
  weapon = "pool stick";
}

if ((suspect === "Mr. Parkes" && room === "dining room") || 
    (suspect === "Ms. Van Cleve" && room === "gallery") || 
    (suspect === "Mrs. Sparr" && room === "billiards room") || 
    (suspect === "Mr. Kalehoff" && room === "ballroom")) {
  solved = true;
}

if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}


// 4. Checking your balance
// Using the flowchart below, write the code to represent checking your balance at the ATM. The yellow diamonds represent conditional statements and the blue rectangles with rounded corners represent what should be printed to the console.
balance = 325.00;
checkBalance = true;
isActive = false;

if (checkBalance === true) {
  if (isActive && balance > 0) {
    console.log("Your balance is " + balance.toFixed(2) + ".");
  } else if (!isActive) {
    console.log("Your account is no longer active.");
  } else if (balance == 0) {
    console.log("Your account is empty.");
  } else {
    console.log("Your balance is negative. Please contact bank.");
  }
}
else {
    console.log("Thank you. Have a nice day!")
}

// 5. Ice cream is one of the most versatile desserts on the planet because it can be done up so many different ways. Using logical operators, write a series of complex logical expressions that prints only if the following conditions are true:
// ●	if flavor is set to vanilla or chocolate and
// ●	if vessel is set to cone or bowl and
// ●	if toppings is set to sprinkles or peanuts
let flavor = "vanilla";
let vessel = "cone";
var toppings = "cookies";

if ((flavor === "vanilla" || flavor === "chocolate") 
&&
    (vessel === "cone" || vessel === "bowl") 
&&
    (toppings === "sprinkles" || toppings === "peanuts")) 
{
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}


// 6.	Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

var shirtWidth = 23; 
var shirtLength = 30;
var shirtSleeve = 8.71;

if (shirtWidth >=18 && shirtWidth < 20 && shirtLength === 28 && shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
    console.log ("Size Small");
} else if (shirtWidth >=20 && shirtWidth <22 && shirtLength === 29 && shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
    console.log ("Size Medium"); 
} else if (shirtWidth >=22 && shirtWidth <24 && shirtLength === 30 && shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
    console.log ("Size Large"); 
} else if (shirtWidth >=24 && shirtWidth <26 && shirtLength >= 31 && shirtLength < 33 && shirtSleeve >= 8.88 && shirtSleeve < 9.63) {
    console.log ("Size XL"); 
} else if (shirtWidth >=26 && shirtWidth <28 && shirtLength >= 33 && shirtLength < 34 && shirtSleeve >= 9.63 && shirtSleeve < 10.13) {
    console.log ("Size 2XL"); 
} else if (shirtWidth >=28 && shirtWidth <30 && shirtLength >= 34 && shirtSleeve >=10.13) {
    console.log ("Size 3XL"); 
} else {
    console.log ("NA")
}

// 7.	Write a series of ternary statements that sets the variable category equal to:
// ●	"herbivore" if an animal eats plants
// ●	"carnivore" if an animal eats animals
// ●	"omnivore" if an animal eats plants and animals
// ●	"undefined" if an animal doesn't eat plants or animals
var eatsPlants = false;
var eatsAnimals = true;
var conditionOutput = eatsPlants && eatsAnimals ? "omnivore" :
                eatsPlants ? "herbivore" :
                eatsAnimals ? "carnivore" :
                undefined;
console.log(conditionOutput); 


// 8.	Write a switch statement to set the average salary of a person based on their type of completed education.
// Afterwards, print the following to the console.
// In 2015, a person with __________ earned an average of __________/year.

var education = "Associate's degree";
let salary = 0;

switch (education) {
  case "no high school diploma":
    salary = 25636;
    break;
  case "high school diploma":
    salary = 35256;
    break;
  case "Associate's degree":
    salary = 41496;
    break;
  case "Bachelor's degree":
    salary = 59124;
    break;
  case "Master's degree":
    salary = 69732;
    break;
  case "Professional degree":
    salary = 89960;
    break;
  case "Doctoral degree":
    salary = 84396;
    break;
}
console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString('en-US') + "/year.");
