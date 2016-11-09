/************
Sandbox Code
***********/

function on_page_load(event) {

    //Happy Path
    document.getElementById("happy").style.color = "Blue";

    document.getElementById("happy").classList.add("arial_font_class");

    document.getElementById("happy").classList.remove("bold");




    // Nasty Paths
    var nasty_messages = "";

    //
    try {
        document.getElementById("nasty").style.color = Red;
    } catch (exception) {
        nasty_messages = nasty_messages + " <br /> " + " Assign a color (no quotes) - Exception thrown: " + exception;
        document.getElementById("nasty").innerHTML = nasty_messages;
    }

    //
    document.getElementById("nasty").style.fontSize = 50;
    nasty_messages = nasty_messages + " <br /> " + " Assign a fontSize to 50 (no quotes)";
    document.getElementById("nasty").innerHTML = nasty_messages;

    //
    document.getElementById("nasty").style.fontSize = null;
    nasty_messages = nasty_messages + " <br /> " + " Assign a fontSize to null";
    document.getElementById("nasty").innerHTML = nasty_messages;

    //
    document.getElementById("nasty").style.fontSize = true;
    nasty_messages = nasty_messages + " <br /> " + " Assign a fontSize to true";
    document.getElementById("nasty").innerHTML = nasty_messages;

    //
    document.getElementById("nasty").style.fontSize = "null";
    nasty_messages = nasty_messages + " <br /> " + " Assign a fontSize to \"null\"";
    document.getElementById("nasty").innerHTML = nasty_messages;

    //
    document.getElementById("nasty").style.fontSize = "true";
    nasty_messages = nasty_messages + " <br /> " + " Assign a fontSize to \"true\"";
    document.getElementById("nasty").innerHTML = nasty_messages;

    // using left or top 
}





