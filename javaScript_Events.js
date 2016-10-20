/************************************

    Sandbox: localStorage API

************************************/


/************************************
    Happy Paths
************************************/

// Happy path (onload)
function on_load() {
    document.getElementById("message").innerHTML = "onload used the 'on_load' function."
    setupMyCanvas();
}
// Happy path (onchange)
function on_change() {
    var element = document.getElementById("on_change");

    if (element.style.backgroundColor == "white")
        element.style.backgroundColor = "yellow";
    else
        element.style.backgroundColor = "white";
}

// Happy path (on_click)
function on_click()
{
    var element = document.getElementById("on_click");

    if (element.style.backgroundColor == "white")
        element.style.backgroundColor = "yellow";
    else
        element.style.backgroundColor = "white";
}

// Happy path (touch events)
function setupMyCanvas()
{
    var myCanvas = document.getElementById("myCanvas");

    // ontouchstart
    myCanvas.ontouchstart = function (event)
    {
        myCanvas.style.transitionDuration = "1s";
        var touchCount = event.touches.length;
        if (touchCount == 1)
        {
            myCanvas.style.backgroundColor = "blue";
        }
        else if (touchCount == 2)
        {
            myCanvas.style.backgroundColor = "pink";
        }
        else if (touchCount == 3)
        {
            myCanvas.style.backgroundColor = "green";
            myCanvas.style.width = "100%";
        }
    }

    // ontouchend
    myCanvas.ontouchend = function (event)
    {
        var touchCount = event.touches.length;
        if (touchCount == 0) {
            myCanvas.style.backgroundColor = "#dbdbdb";
            event.currentTarget.style.border = "0px";
        }
        else if (touchCount == 1) {
            myCanvas.style.backgroundColor = "blue";
        }
        else if (touchCount == 2) {
            myCanvas.style.backgroundColor = "pink";
            myCanvas.style.width = "700px";
        }
        else if (touchCount == 3) {
            myCanvas.style.backgroundColor = "green";
            myCanvas.style.width = "100%";
        }
    }

    // ontouchmove
    myCanvas.ontouchmove = function (event)
    {
        var element = document.getElementById("myCanvas");
        myCanvas.style.backgroundColor = "yellow";
    }
}

/************************************
    Nasty Paths
************************************/



