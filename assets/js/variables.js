// var myGameArea = {
//     start : function() {
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//     }
// }

var basket = $('#basket'),
    container = $('.container-fluid'),
    hen = $('.hen'),
    eggs = $('.egg'),
    egg1 = $('#egg1'),
    egg2 = $('#egg2'),
    egg3 = $('#egg3'),

    restart = $('#restart'),
    score_span = $('#score'),
    score_1 = $('#score_1'),
    life_span = $('#life'),
    floor = $('#floor'),
    // leftwall = $('#leftwall'),
    // rightwall = $('#rightwall'),
    basket_height = basket.height(),
    container_height = container.height(),
    egg_height = eggs.height(),
    egg_initial_position = parseInt(eggs.css('top')),
    score = 0,
    life = 5,
    speed = 2,
    max_speed = 15,
    counter = 0,
    score_updated = false,
    the_game = 0,
    anim_id = 0,
    egg_current_position = 0,
    egg_top = 0,
    basket_top = container_height - basket_height,
    sunnysideup_num = 0;
life_span.text(life);

// let eggGroup = ['egg1','egg2','egg3'],