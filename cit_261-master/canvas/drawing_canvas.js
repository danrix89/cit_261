/************************************

    Sandbox: Drawing Canvas

************************************/

function on_load()
{
    setupMyCanvas();
}

// Happy path (touch events)
function setupMyCanvas()
{
    var myCanvas = document.getElementById("myCanvas");
    myCanvas.style.backgroundColor = "yellow";
    myCanvas.style.width = "100%";
    myCanvas.style.height = "100%";
    myCanvas.style.backgroundColor = "yellow";

    var lastCoordinates = { x: "0", y: "0" };
    var context = myCanvas.getContext("2d");
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;

    // ontouchstart
    myCanvas.ontouchstart = function(event)
    {
        // Log where you finger first touch so you can draw from there to where you move it to later (if you move it).
        lastCoordinates.x = event.touches[0].pageX
        lastCoordinates.y = event.touches[0].pageY
    }

    // ontouchmove
    myCanvas.ontouchmove = function (event)
    {
        // prevent scrolling with finger touches
        event.preventDefault();
        
        // Log where you moved your finger to (x, y)
        var x = event.touches[0].pageX
        var y = event.touches[0].pageY

        // draw
        context.beginPath();
        context.strokeStyle = 'black';
        context.moveTo(lastCoordinates.x, lastCoordinates.y); // Move the canvas context to the last coordinates (where you finger was last)
        context.lineTo(x, y); // make the line connecting last connecton to your new coordinates
        // Set your last coordinates to remember where you finger was
        lastCoordinates.x = x;
        lastCoordinates.y = y;
        context.stroke(); // draw the line on the screen

        // Return false (only used by MS Internet Explorer
        return false;
    }
}