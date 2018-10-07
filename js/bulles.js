$(document).ready(function(){
	
    /*ON DECLARE LES VARIABLES D'IMAGES*/
    let i1 = "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_RocketLeague_image1600w.jpg";
    let i2 = "https://ubistatic19-a.akamaihd.net/ubicomstatic/fr-FR/global/media/ac4_ss4_full_165234.jpg";
    let i3 = "https://wallpaperstock.net/wallpapers/thumbs1/46922hd.jpg";
    let i4 = "https://images7.alphacoders.com/516/thumb-1920-516677.jpg";
    let images = [i1, i2, i3, i4];

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