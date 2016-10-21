/************************************

    Sandbox: Drawing Canvas

************************************/



// Happy path (onload)
function on_load()
{
    setupMyCanvas();
}

// Happy path (touch events)
function setupMyCanvas()
{
    var myCanvas = document.getElementById("myCanvas");
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
        lastCoordinates.x = event.touches[0].pageX //- getOffsetLeft(myCanvas);
        lastCoordinates.y = event.touches[0].pageY //- getOffsetTop(myCanvas);
        console.log("starting x: " + lastCoordinates.x + " starting y: " + lastCoordinates.y)
    }

    // ontouchend
    myCanvas.ontouchend = function(event)
    {
        //lastCoordinates.x = event.touches[0].pageX - getOffsetLeft(myCanvas);
        //lastCoordinates.y = event.touches[0].pageY - getOffsetTop(myCanvas);
    }

    // ontouchmove
    myCanvas.ontouchmove = function (event)
    {
        event.preventDefault();
        var element = document.getElementById("myCanvas");
        myCanvas.style.backgroundColor = "yellow";
        
        // touch coordinates
        var x = event.touches[0].pageX// - getOffsetLeft(myCanvas);
        var y = event.touches[0].pageY// - getOffsetTop(myCanvas);

        // draw
        console.log("context width: " + context.canvas.width + " context height " + context.canvas.height)
        context.beginPath();
        context.strokeStyle = 'black';
        context.moveTo(lastCoordinates.x, lastCoordinates.y);
        context.lineTo(x, y);
        lastCoordinates.x = x;
        lastCoordinates.y = y;
        context.stroke();

        return false;
    }
}

function getOffsetLeft(element) {
    var offsetLeft = 0;
    do
    {
        if (!isNaN(element.offsetLeft))
        {
            offsetLeft += element.offsetLeft;
        }
    } while (element = element.offsetParent);
    return offsetLeft;
}

function getOffsetTop(element) {
    var offsetLeft = 0;
    do
    {
        if (!isNaN(element.offsetTop))
        {
            offsetLeft += element.offsetTop;
        }
    } while (element = element.offsetParent);
    return offsetLeft;
}