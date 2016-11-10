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

    // using left inproperly
    document.getElementById("nasty_two").style.width = "250px";
    document.getElementById("nasty_two").style.height = "250px";
    document.getElementById("nasty_two").style.position = "absolute";
    document.getElementById("nasty_two").style.backgroundColor = "red";
    document.getElementById("nasty_two").style.left = "-100px";
    document.getElementById("nasty_two").style.textAlign = "right";

    // using right inproperly (will not scroll because viewport is set)
    document.getElementById("nasty_three").style.width = "250px";
    document.getElementById("nasty_three").style.height = "250px";
    document.getElementById("nasty_three").style.position = "absolute";
    document.getElementById("nasty_three").style.backgroundColor = "blue";
    document.getElementById("nasty_three").style.right = "-100px";
    document.getElementById("nasty_three").style.textAlign = "left";
}





