function dance(name, coach, meeting) {
    this.name = name;
    this.coach = coach;
    this.meeting = meeting;
}

var dance_names = ["Ethnic Fan", "Scholar", "Umbrella Fusion", "Sword", "Retro Hip Hop", "Vintage Chinese Song Medley", "Butterfly Lovers 梁祝"];
var coach_names = ["Chu Ling", "Li", "Addy, Phoebe", "Kaede", "Fei Hong", "Various", "Rhea"];
var meeting = ["Jackson, Sun 1 - 4", "Harleston, Sat 5 -7", "Harleston, Fri 4 - 7", "Jackson, Sat 2 - 4", "Harleston, Sun 3 - 4", "Harleston, Sun 12 - 3", ""];
var last_index = 0;
dances = new Array();

for (var i = 0; i < dance_names.length; i++) {
    dances.push(new dance(dance_names[i], coach_names[i], meeting[i]));
}

function display_dances() {
    for (i = last_index; i < 4; i++) {
        structure_dance(i);
    }
    last_index = i;
    var button = $('<input type="button" name="next" value="Next" id="next">')
    button.bind("click", function() {
        for (var i = 0; i < 4; i++) {
            var index = last_index + i;
            fade_replace(index, i);
        }
        last_index += i;
    });
    button.appendTo("#dances");
}

function structure_dance(index) {
    var d = $(
    '<div class="column" id="d' + index + '">\
            <h3 class="title" style="color:#eee;"></h3>\
            <p><i>Coach</i>: <label></label></p>\
            <p><i>Time</i>: <label></label></p>\
        </div>')
    d.appendTo("#dances");
    fade_replace(index, index);
}

// run when button is clicked
function fade_replace(i1, i2) {
    var curr_d = $("#d" + i2);
    curr_d.fadeOut("slow", function() {
        console.log(dances[i1 % dance_names.length].name + " " + dances[i1 % dance_names.length].coach);
        curr_d.find(".title").html(dances[i1 % dance_names.length].name);
        curr_d.find("label").eq(0).html(dances[i1 % dance_names.length].coach);
        curr_d.find("label").eq(1).html(dances[i1 % dance_names.length].meeting);
        curr_d.fadeIn("slow");
        console.log(i1);
    });
}
