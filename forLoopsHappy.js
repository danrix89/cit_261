/***********
Sandbox Code
***********/

/**********
Happy Path for loop
**********/
for (var i = 0; i < 10; i++) {
    console.log(i);
}
/*********
Happy path while loop
*********/
var i = 0
while (i < 10) {
  console.log("Im a happy while loop");
  i++;
}
/********
Happy path do While loop
********/
var i = 0;
do {
  console.log("Im a happy do while loop");
}
while(i < 10);
/*******
Happy Path IF statement
*******/
if(5 < 10) {
  console.log("true");
}
/*******
Happy Path Else statement
*******/
if (5 < 10) {
  console.log("true");
} else {
  console.log("false");
}
/******
Happy Path else if statement
******/
var time = new Date().getHours();
if (time < 12) {
  console.log("good morning");
} else if (time < 16) {
  console.log("good afternoon");
} else {
  console.log("good evening");
}
/******
Happy path function
******/
function myFunction(p1, p2) {
  var p1 = 1023;
  var p2 = 3082;
  var sum = p1 * p2;
  console.log(myFunction);
}
/******
Happy Path variable
******/
var x = "Happy";
console.log(x);
