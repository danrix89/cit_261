/*************************************************
 * TO DO's

 1. Add protege submit validation
 2. Add onblur for views

 * TOPICS COVERED IN THIS APP:

  1. Conditional Statements, Functions, Variables, Parameters, (Arrays, Associative Arrays)
  2. Object Creation Functions, Inheritance, Properties, Methods, Instantiation
  3. JSON Parse, Stringify
  4. Using XMLHTTPRequest to Consume a JSON Web Service
  5. Local Storage API, Storing and Retrieving Simple Data, Arrays, Associative Arrays, and Objects
  // 6. DOM Manipulation Using createElement, appendChild, insertBefore, removeChild, etc.
  7. Manipulating CSS Class Properties Using JavaScript
  8. Creating CSS3 Transitions and Animations in CSS and triggering them with JavaScript
  9. Standard JavaScript Events Including those for Mobile Devices ( Ex. onTouchBegin, onLoad, etc.) and Animation and Transition Events
 // 10. HTML5 Tags - Video, Audio, and Canvas
  11. Designing, Defining, and Triggering CSS3 Transitions without Custom Libraries (Thought Library)
 //12. Designing, Defining, and Triggering CSS3 Transforms without Custom Libraries (Thought Library)
 13. Designing, Defining, and Triggering CSS3 Animations without Custom Libraries (Thought Library)


 ************************************************/

/*************************************************
 * GLOBALS
 ************************************************/
var is_back_spacing = false;

// ID Constants
var help_view_id = "help_view";
var help_button_id = "help_button";

var sign_up_view_id = "sign_up_view";

var getting_help_view_id = "getting_help_view";

var contacted_mentor_view_id = "contacted_mentor_view";

/*************************************************
 * OBJECT DEFINITIONS (CLASSES - SORT OF)
 ************************************************/
// Protege is the base class
function Protege(a_name, a_phone) {
    this.name = a_name;
    this.phone = a_phone;
}

function Mentor(a_name, a_phone, a_provider_url) {
    Protege.call(this, a_name, a_phone);
    this.provider_url = a_provider_url;
}

/*************************************************
 * ON_PAGE_LOAD
 * Initializes the page after all the html has been
 * parsed.
 ************************************************/
function on_page_load(event) {
    // Set the onkeydown to set whether or not the backspace key is being pressed
    document.body.onkeydown = set_is_backspacing;

    // Setup main view and views
    setup_help_view();
    setup_sign_up_view();
}

/*************************************************
 * SET_IS_BACKSPACING
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
 * SETUP_HELP_VIEW
 * Initializes Main View's controls with events.
 ************************************************/
function setup_help_view() {
    // Setup help_button
    var help_view = document.getElementById(help_view_id);

    var help_button = document.getElementById(help_button_id);
    var calculated_button_diameter = (window.innerWidth * .85) + "px";
    help_button.style.width = calculated_button_diameter;
    help_button.style.height = calculated_button_diameter;
    help_button.style.borderRadius = calculated_button_diameter;
    help_button.style.lineHeight = calculated_button_diameter;

    help_button.ontouchstart = on_help_button_press;
}

/*************************************************
 * SETUP_SIGN_UP_VIEW
 * Initializes Main View's controls with events.
 ************************************************/
function setup_sign_up_view() {
    // Setup help_button
    var help_view = document.getElementById(sign_up_view_id);

    help_view.classList.add("hidden_left");

    // Calculate control widths
    var view_width = window.innerWidth;
    var input_width = view_width - 100;
    var submit_button_width = Math.floor(input_width / 2);

    // Calculate control heights
    var view_height = window.innerHeight;
    var input_height = Math.floor(view_height / 6); // 6 spaces (2 buttons + 2 overlays + 1 button)
    var submit_button_height = input_height;

    // Elements
    var sign_up_view = document.getElementById("sign_up_view");
    var sign_up_view_name = document.getElementById("sign_up_view_name");
    var sign_up_view_phone = document.getElementById("sign_up_view_phone");
    var sign_up_view_submit = document.getElementById("sign_up_view_submit");
    var sign_up_view_name_overlay = document.getElementById("sign_up_view_name_overlay");
    var sign_up_view_phone_overlay = document.getElementById("sign_up_view_phone_overlay");

    // Set view and view control dimensions
    set_element_dimensions(sign_up_view, view_width, view_height);
    set_element_dimensions(sign_up_view_name, input_width, input_height);
    set_element_dimensions(sign_up_view_phone, input_width, input_height);
    set_element_dimensions(sign_up_view_submit, submit_button_width, submit_button_height);
    set_overlay_element_dimensions(sign_up_view_name_overlay, input_width, input_height);
    set_overlay_element_dimensions(sign_up_view_phone_overlay, input_width, input_height);

    // Set position of inputs and submit
    sign_up_view_name.style.top = input_height + "px";
    sign_up_view_name.style.left = "5%";
    sign_up_view_name_overlay.style.top = input_height + "px";
    sign_up_view_name_overlay.style.left = "5%";

    sign_up_view_phone.style.top = (input_height * 3) + "px";
    sign_up_view_phone.style.left = "5%";
    sign_up_view_phone_overlay.style.top = (input_height * 3) + "px";
    sign_up_view_phone_overlay.style.left = "5%";

    sign_up_view_submit.style.top = (input_height * 4 + 100) + "px";
    sign_up_view_submit.style.left = "5%";

    // Setup name and phone fields
    setup_sign_up_input_fields_and_overlay("sign_up_view_name", "Name");
    setup_sign_up_input_fields_and_overlay("sign_up_view_phone", "Phone");

    // Setup phone mask for phone field
    document.getElementById("sign_up_view_phone").oninput = apply_phone_mask;

    sign_up_view_submit.onclick = on_sign_up_view_submit_button_press;
}

