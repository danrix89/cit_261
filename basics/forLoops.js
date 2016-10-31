/***********
Sandbox Code
***********/

/**********
Happy paths
**********/

// Happy Path for loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}

/*Nasty infinite loop
for (;;) {
  console.log();
}*/

// Happy path while loop
var i = 0
while (i < 10) {
  console.log("Im a happy while loop");
  i++;
}

// Happy Path IF statement
if(5 < 10) {
  console.log("5 is less than 10");
}

//Nasty
if(5 > 10) {
}

//Nasty
if (5 < "Ten") {
}


// Happy Path Else statement
if (5 < 10) {
  console.log("true");
} else {
  console.log("false");
}

// Happy Path else if statement
var time = new Date().getHours();
if (time < 12) {
  console.log("good morning");
} else if (time < 16) {
  console.log("good afternoon");
} else {
  console.log("good evening");
}

// Happy path function and parameters
function myFunction(p1, p2) {
  var p1 = 1023;
  var p2 = 3082;
  var sum = p1 * p2;
  console.log(myFunction);
}

// Happy Path variable
var x = "Happy";
console.log(x);

// Happy Path Arrays
var numbers = [1,2,3,4];
console.log(numbers);

// Happy Path Associative Arrays
var numbers = [];
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
numbers[3] = 4;
console.log(numbers.length);
console.log(numbers);
