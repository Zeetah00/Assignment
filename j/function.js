// 1. Declare a function called laugh() that returns "hahahahahahahahahaha!".
function laugh() {
    return "hahahahahahahahahaha!" ;
}
console.log (laugh());

// 2. Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.
function laugh(num) {
var laughter = "";
for (var i = 0; i<num; i++){
    laughter = "ha";
}
return laughter + "!";
} console.log (laugh(3));

// 3. For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. See the example output below.
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
      line += "* ";
    } return line + "\n";
  }
  
  function buildTriangle(width) {
    var triangle = "";
    for (var i = 1; i <= width; i++) {
      triangle += makeLine;
    }
    return triangle;s
  }  console.log(buildTriangle(10));

//   4. Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
const laugh = function(numOfLaugh) {
let laughter = "";
for (let i = 0; i<numOfLaugh; i++){
    laughter = "ha";
}
return laughter + "!";
} console.log (laugh(3));
  

// 5. Write a named function expression that stores the function in a variable called cry and returns "boohoo!". 
var cry = function (crying) {
return "boohoo!" ;
}
console.log (cry());


// 6. Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc);
}

let laugh = function(numOfLaugh) {
  let laughter = "";
  for (let i = 0; i < numOfLaugh; i++) {
    laughter += "ha";
  }
  return laughter + "!";
};
emotions("happy", laugh(2));