/*************************************************
 * SETUP_GETTING_HELP_VIEW
 * Initializes Main View's controls with events.
 ************************************************/
function setup_getting_help_view() {
    // Setup help_button
    var help_view = document.getElementById(getting_help_view_id);

    // Calculate control widths
    var view_width = window.innerWidth;
    var input_width = view_width - 100;
    var submit_button_width = Math.floor(input_width / 2);

    // Calculate control heights
    var view_height = window.innerHeight;
    var input_height = Math.floor(view_height / 6); // 6 spaces (2 buttons + 2 overlays + 1 button)
    var submit_button_height = input_height;

    // Elements
    var sign_up_view = document.getElementById("sign_up_view");
    var sign_up_view_name = document.getElementById("sign_up_view_name");
    var sign_up_view_phone = document.getElementById("sign_up_view_phone");
    var sign_up_view_submit = document.getElementById("sign_up_view_submit");
    var sign_up_view_name_overlay = document.getElementById("sign_up_view_name_overlay");
    var sign_up_view_phone_overlay = document.getElementById("sign_up_view_phone_overlay");

    // Set view and view control dimensions
    set_element_dimensions(sign_up_view, view_width, view_height);
    set_element_dimensions(sign_up_view_name, input_width, input_height);
    set_element_dimensions(sign_up_view_phone, input_width, input_height);
    set_element_dimensions(sign_up_view_submit, submit_button_width, submit_button_height);
    set_overlay_element_dimensions(sign_up_view_name_overlay, input_width, input_height);
    set_overlay_element_dimensions(sign_up_view_phone_overlay, input_width, input_height);

    // Set position of inputs and submit
    sign_up_view_name.style.top = input_height + "px";
    sign_up_view_name.style.left = "5%";
    sign_up_view_name_overlay.style.top = input_height + "px";
    sign_up_view_name_overlay.style.left = "5%";

    sign_up_view_phone.style.top = (input_height * 3) + "px";
    sign_up_view_phone.style.left = "5%";
    sign_up_view_phone_overlay.style.top = (input_height * 3) + "px";
    sign_up_view_phone_overlay.style.left = "5%";

    sign_up_view_submit.style.top = (input_height * 4 + 100) + "px";
    sign_up_view_submit.style.left = "5%";

    // Setup name and phone fields
    setup_sign_up_input_fields_and_overlay("sign_up_view_name", "Name");
    setup_sign_up_input_fields_and_overlay("sign_up_view_phone", "Phone");

    // Setup phone mask for phone field
    document.getElementById("sign_up_view_phone").oninput = apply_phone_mask;

    sign_up_view_submit.onclick = on_sign_up_view_submit_button_press;
}

/*************************************************
 * SET_ELEMENT_DIMENSIONS
 * Set the width and height dimensions for an_element
 ************************************************/
function set_element_dimensions(an_element, a_width, a_height) {
    an_element.style.width = "95%";//a_width + "px";
    an_element.style.height = a_height + "px";
}

/*************************************************
 * SET_OVERLAY_ELEMENT_DIMENSIONS
 * Set the width, height, and line_height dimensions for an_overlay_element
 ************************************************/
function set_overlay_element_dimensions(an_overlay_element, width, height) {
    an_overlay_element.style.width = width + "px";
    an_overlay_element.style.height = height + "px";
    an_overlay_element.style.lineHeight = height + "px";
}

/*************************************************
 * SETUP_SIGN_UP_INPUT_FIELDS_AND_OVERLAY
 * Initializes a sign up view input with its
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
 * ON_OVERLAY_TOUCH
 * Event that happens when the input overlay is
 * touched.
 ************************************************/
function on_overlay_touch(an_event) {
    an_event.target.classList.add("overlay_animation");
    var id = an_event.target.id;
    var input_element = document.getElementById(id.substr(0, id.length - 8));
    setTimeout(function () {
        input_element.focus();
    }, 250);
    an_event.target.addEventListener("animationend", function () {
        an_event.target.classList.remove("overlay_animation");
        an_event.target.classList.remove("transform_overlay")
        an_event.target.classList.add("transform_top");
        an_event.target.removeEventListener("touchend", on_overlay_touch);
    })
}

