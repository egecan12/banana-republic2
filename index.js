var img = document.querySelector(".img");
var img2 = document.querySelector(".img2");
var img3 = document.querySelector(".img3");
var img4 = document.querySelector(".img4");
var img5 = document.querySelector(".img5");
var img6 = document.querySelector(".img6");
var img7 = document.querySelector(".img7");
var img8 = document.querySelector(".img8");

const tl = new TimelineMax({})

TweenMax.to(img, 3, {

    y: 1000,
    rotation: 322,
    repeat:100,


});



TweenMax.to(img2, 2, {

    y: 800,
    rotation: 42,
    ease: SlowMo.ease.config(0.2, 0.2, false),
    repeat:100
    
});
 




TweenMax.to(img3, 2, {

    y: 1000,
    repeat: 100,
    rotation: 122,



});

TweenMax.to(img4, 6, {

    y: 1000,
    repeat: 100,
    rotation: 275,



});

TweenMax.from(img5, 3, {

    y: -800,
    repeat: 100,
    rotation: 200



});

TweenMax.to(img6, 2.3, {

    y: 1000,
    repeat: 100,
    rotation: 622



});
TweenMax.to(img7, 3.6, {

    y: 1000,
    repeat: 100,
    rotation: 222



});
TweenMax.to(img8, 2, {

    y: 1000,
    repeat: 100,
    rotation: 113



});