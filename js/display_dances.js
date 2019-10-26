function dance(name, coach, meeting, desc) {
    this.name = name;
    this.coach = coach;
    this.meeting = meeting;
    this.desc = desc;
}

var dance_names = ["Ethnic Fan", "Scholar", "Umbrella Fusion", "Sword", "Retro Hip Hop", "Love Song Medley", "Butterfly Lovers"];
var coach_names = ["Chu Ling", "Li", "Addy, Phoebe", "Kaede", "Fei Hong", "Various", "Rhea"];
var meeting = ["Jackson, Sun 4-6", "Harleston, Sat 5-7", "Harleston, Fri 5-7", "Jackson, Sat 2-4", "Harleston, Sun 2-2", "Harleston, Sun 12-2", "TBD, Set for Spring Semester"];
var descriptions = 
["A large group dance meant to explore one of the most traditional and celebrated dances in Chinese culture, the fan dance. Having a long, well respected history, the fan dance has evolved into many distinct versions as various ethnic groups incorporated their own styles into the original base elements. This dance pays homage to that diversity and to the underlying message of passion and pride that has been carried down from the original art form.",
 "A witty and entertaining dance, this piece is based on a short skit about a group of young scholars attending the fabled Confucius Institute. Follow along with these students as they go about their daily life, rising up with the rooster in the morning, strengthening their minds and bodies, and enjoying their youth, along with the shenanigans that come with it!",
 "Incorporating modern dance and striking parasol techniques, this dance lives up to its name by fusing together traditional Chinese melodies with dramatic beats. Meant to awe and inspire viewers, a spectacular.",
 "Originally intended as training exercises for soldiers, the sword dance has since claimed the stage and captivated audiences through acrobatic displays, flowing movements, skillful maneuvers and expressions of heroic power. In fact, the tenacious graceful style of the famous sword dancer, Lady Gongsun, was said to have inspired the unique cursive calligraphy of Zhang Xu. Come watch as we show bow beauty and danger are 2 sides of the same coin!",
 "This particular piece is an energetic and fun dance bringing together the animated style of hip hop with Chinese pop. Filled with upbeat music, rhythm, acrobatic elements, and most importantly, style, this dance is sure to get you dancing along and laughing as the performers have the time of their lives telling a story on the stage.",
 "Excerpts of 3 popular love songs come together to celebrate what love means and its important place in our lives. A special gift to our audiences, old and new, and to our members. This is our thank you to everyone who has ever supported us, either by watching our performances, helping us out, or rooting for us from the crowd.",
 "A tribute to the iconic Butterfly Lovers legend, the Chinese Romeo and Juliet love story whose songs are famous throughout East Asia. Slow sweeping fan movements and gentle gestures paint the tale of a determined girl, Zhu Yingtao, who kindles a deep friendship and eventually love with a classmate, Ling Shanbo."
];
var last_index = 0;
dances = new Array();

for (var i = 0; i < dance_names.length; i++) {
    dances.push(new dance(dance_names[i], coach_names[i], meeting[i], descriptions[i]));
}

function display_dances() {
    for (i = last_index; i < dances.length; i++) {
        structure_dance(i);
    }
    last_index = i;
}

function structure_dance(index) {
    var d = $(
    '<div class="column" id="d' + index + '">\
            <h3 class="title" style="color:#eee;"></h3>\
            <p><i>Coach</i>: <span></span></p>\
            <p><i>Time</i>: <span></span></p>\
            <p><i>Description</i>: <span></span></p>\
        </div>')
    d.appendTo("#dances");
    fade_replace(index, index);
}

// run when button is clicked
function fade_replace(i1, i2) {
    var curr_d = $("#d" + i2);
    curr_d.fadeOut("slow", function() {
        curr_d.find(".title").html(dances[i1 % dance_names.length].name);
        curr_d.find("span").eq(0).html(dances[i1 % dance_names.length].coach);
        curr_d.find("span").eq(1).html(dances[i1 % dance_names.length].meeting);
        curr_d.find("span").eq(2).html(dances[i1 % dance_names.length].desc);
        curr_d.fadeIn("slow");
    });
}
