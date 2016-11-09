
var boxen = document.querySelectorAll(".box")

// Set the initial closest box to the first of the boxes
var closestBox = boxen[0];
var is_being_touched = false;

window.ontouchstart = function (event) {
    is_being_touched = true;
}

window.ontouchend = function (event) {
    is_being_touched = false;
}

window.ontouchcancel = function (event) {
    is_being_touched = false;
}
  
window.onscroll = function (event) {
    let last_scroll_index = document.body.scrollTop;
    setTimeout(function() 
    {
        var current_scroll_index = document.body.scrollTop;
        if (!is_being_touched && current_scroll_index == last_scroll_index)
        {
            boxen.forEach(function(box)
            {
                if (Math.abs(box.offsetTop - current_scroll_index) < Math.abs(closestBox.offsetTop - current_scroll_index))
                {
                    closestBox = box;
                    closestBox.classList.add("full");
                    document.body.scrollTop = closestBox.offsetTop;
                }
                else if (box != closestBox)
                {
                    box.classList.remove("full");
                }
            })
        }
    }, 20);

}



