// JavaScript source code
function on_page_load(event) {

    /*************************************************************** 
        Happy Paths 
    ***************************************************************/

    /* Transition Box */
    var transtion_box = document.getElementById("transition_box");
    transtion_box.onclick = function () {
        if (transtion_box.classList.contains("transition_box_click")) {
            transtion_box.classList.remove("transition_box_click");
        } else {
            transtion_box.classList.add("transition_box_click");
        }
    }

    /* Animation Box */
    /*
        animation-name
        animation-duration
        animation-timing-function
        animation-delay
        animation-iteration-count
        animation-direction
        animation-fill-mode
        animation-play-state
    */
    var animation_box = document.getElementById("animation_box");
    animation_box.onclick = function () {
     // animation_box.style.animation = "Name  Duration Timing       Delay Iteration-count Direction Fill-mode Play-state";
        animation_box.style.animation = "happy 5000ms   ease-in-out  .5s    3               normal    none      running";
    }


    /*************************************************************** 
        Nasty Paths 
    ***************************************************************/

    // Create the nasty boxes
    let number_of_nasty_path_boxes = 12;
    let container = document.getElementById("nasty_container");
    for (let i = 1; i <= number_of_nasty_path_boxes; i++)
    {
        let div = document.createElement("div");
        div.id = "box_" + i;
        div.classList.add("nasty_box");
        div.innerHTML = i;
        container.appendChild(div);
    }




    /* Box 1 */
    var box_1 = document.getElementById("box_1");
    box_1.onclick = function () {
        let animation_string = "blah 1000ms ease-in-out .5s 3 normal none running";
        box_1.style.animation = animation_string;
        console.log("ERROR - using an animation name that doesn't exist: " + animation_string)
    }

    /* Box 2 */
    var box_2 = document.getElementById("box_2");
    box_2.onclick = function () {
        let animation_string = "1000ms ease-in-out .5s 3 normal none running";
        box_2.style.animation = animation_string;
        console.log("ERROR - forgot the animation name: " + animation_string)
    }

    /* Box 3 */
    var box_3 = document.getElementById("box_3");
    box_3.onclick = function () {
        let animation_string = "nasty ease-in-out .5s 3 normal none running";
        box_3.style.animation = animation_string;
        console.log("ERROR - forgot the duration: " + animation_string)
    }

    /* Box 4 */
    var box_4 = document.getElementById("box_4");
    box_4.onclick = function () {
        let animation_string = "nasty -1000ms ease-in-out .5s 3 normal none running";
        box_4.style.animation = animation_string;
        console.log("ERROR - negative duration" + animation_string)
    }

    /* Box 5 */
    var box_5 = document.getElementById("box_5");
    box_5.onclick = function () {
        let animation_string = "nasty 1000ms .5s 3 normal none running";
        box_5.style.animation = animation_string;
        console.log("ERROR - forgot timing: " + animation_string)
    }

    /* Box 6 */
    var box_6 = document.getElementById("box_6");
    box_6.onclick = function () {
        let animation_string = "nasty 1000ms ease-in-out -.5s 3 normal none running";
        box_6.style.animation = animation_string;
        console.log("ERROR - negative delay: " + animation_string)
    }

    /* Box 7 */
    var box_7 = document.getElementById("box_7");
    box_7.onclick = function () {
        let animation_string = "nasty 1000ms ease-in-out .5s -3 normal none running";
        box_7.style.animation = animation_string;
        console.log("ERROR - negative iteration: " + animation_string)
    }

    /* Box 8 */
    var box_8 = document.getElementById("box_8");
    box_8.onclick = function () {
        let animation_string = "nasty 1000ms ease-in-out .5s normal none running";
        box_8.style.animation = animation_string;
        console.log("ERROR - missing iteration: " + animation_string)
    }

    /* Box 9 */
    var box_9 = document.getElementById("box_9");
    box_9.onclick = function () {
        let animation_string = "nasty 1000ms ease-in-out .5s 3 none running";
        box_9.style.animation = animation_string;
        console.log("ERROR - missing direction: " + animation_string)
    }

    /* Box 10 */
    var box_10 = document.getElementById("box_10");
    box_10.onclick = function () {
        let animation_string = "nasty 1000ms ease-in-out .5s 3 normal none paused";
        box_10.style.animation = animation_string;
        console.log("ERROR - play-state paused: " + animation_string)
    }

    /* Box 11 */
    var box_11 = document.getElementById("box_11");
    box_11.onclick = function () {
        let animation_string = "nasty_empty 1000ms ease-in-out .5s 3 normal none paused";
        box_11.style.animation = animation_string;
        console.log("ERROR - no key frames: " + animation_string)
    }

    /* Box 12 */
    var box_12 = document.getElementById("box_12");
    box_12.onclick = function () {
        let animation_string = "nasty_out_of_order 1000ms ease-in-out .5s 3 normal none paused";
        box_12.style.animation = animation_string;
        console.log("ERROR - keyframes out of order: " + animation_string)
    }
}
