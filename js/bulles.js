$(document).ready(function(){

    /*ON DECLARE LES VARIABLES D'IMAGES*/
    let i1 = "https://www.alain-bensoussan.com/wp-content/uploads/2017/05/34226189.jpg";
    let i2 = "https://pvtistes.net/wp-content/uploads/2013/04/on-a-teste-etre-developpeur-web-a-montreal.jpg";
    let i3 = "http://hdqwalls.com/wallpapers/rocket-league-x-monstercat-hr.jpg";
    let i4 = "https://i.imgur.com/0aCVCxz.jpg";
    let images = [i1,i2,i3,i4];

    /*ON DECLARE UN NOMBRES AU HASARD ENTRE 0 LE TABLEAU*/
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    let random = getRandomInt(images.length);

    /*ON POSITIONNE LE CERCLE CURSEUR*/
    $( document ).on( "mousemove", function( event ) {
      $( ".blob:nth-child(19)" ).attr( "cx", event.pageX).attr("cy", event.pageY - $(window).scrollTop());
    });

    /* ON AJOUTE LES BACKGROUNDS*/
    $(".bulles").attr("href", images[random]);
    $(".bgImage").css({"background-image": "url("+ images[random] +")"});

});