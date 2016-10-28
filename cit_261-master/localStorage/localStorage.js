/************************************

    Sandbox: localStorage API

************************************/



function on_store_button_click()
{
    /************************************
        Happy Paths
    ************************************/
    // Happy path(Simple Data)
    localStorage.setItem("name", "Dan");
    console.log("name: ", localStorage.getItem("name"));

    // Happy path(Array)
    localStorage.setItem("myArray", JSON.stringify([1, 2, 3, 4]));
    console.log("myArray: ", JSON.parse(localStorage.getItem("myArray")));

    // Happy path(Associative Array)
    localStorage.setItem("myAssociativeArray", JSON.stringify({ "id": 1, "name": "Dan", "age": 27 }));
    console.log("myAssociativeArray: ", JSON.parse(localStorage.getItem("myAssociativeArray")).id);

    // Happy path(Object)
    var myObject = { 'id': 1, 'name': "Dan", 'age': 27 };
    localStorage.setItem('myObject', JSON.stringify(myObject));
    var retrievedObject = localStorage.getItem('myObject');
    console.log('myObject: ', JSON.parse(retrievedObject));

    // Happy path(dot notation)
    localStorage.name = "Dan";
    console.log("name (dot notation): ", localStorage.name);

    // Happy path(square bracket)
    localStorage["name"] = "Dan";
    console.log("name (square bracket): ", localStorage.getItem["name"]);



    /************************************
        Strange Nasty Paths
    ************************************/

    // Strange happy path(Passed 'null' for first parameter)
    localStorage.setItem(null, "I'm trying to store this into a 'null' spot");
    console.log("null: ", localStorage.getItem(null));

    // Strange happy path(Passed 'true' for first parameter)
    localStorage.setItem(true, "I'm trying to store this into a 'true' spot");
    console.log("true: ", localStorage.getItem(true));

    // Strange happy path(Passed '1' for first parameter)
    localStorage.setItem(1, "I'm trying to store this into a '1' spot");
    console.log("1: ", localStorage.getItem(true));

    // Strange happy path(Passed '' for first parameter)
    localStorage.setItem("", "I'm trying to store this into a '' spot");
    console.log("empty string: ", localStorage.getItem(""));

    // Strange happy path(Passed an unset key in getItem)
    console.log("Used unset key in getItem: ", localStorage.getItem("BLAH"));



    /************************************
        Nasty Paths
    ************************************/

    // Nasty/Happy path (No value passed as the second parameter for setItem)
    try {
        localStorage.setItem("key");
    }
    catch (exception) {
        console.log(exception + " No value passed as the second parameter for setItem");
    }

    // Nasty/Happy path (No parameters passed in for setItem)
    try {
        localStorage.setItem();
    }
    catch (exception) {
        console.log(exception + " No parameters passed in for setItem");
    }

    // Nasty/Happy path(No parameters passed in for getItem)
    try {
        console.log(localStorage.getItem());
    }
    catch (exception) {
        console.log(exception + " No parameters passed in for getItem");
    }

    document.getElementById("message").innerHTML = "Data has been stored. Please check the console and then CLOSE the browswer and reopen it to 'Check' that your data was stored after the session."
}

function on_storage_check_button_click()
{
    /************************************
        Happy Paths
    ************************************/
    // Happy path(Simple Data)
    // In localStorage.js I used:       localStorage.setItem("name", "Dan");
    console.log("name: ", localStorage.getItem("name"));

    // Happy path(Array)
    // In localStorage.js I used:       localStorage.setItem("myArray", [1, 2, 3, 4]);
    console.log("myArray: ", localStorage.getItem("myArray"));

    // Happy path(Associative Array)
    // In localStorage.js I used:       localStorage.setItem("myAssociativeArray", {"id" : 1, "name" : "Dan", "age" : 27});
    console.log("myAssociativeArray: ", localStorage.getItem("myAssociativeArray"));

    // Happy path(Object)
    // In localStorage.js I used:       var myObject = { 'id': 1, 'name': "Dan", 'age': 27 };
    // In localStorage.js I used:       localStorage.setItem('myObject: ', JSON.stringify(myObject));
    // In localStorage.js I used:       var retrievedObject = localStorage.getItem('myObject');
    console.log('myObject: ', JSON.parse(localStorage.getItem('myObject')));
    document.getElementById("message").innerHTML = "Check the console to see that your data was kept after closing the browser."
}

function on_clear_button_click()
{
    // Clear all storage and start over
    localStorage.clear();
    on_storage_check_button_click();
    document.getElementById("message").innerHTML = "All storage has been cleared!"
}





