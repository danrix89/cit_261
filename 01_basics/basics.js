// The Basics

/**********************************************
    Loops 
**********************************************/

// Happy path
for (var index = 0; index < 5; index++)
{
    console.log("Index = " + index);
}

// Nasty path (string index)
for (var index = "a"; index < "z"; index++)
{
    console.log("Index = " + index + " : Strings cannot iterate (\"a\"++ doesn't work)");
}

// Nasty path (boolean index)
for (var index = false; index < true; index++)
{
    console.log("Index = " + index + " : booleans cannot iterate (false++ doesn't work)");
}

// Nasty path (null index)
for (var index = null; index < 1; index++)
{
    console.log("Index = " + index + " : null cannot iterate (null++ doesn't work)");
}

// Nasty path (infinite loop)
for (;;) 
{
    console.log("for (;;) causes an infinite loop");
    break;
}

/**********************************************
    If Statements 
**********************************************/

// Normal Happy Path (0 < 1)
if (0 < 1)
{
    console.log("If Statment: used 0 < 1");
}

// Happy path (bool)
if (true)
{
    console.log("If Statment: used true");
}

// Happy path (string)
if ("a")
{
    console.log("If Statment: used \"a\"");
}

// Happy path (number)
if (1)
{
    console.log("If Statment: used 1");
}

if (null)
{
    console.log("If Statment: used null");
}
else
{
    console.log("Else Statment: used null in the 'if' and null is equal to false");
}

/**********************************************
    Switch Statements 
**********************************************/

// Happy path
switch(0)
{
    case 0:
        console.log("Switch: used number");
}

switch ("a")
{
    case "a":
        console.log("Switch: used string");
}

switch (true)
{
    case true:
        console.log("Switch: used true");
}

switch (null)
{
    case null:
        console.log("Switch: used null");
}

/**********************************************
    Variables 
**********************************************/
var string = "string";
console.log("Variable: 'string' " + string);

var number = 0;
console.log("Variable: 'number' " + number);

var bool = true;
console.log("Variable: 'bool' " + bool);

var nullable = null;
console.log("Variable: 'nullable' " + nullable);

var undefined;
console.log("Variable: 'undefined' " + undefined);


/**********************************************
    Parameters
**********************************************/

function myfunction(parameter)
{
    console.log("Parameters: paremeter passed = " + parameter);
}

myfunction("string");
myfunction(0);
myfunction(true);
myfunction(null);

// Nasty Path (no parameter)
try
{
    myfunction();
}
catch(exception)
{
    console.log("Nasty Path Parameters: no paremeter | " + exception);
}

// Nasty Path (too many parameter)
try
{
    myfunction("too many parameters (A)", "too many parameters (B)");
}
catch (exception) {
    console.log("Nasty Path Parameters: too many paremeter | " + exception);
}

/**********************************************
    Arrays 
**********************************************/

var array = [1, 2, 3];
console.log("Arrays: array = " + JSON.stringify(array));

array = [1, "a", true, null];
console.log("Arrays: array with random junk = " + JSON.stringify(array));

array = [1, "a", true, null, ];
console.log("Arrays: array with trailing comma = " + JSON.stringify(array));

// pop an empty array
array = [];
try {
    array.pop();
    console.log("Popping from empty array (successful)");
} catch (exception) {
    console.log("Popping from empty array: " + exception);
}

array.push(null);
array.push("a")
// push null then push another (check the array)
try {
    for (var i = 0; i < array.length; i++)
    {
        console.log(array[i]);
    }
} catch (exception) {
    console.log("Blah: " + exception);
}

/**********************************************
    Associative Arrays
**********************************************/

var associative_array = { "string": "a", "number": "1", "bool": "true", "nullable": "null" };
console.log("Associative Array: Made with string keys and values " + JSON.stringify(associative_array));

associative_array = { "string": "a", "number": 1, "bool": true, "nullable": null };
console.log("Associative Array: Made with string keys and manifest values " + JSON.stringify(associative_array));

associative_array = { string: "a", number: 1, bool: true, nullable: null };
console.log("Associative Array: Made like an Object " + JSON.stringify(associative_array));

associative_array = { "string": "a", "number": "1", "bool": "true", "nullable": "null", };
console.log("Associative Array: Made with string keys and values and trailing comma " + JSON.stringify(associative_array));

// null key
associative_array = { null: "a", null: 1, null: true, null: null };
console.log("Associative Array: Null keys" + JSON.stringify(associative_array));
