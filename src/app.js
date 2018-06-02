
/* DESKTOP NAVIGACE */
$("#hodiny-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#ordinacni-hodiny").offset().top
    }, 700);
});

$("#sluzby-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#sluzby").offset().top
    }, 700);
});

$("#cenik-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#cenik").offset().top
    }, 700);
});

$("#galerie-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#galerie").offset().top
    }, 700);
});


/* MOBILNI NAVIGACE*/
$("#hodiny-link-m").click(function() {
    $('#offCanvas').foundation('close');

    $().promise().done(function(){
        $('html, body').animate({
            scrollTop: $("#ordinacni-hodiny").offset().top
        }, 700);
    });
});

$("#sluzby-link-m").click(function() {
    $('#offCanvas').foundation('close');

    $().promise().done(function(){
        $('html, body').animate({
            scrollTop: $("#sluzby").offset().top
        }, 700);
    });
});

$("#cenik-link-m").click(function() {
    $('#offCanvas').foundation('close');

    $().promise().done(function(){
        $('html, body').animate({
            scrollTop: $("#cenik-m").offset().top
        }, 700);
    });
});

$("#galerie-link-m").click(function() {
    $('#offCanvas').foundation('close');

    $().promise().done(function(){
        $('html, body').animate({
            scrollTop: $("#galerie").offset().top
        }, 700);
    });
});

/* POSTARANI MENU */
$("#side-menu-home").click(function() {

    $('html, body').animate({
        scrollTop: $("#header").offset().top
    }, 700);
});

$("#side-menu-hodiny").click(function() {

    $('html, body').animate({
        scrollTop: $("#ordinacni-hodiny").offset().top
    }, 700);
});

$("#side-menu-sluzby").click(function() {

    $('html, body').animate({
        scrollTop: $("#sluzby").offset().top
    }, 700);
});

$("#side-menu-cenik").click(function() {

    $('html, body').animate({
        scrollTop: $("#cenik").offset().top
    }, 700);
});

$("#side-menu-galerie").click(function() {

    $('html, body').animate({
        scrollTop: $("#galerie").offset().top
    }, 700);
});

/* Mapove okno ------------------------------------------------------------------------------------------------------ */

$("#mapy").click(function() {

    if ( $('#mapa-okno').is(':visible') ){
        $('#mapy').text('Kde nás najdete?')
    }else{
        $('#mapy').text('Skrýt mapu')
    }

    $('#mapa-okno').slideToggle("slow");
});

$("#mapy").on({
    mouseenter: function () {
        if ( !$('#mapa-okno').is(':visible') ) {
            $('#mapy').text('Zobrazit mapu')
        }
    },
    mouseleave: function () {
        if ( !$('#mapa-okno').is(':visible') ) {
            $('#mapy').text('Kde nás najdete?')
        }
    }
});
/* -------------------------------- */

$("#cenik-link-t").click(function() {
    $('#offCanvas').foundation('close');

    $().promise().done(function(){
        $('html, body').animate({
            scrollTop: $("#cenik").offset().top
        }, 700);
    });
});


$(document).ready(function(){

    /* Sipka pro scrollovani na zacatek stranky */
    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click

        $('#back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    /* Postranni menu */
    $("#side-sticky-menu").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > ($(window).height() * 0.5)) {
                $('#side-sticky-menu').fadeIn();
            } else {
                $('#side-sticky-menu').fadeOut();
            }
        });
    });

});