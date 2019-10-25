var nav = {
    'home': 0,
    'mission': 1,
    'curr_dances': 2,
    'costumes': 3,
    'media': 4,
    'calendar': 5,
    'contact': 6
}

function fill_navigation() {
    document.getElementById("nav-bar").innerHTML =
        "<ul>\
            <li><a href=\"index.html\">Home</a></li> \
            <li><a href=\"mission.html\">Mission Statement</a></li> \
            <li><a href=\"dances.html\">Current Dances</a></li> \
            <li><a href=\"costumes.html\">Costumes/Props</a></li> \
            <li><a href=\"media.html\">Media</a></li> \
            <li><a href=\"calendar.html\">Calendar</a></li> \
            <li><a href=\"contact.html\">Contact</a></li> \
        </ul>"
}


function make_active(s) {
    $(document).ready(function() {
        $("#nav-bar li a").eq(nav[s]).addClass("active");
    });
}