// JavaScript source code
function on_page_load(event) {

    var input_element = document.getElementById("input");
    var overlay_element = document.getElementById("overlay");
    overlay_element.innerHTML = "Name";

    overlay_element.onclick = function (event) {
        overlay_element.classList.add("overlay_animation");
        setTimeout(function () {
            input_element.focus();
        }, 250)
        overlay_element.addEventListener("animationend", function () {
            overlay_element.classList.remove("overlay_animation");
            overlay_element.classList.remove("transform_overlay")
            overlay_element.classList.add("transform_top");
        })
    }

    input_element.onblur = function (event) {
        if (input_element.value == "") {
            overlay_element.classList.add("top_animation");
            overlay_element.addEventListener("animationend", function () {
                overlay_element.classList.remove("top_animation")
                overlay_element.classList.remove("transform_top")
                overlay_element.classList.add("transform_overlay");
            })
        }
    }

}