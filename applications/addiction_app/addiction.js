/*************************************************
 * GLOBALS
 ************************************************/
var is_back_spacing = false;



/*************************************************
 * ON PAGE LOAD
 * Initializes the page after all the html has been
 * parsed.
 ************************************************/
function on_page_load(event) {
    // Set the onkeydown to set whether or not the backspace key is being pressed
    document.body.onkeydown = set_is_backspacing;

    // Setup main view and modals
    setup_main_view();
    setup_sign_up_modal();
}

/*************************************************
 * SET IS BACKSPACING
 * Sets the is_backspacing_flag if the key down 
 * event was a backspace key down
 ************************************************/
function set_is_backspacing(event) {
    var key = event.keyCode || event.charCode;

    if (key == 8 || key == 46)
        is_back_spacing = true;
    else
        is_back_spacing = false;
}

/*************************************************
 * SETUP MAIN VIEW
 * Initializes Main View's controls with events.
 ************************************************/
function setup_main_view() {
    // Setup help_button
    var help_button = document.querySelector(".help_button");
    var calculated_window_diameter = window.innerWidth - 100;
    help_button.style.width = calculated_window_diameter + "px";
    help_button.style.height = calculated_window_diameter + "px";
    help_button.style.borderRadius = calculated_window_diameter + "px";
    help_button.style.lineHeight = calculated_window_diameter + "px";
    help_button.ontouchend = on_help_button_press;
}

/*************************************************
 * SETUP SIGN UP MODAL
 * Initializes the sign up modal with its controls
 * and their events.
 ************************************************/
function setup_sign_up_modal() {
    //document.getElementById("sign_up_modal_background").ontouchend = hide_protege_sign_up_modal;

    // Calculate control widths
    var modal_width = window.innerWidth - 150;
    var input_width = modal_width - 100;
    var submit_button_width = Math.floor(input_width / 2);

    // Calculate control heights
    var modal_height = modal_width; // Square shape
    var input_height = Math.floor(modal_height / 6); // 6 spaces (2 buttons + 2 overlays + 1 button)
    var submit_button_height = input_height;

    // Set modal and modal control dimensions
    set_element_dimensions(document.getElementById("sign_up_modal"), modal_width, modal_height);
    set_element_dimensions(document.getElementById("sign_up_modal_name"), input_width, input_height);
    set_element_dimensions(document.getElementById("sign_up_modal_phone"), input_width, input_height);
    set_element_dimensions(document.getElementById("sign_up_modal_submit"), submit_button_width, submit_button_height);
    set_overlay_element_dimensions(document.getElementById("sign_up_modal_name_overlay"), input_width, input_height);
    set_overlay_element_dimensions(document.getElementById("sign_up_modal_phone_overlay"), input_width, input_height);

    // Set position of inputs and submit
    document.getElementById("sign_up_modal_name").style.top = input_height + "px";
    document.getElementById("sign_up_modal_name").style.left = "5%";
    document.getElementById("sign_up_modal_name_overlay").style.top = input_height + "px";
    document.getElementById("sign_up_modal_name_overlay").style.left = "5%";

    document.getElementById("sign_up_modal_phone").style.top = (input_height * 3) + "px";
    document.getElementById("sign_up_modal_phone").style.left = "5%";
    document.getElementById("sign_up_modal_phone_overlay").style.top = (input_height * 3) + "px";
    document.getElementById("sign_up_modal_phone_overlay").style.left = "5%";

    document.getElementById("sign_up_modal_submit").style.top = (input_height * 4 + 100) + "px";
    document.getElementById("sign_up_modal_submit").style.right = "5%";

    // Setup name and phone fields
    setup_sign_up_input_fields_and_overlay("sign_up_modal_name", "Name");
    setup_sign_up_input_fields_and_overlay("sign_up_modal_phone", "Phone");

    // Setup phone mask for phone field
    document.getElementById("sign_up_modal_phone").oninput = apply_phone_mask;
}

/*************************************************
 * SET ELEMENT DIMENSIONS
 * Set the width and height dimensions for an_element
 ************************************************/
function set_element_dimensions(an_element, a_width, a_height) {
    an_element.style.width = a_width + "px";
    an_element.style.height = a_height + "px";
}

/*************************************************
 * SET ELEMENT DIMENSIONS
 * Set the width, height, and line_height dimensions for an_overlay_element
 ************************************************/
function set_overlay_element_dimensions(an_overlay_element, width, height) {
    an_overlay_element.style.width = width + "px";
    an_overlay_element.style.height = height + "px";
    an_overlay_element.style.lineHeight = height + "px";
}

/*************************************************
 * SETUP SIGN UP INPUT FIELD AND OVERLAY
 * Initializes a sign up modal input with its
 * overlay and animation events.
 ************************************************/
