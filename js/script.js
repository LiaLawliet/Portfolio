$(document).ready(function(){
    let i1 = "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_RocketLeague_image1600w.jpg";
    let i2 = "https://ubistatic19-a.akamaihd.net/ubicomstatic/fr-FR/global/media/ac4_ss4_full_165234.jpg";
    let i3 = "https://wallpaperstock.net/wallpapers/thumbs1/46922hd.jpg";
    let i4 = "https://images7.alphacoders.com/516/thumb-1920-516677.jpg";
    let images = [i1, i2, i3, i4];

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let random = getRandomInt(images.length);

    $( document ).on( "mousemove", function( event ) {
      $( ".blob:nth-child(19)" ).attr( "cx", event.pageX ).attr("cy", event.pageY );
    });

    /* On ajoute le background bulles au hasard*/
    $(".bulles").attr("href", images[random]);
    $(".bgImage").css({"background-image": "url("+ images[random] +")"});

    /* On click scroll sur la div cliquÃ©e */
    $("a").on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 'slow');
        }
    });

    /*Display l'ancre pour remonter au top de la page*/
    $(document).on("scroll", function(event){
        if($(window).scrollTop() > $("#about").scrollTop()){
            $('#to-top').css('display','block');
            $('#to-top').css('bottom','+30px');
        }else{
            $('#to-top').css('bottom','-100px');
        }
    });

    /* Scroll to the top (ancre position fixed) */
    $('#to-top').on('click', function(){
        $('body,html').animate({scrollTop: 0}, 'slow');
    });

    /* Change la class active sur la nav bar (active = blue) */
    $(document).on("scroll", function(event){
        let sections    = $('section');
        let nav         = $('nav');
        let navHeight  = nav.outerHeight();

        let currSection = $(this).scrollTop();
        sections.each(function() {
            let top     = $(this).offset().top - navHeight;
            let bottom  = top + $(this).outerHeight();

            if (currSection >= top && currSection <= bottom) {
                nav.find('a').removeClass('header__nav__link--active');
                sections.removeClass('header__nav__link--active');

                $(this).addClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('header__nav__link--active');
            }
        });
    });
});