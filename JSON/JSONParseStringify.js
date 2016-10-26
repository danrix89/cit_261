/************************************
    Sandbox: JSON parse() & stringify()
    parse():        Parses a string value into a JSON object.
    stringify():     Turns a JSON object into a string form.
************************************/



/************************************
    Parse() Happy Paths
************************************/
    // Happy path (not using reviver)
    var string;

    string = '[1, 2, 3, 4]';
    console.log(JSON.parse(string));

    string = '{"Name" : "Dan", "Age" : 27}';
    console.log(JSON.parse(string));

    // Happy path (using reviver)
    JSON.parse('{"Name": "Dan", "Age": 27, "Address": {"Street": "123 Ave.", "City" : "Rexburg", "State": "Idaho", "Zip" : "83340"}}', function (key, value) {
        console.log(key + ":" + value);
    });



/************************************
    Parse() Nasty Paths
************************************/
// Nasty path (Parsing with trailing commas)
    try {
        string = '[1, 2, 3, 4, ]';
        JSON.parse(string);
    }
    catch (exception) {
        console.log(exception + " Unexpected token exception (trailing comma)")
    }

// Nasty path (Trying to parse random strings as JSON)
    try {
        string = 'Hello World';
        JSON.parse(string);
    }
    catch (exception) {
        console.log(exception + " Not JSON")
    }

// Nasty path (empty string)
    try {
        string = '';
        JSON.parse(string);
    }
    catch (exception) {
        console.log(exception + " empty string")
    }

// Nasty path (null)
    try {
        string = null;
        JSON.parse(string);
    }
    catch (exception) {
        console.log(exception + " null")
    }

// Nasty path (number)
    try {
        string = 5;
        JSON.parse(string);
    }
    catch (exception) {
        console.log(exception + " number")
    }

// Nasty path (no parameter)
    try {
        JSON.parse();
    }
    catch (exception) {
        console.log(exception + " no parameter")
    }

// Nasty path (bool)
    try {
        var json = JSON.parse(true);
        console.log(json)
    }
    catch (exception) {
        console.log(exception + " boolean")
    }

// Nasty path (extra parameters)
    function reviver(key, value) {
        // Do Nothing
    }
    try {
        string = '[1, 2, 3, 4]';
        var json = JSON.parse(string, reviver, "", 5, null);
        console.log(json)
    }
    catch (exception) {
        console.log(exception + " extra paremeters")
    }



/************************************
    Stringify() Happy Paths
************************************/
   // Happy path (not using replacer or space)
    var myJsonObject = JSON.parse('{"Name": "Dan", "Age": 27, "Address": {"Street": "123 Ave.", "City" : "Rexburg", "State": "Idaho", "Zip" : "83340"}}');
    var myJsonString;
    myJsonString = JSON.stringify(myJsonObject);
    console.log(myJsonString); // {"Name":"Dan","Age":27,"Address":{"Street":"123 Ave.","City":"Rexburg","State":"Idaho","Zip":"83340"}}


    // Happy path (using replacer, but not space)
    function myReplacer(key, value) {
        if (key == "Age" || value == "Rexburg")
            return "N/A";
        else
            return value;
    }

    myJsonString = JSON.stringify(myJsonObject, myReplacer);
    console.log(myJsonString); // {"Name":"Dan","Age":"N/A","Address":{"Street":"123 Ave.","City":"N/A","State":"Idaho","Zip":"83340"}}

    // Happy path (using space, but not replace parameter)
    myJsonString = JSON.stringify(myJsonObject, null, ' ');
    console.log(myJsonString); // Each element is spaced over only 1 space (sub-elements are space one space again depending on heirarchy)
    myJsonString = JSON.stringify(myJsonObject, null, 10);
    console.log(myJsonString); // Each element is spaced over 10 spaces (sub-elements are spaced another 10 spaces again depending on heirarchy)
    myJsonString = JSON.stringify(myJsonObject, null, '\t');
    console.log(myJsonString); // Each element is tabbed over (sub-elements are tabbed again depending on heirarchy)

    // Happy path (using both replacer and space parameter)
    myJsonString = JSON.stringify(myJsonObject, myReplacer, ' ');
    console.log(myJsonString); // Spaced only one character and Filtered
    myJsonString = JSON.stringify(myJsonObject, myReplacer, 10);
    console.log(myJsonString); // Spaced 10 spaces and Filtered
    myJsonString = JSON.stringify(myJsonObject, myReplacer, '\t');
    console.log(myJsonString); // Tabbed over and Filtered



/************************************
    Stringify() Nasty Paths (Lesson learned: You can stringify anything, so make sure it's actually JSON you're passing in)
************************************/
    // Nasty path??? (Parsing with trailing commas)
    try {
        json = '[1, 2, 3, 4, ]';
        var string = JSON.stringify(json);
        console.log(string + " trailing comma")
    }
    catch (exception) {
        console.log(exception + " trailing comma")
    }

    // Nasty path (Trying to parse random strings as JSON)
    try {
        json = 'Hello World';
        var string = JSON.stringify(json);
        console.log(string + " Not JSON")
    }
    catch (exception) {
        console.log(exception + " Not JSON")
    }

    // Nasty path (empty string)
    try {
        json = '';
        var string = JSON.stringify(json);
        console.log(string + " empty string")
    }
    catch (exception) {
        console.log(exception + " empty string")
    }

    // Nasty path (null)
    try {
        json = null;
        var string = JSON.stringify(json);
        console.log(string + " null")
    }
    catch (exception) {
        console.log(exception + " null")
    }

    // Nasty path (number)
    try {
        json = 5;
        var string = JSON.stringify(json);
        console.log(string + " number")
    }
    catch (exception) {
        console.log(exception + " number")
    }

    // Nasty path (no parameter)
    try {
        var string = JSON.stringify();
        console.log(string + " no parameter")
    }
    catch (exception) {
        console.log(exception + " no parameter")
    }

    // Nasty path (bool)
    try {
        var string = JSON.stringify(true);
        console.log(string + " boolean")
    }
    catch (exception) {
        console.log(exception + " boolean")
    }

    // Nasty path (extra parameters)
    function reviver(key, value) {
        // Do Nothing
    }
    try {
        json = '[1, 2, 3, 4]';
        var string = JSON.stringify(json, reviver, "", 5, null);
        console.log(string + " extra paremeters")
    }
    catch (exception) {
        console.log(exception + " extra paremeters")
    }
