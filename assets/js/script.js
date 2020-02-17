/*Simplest Possible Way:

 function repeatOften() {
  $("<div />").appendTo("body");
  requestAnimationFrame(repeatOften);
 }
  requestAnimationFrame(repeatOften);


 
 Polyfill: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/ to run this in any browser
*/

$(function () {

    the_game = function () {


        if (check_egg_hits_floor(egg1) || check_egg_hits_basket(egg1)) {
            set_egg_to_initial_position(egg1);
        } else {
            egg_down(egg1);
        }

        if (check_egg_hits_floor(egg2) || check_egg_hits_basket(egg2)) {
            set_egg_to_initial_position(egg2);
        } else {
            egg_down(egg2);
        }

        if (check_egg_hits_floor(egg3) || check_egg_hits_basket(egg3)) {
            set_egg_to_initial_position(egg3);
        } else {
            egg_down(egg3);
        }


//-------------------------------------------------------------------basket_game-------//
// $(function () {

//     the_game = function () {

//         if (check_basket_hit_wall(basket)) {
//             bounce_change_direcion
//         } else 
//             move_in_direction
//         }


        /*if/else statement per egg. Can you this like an array? or not be cause you need to make the eggs drop all at the
        same time?*/

        if (life > 0) {
            anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
        }
    };

    anim_id = requestAnimationFrame(the_game);

});

// $(function() {

//     the_game = function () {
         
//         if (check_egg_hits_floor(eggGroup) || check_egg_hits_basket(eggGroup)) {
//             set_egg_to_initial_position(eggGroup);
//         } else {
//             egg_down(eggGroup);
//         }
//     }

//     anim_id = requestAnimationFrame(the_game);

// })