function setup_sign_up_input_fields_and_overlay(an_id, a_help_text) {
    var input_element = document.getElementById(an_id);
    var overlay_element = document.getElementById(an_id + "_overlay");
    overlay_element.innerHTML = a_help_text;

    // Setup overlay to bounce up when clicked
    overlay_element.addEventListener("touchend", on_overlay_touch);

    // Setup overlay to bounce back down if input field is empty
    input_element.onblur = function (an_event) {
        if (input_element.value == "") {
            overlay_element.classList.add("top_animation");
            overlay_element.addEventListener("animationend", function () {
                overlay_element.classList.remove("top_animation")
                overlay_element.classList.remove("transform_top")
                overlay_element.classList.add("transform_overlay");
                overlay_element.addEventListener("touchend", on_overlay_touch);
            })
        }
    }

}

/*************************************************
 * ON OVERLAY TOUCH
 * Event that happens when the input overlay is
 * touched.
 ************************************************/
function on_overlay_touch(an_event) {
    an_event.target.classList.add("overlay_animation");
    var id = an_event.target.id;
    var input_element = document.getElementById(id.substr(0, id.length - 8));
    setTimeout(function () {
        input_element.focus();
    }, 250)
    an_event.target.addEventListener("animationend", function () {
        an_event.target.classList.remove("overlay_animation");
        an_event.target.classList.remove("transform_overlay")
        an_event.target.classList.add("transform_top");
        an_event.target.removeEventListener("touchend", on_overlay_touch);
    })
}

/*************************************************
 * APPLY PHONE MASK
 * Applies a phone number formatting mask to the field
 ************************************************/
function apply_phone_mask(event) {
    var phone_number = event.target.value.replace(/[^0-9\.]+/g, '');
    var length = phone_number.length;
    event.target.maxLength = 13; // 10 digits + 1 dash + 2 parenthesis

    // Add () around the area code (first 3 digits)
    if (length == 3 && !is_back_spacing) {
        var number_so_far = phone_number.match(/(\d{3})/);
        event.target.value = '(' + number_so_far[1] + ')';
    }
    // Add a - after the next 3 digits
    else if (length == 6 && !is_back_spacing) {
        var number_so_far = phone_number.match(/(\d{3})(\d{3})/);
        event.target.value = '(' + number_so_far[1] + ')' + number_so_far[2] + '-';
    }
    // Empty out the field if the number is empty (i.e. no numbers)
    else if (phone_number == '') {
        event.target.value = '';
    }
}


/*************************************************
 * ON HELP BUTTON PRESS
 * Event to occur when the help_button is touched
 * (i.e ontouchend).
 ************************************************/
function on_help_button_press(an_event) {
    // Get protege (user) data
    var protege = get_protege_from_local_storage();
    if (protege != null)
    {
        request_mentors(protege);
    } else {
        show_protege_sign_up_modal();
    }
}

/*************************************************
 * GET PROTEGE FROM LOCAL STORAGE
 * Returns protege data (JSON) from localStorage
 ************************************************/
function get_protege_from_local_storage() {
    return localStorage.protege_data;
}

/*************************************************
 * REQUEST MENTORS
 * Using AJAX, a request is made to get a list of
 * mentors from an api holding JSON and then sends
 * that list of mentors (with a_protege) to be
 * contacted.
 ************************************************/
function request_mentors(a_protege) {
    var request = new XMLHttpRequest;
    request.onreadystatechange = function () {
        // This never gets called because I don't have the .json file truly hosted
        if (this.readyState == 4 && this.status == 200) {
            var mentors = JSON.parse(request.responseText);
            contact_mentor(mentors, a_protege);
            // go through the list of mentors and send a text (check every 10 seconds to see if they responded)
        } else if (this.readyState == 4 && this.status == 404) {
            console.log("Ahhh! My JSON api isn't working!");
        }
    }
    request.open("GET", "https://api.myjson.com/bins/59pe0", true);
    request.send();
}

/*************************************************
 * CONTACT MENTOR
 * Calls to the backend to contact a mentor for the protege
 ************************************************/
function contact_mentor(a_mentors, a_protege, a_index) {

    // This is where I would call out to back-end code sending the protege's (user's) info


    // Set a timeout to check if the mentor responded
    setTimeout(function () {
        if (a_index != a_mentors.length) {
            var mentor = a_mentors.mentors[a_index];
            
        }
        a_index++;
    }, 10000);

}

/*************************************************
 * FUNCTION_NAME
 * Description
 ************************************************/
function show_data_capture_modal() {
    var modal = document.getElementById("data_capture_modal_background");
    modal.style.display = "block";
}

/*************************************************
 * FUNCTION_NAME
 * Description
 ************************************************/
function show_protege_sign_up_modal() {
    var modal_view = document.getElementById("sign_up_modal_background");
    modal_view.style.display = "flex";
    modal_view.removeEventListener('animationend', on_animation_end, false);
}

/*************************************************
 * FUNCTION_NAME
 * Description
 ************************************************/
function hide_protege_sign_up_modal() {
    var modal_view = document.getElementById("sign_up_modal_background");
    modal_view.classList.add("modal_disapear");
    modal_view.addEventListener('animationend', on_animation_end);
}

function on_animation_end() {
    var modal_view = document.getElementById("sign_up_modal_background");
    modal_view.style.display = "none";
    modal_view.classList.remove("modal_disapear")
}

/*************************************************
 * FUNCTION_NAME
 * Description
 ************************************************/
function on_submit_protege_data_button(an_event) {

}