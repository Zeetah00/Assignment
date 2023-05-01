// ASSIGNMENT ON LOOPS 
// 1. Write a while loop that:
// ●	Loop through the numbers 1 to 20
// ●	If the number is divisible by 3, print "Fizz"
// ●	If the number is divisible by 5, print "Buzz"
// ●	If the number is divisible by 3 and 5, print "FizzBuzz"
// ●	If the number is not divisible by 3 or 5, print the number

var x = 1;

while (x <= 20) {
if (x % 3 === 0 && x % 5 === 0) {
console.log("FizzBuzz") ;
  } else if (x % 3 === 0) {
  console.log("Fizz");
  } else if (x % 5 === 0) {
    console.log("Buzz") ;
   
 } else { console.log (x);
}
x++;
}



// 3. Write a while loop that counts down from 60 seconds and:
// ●	If there's a task being completed, it prints out the task
// ●	If there is no task being completed, it prints out the time as T-x seconds

let second = 60;

while (second >= 0) {
  if (second === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (second === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (second === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (second === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (second === 6) {
    console.log("Main engine starts");
  } else if (second === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else {
    console.log("T-" + second + " seconds");
  }
  second--;
}



// 4. Rewrite the following while loop as a for loop:

for (var x = 9; x >= 1; x = x - 1) {
 console.log("Hello " + x);
} 



// 5. Here is a for loop that's supposed to print the numbers 5 through 9. Fix the error!

for (var x = 5; x < 10; x++) {
 console.log(x);
} 


// 6. The for loop below has an error. Fix it!

for (let k = 0; k < 200; k++) {
  console.log(k);
}



// 7. Write a for (note: not a function) loop that prints out the factorial of the number 12:

let result = 1;
for (let f = 1; f <= 12; f++) {
  result = result * f;
}
console.log(result);



// 8.  write a nested for loop to print out all of the different seat combinations in the theater.

for (let r = 0; r < 26; r = r + 1) {
  for (let sn = 0; sn < 100; sn = sn + 1) {
    console.log(r + " - " + sn)
  }
}