var img_path = "./images/catalog/";
var images = 
{"Shanghai at Night.JPG": ["8 burgundy qipao", "5 golden hair ties", "3 high heeled shoes"],
 "River.jpg": ["16 green blue costumes", "14 silver chains", "8 tan ballet shoes"], 
 "Dai.png": ["10 blue costumes", "8 silver head pieces", "3 costume pieces"], 
 "Jasmine.png": ["26 green costumes", "15 pink fans", "6 blue fans"], 
 "FanRibbon.jpg": ["30 blue white costumes", "15 red ribbons", "15 white fans"], 
 "InRain.png": ["14 blue costumes", "14 hand fans", "8 flower hair pins"], 
 "Bloom.jpg": ["18 parasols", "8 black tops", "8 black tights"], 
 "Swag.jpg": ["8 black crop tops", "8 red skirts", "6 small fans"]
};

function create_props_list(dance) {
    var props = images[dance];
    var unordered = $('<ul></ul>');
    for (const prop of props) {
        var p = $('<li></li>');
        p.html(prop);
        p.appendTo(unordered);
    }
    return unordered;
}

function display_gallery() {
    $(document).ready (function () {
        $.each(images, function(key, pic) {
            var d = $('<div class="images" id="' + key + '"></div>');
            var img = $('<img id="pic' + key + '">');
            img.attr('src', img_path + key);
            var overlay = $('<div class="overlay"></div>');
            var text = $('<div class="text"></div>');

            var list = create_props_list(key);
            // console.log(list);
            list.appendTo(text);

            img.appendTo(d);
            text.appendTo(overlay);
            overlay.appendTo(d);
            d.appendTo('#stuff');
        })
    })
}

display_gallery();