/*************************************************
 * APPLY_PHONE_MASK
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
 * ON_HELP_BUTTON_PRESS
 * Event to occur when the help_button is touched
 * (i.e ontouchend).
 ************************************************/
function on_help_button_press(an_event) {

    // Get protege (user) data
    var protege_data = get_protege_data_from_local_storage();

    // Sweep button to the left
    sweep_view_out("help_view");

    if (protege_data != null) {
        var protege_object = new Protege(protege_data.name, protege_data.phone);

        document.getElementById("getting_help_view_message").innerHTML = "We are contacting a mentor for you right now.";
        sweep_view_in("getting_help_view");

        request_mentors(protege_object);
    } else {
        sweep_view_in("sign_up_view");
    }
}

function sweep_view_out(an_id)
{
    var view = document.getElementById(an_id);
    if (an_id == null) {
        view = document.getElementById(this);
    }

    if (view.classList.contains("fade_in")) {
        view.classList.remove("fade_in");
    }

    view.classList.add("fade_out");
}

function sweep_view_in(an_id) {
    var view = document.getElementById(an_id);
    if (an_id == null) {
        view = document.getElementById(this);
    }

    if (view.classList.contains("fade_out")) {
        view.classList.remove("fade_out");
    }

    view.classList.add("fade_in");
}

/*************************************************
 * GET_PROTEGE_DATA_FROM_LOCAL_STORAGE
 * Returns protege data (JSON) from localStorage
 ************************************************/
function get_protege_data_from_local_storage() {
    return localStorage.protege_data;
}

/*************************************************
 * REQUEST_MENTORS
 * Using AJAX, a request is made to get a list of
 * mentors from an api holding JSON and then sends
 * that list of mentors (with a_protege) to be
 * contacted.
 ************************************************/
function request_mentors(a_protege_object) {
    var request = new XMLHttpRequest;
    request.onreadystatechange = function () {
        // This never gets called because I don't have the .json file truly hosted
        if (this.readyState == 4 && this.status == 200) {
            var mentors = JSON.parse(request.responseText);
            contact_mentor(mentors, a_protege_object, 0);
            // go through the list of mentors and send a text (check every 10 seconds to see if they responded)
        } else if (this.readyState == 4 && this.status == 404) {
            alert("Sorry: Cannot contact mentors");
        }
    }
    request.open("GET", "https://api.myjson.com/bins/59pe0", true);
    request.send();
}

/*************************************************
 * CONTACT_MENTOR
 * Calls to the backend to contact a mentor for 
 * the protege
 ************************************************/
function contact_mentor(a_mentors, a_protege_object, a_index) {
    /* 
        This is where I send the protege data (name & number) off to 
        the back-end to contact a mentor from list of mentors

        However, since I don't have a server set up to handle that,
        I will choose the first mentor and pretend he was contacted.

        Just for an example the following is used to show how the mentor contact works:
    */

    // First, a fake Mentor fromt the mentor that was confirmed
    var mentor_data = a_mentors.mentors[0];
    var mentor_object = new Mentor(mentor_data.name, mentor_data.phone, mentor_data.provider_url);

    // Second, setup the message to be displayed
    var mentor_contacted_view_message = document.getElementById("mentor_contacted_view_message");
    mentor_contacted_view_message.innerHTML = mentor_object.name + " will contact you shortly.";

    // Third, show mentor contacted view after a delay
    setTimeout(function () {
        sweep_view_out("getting_help_view");

        sweep_view_in("mentor_contacted_view");
    }, 3000); // 3 Seconds
}

/*************************************************
 * ON_SIGN_UP_MODAL_SUBMIT_BUTTON_PRESS
 * Events for when the sign up view submit button
 * is pressed
 ************************************************/
function on_sign_up_view_submit_button_press(an_event) {
    var sign_up_view_name = document.getElementById("sign_up_view_name");
    var sign_up_view_phone = document.getElementById("sign_up_view_phone");
    var phone_number_value = sign_up_view_phone.value.replace(/[^0-9\.]+/g, '');

    if (phone_number_value.length == 10 && sign_up_view_name.value != "") {
        sweep_view_out("sign_up_view");
        var protege = localStorage.protege_data = JSON.stringify({ "name": sign_up_view_name.value, "phone": phone_number_value });
        document.getElementById("getting_help_view_message").innerHTML = "We are contacting a mentor for you right now"

        sweep_view_in("getting_help_view");

        request_mentors(protege);        
    }
    else {
        // Setup input validation
        if (sign_up_view_name.value == "") {
            sign_up_view_name.focus();
        } else if (phone_number_value.length != 10) {
            sign_up_view_phone.focus();
        }
    }
}
