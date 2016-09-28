/************************************

    Sandbox: XMLHTTPRequest

************************************/



/************************************
    Happy Paths
************************************/

// Happy path
var request = new XMLHttpRequest();

request.open("GET", "http://pokeapi.co/api/v2/ability/34/", true);

request.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert("This is Pokeapi reponse data: " + request.responseText);
    }
};

request.send(null);



/************************************
    Parse() Nasty Paths
************************************/
// Nasty path (Parsing with trailing commas)

