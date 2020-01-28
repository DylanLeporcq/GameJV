$(".games").mouseenter(function () {
    $( "#curtain" ).css("display", "block").css("background", "#6d0f0e");
    $('.rates, .news').css("background", "").css("font-weight", "").css("color", "");
    $( "#intro" ).css("display", "none");
    $('.curtain-games').css('display', 'flex');
    $('.curtain-news').css('display', 'none');
    $('.curtain-notes').css('display', 'none');
    $('.curtain-contact').css('display', 'none');
    $('.curtain-who').css('display', 'none');
    $( "#big_title" ).css("display", "none");
});
$(".news").mouseenter(function () {
    $('.games, .rates').css("background", "").css("font-weight", "").css("color", "");
    $( "#curtain" ).css("display", "block").css("background", "#6c3f77");
    $( "#intro" ).css("display", "none");
    $('.curtain-games').css('display', 'none');
    $('.curtain-news').css('display', 'block');
    $('.curtain-notes').css('display', 'none');
    $( "#big_title" ).css("display", "none");
});
$(".rates").mouseenter(function () {
    $('.games, .news').css("background", "").css("font-weight", "").css("color", "");
    $( "#curtain" ).css("display", "block").css("background", "#1e7f5f");
    $( "#intro" ).css("display", "none");
    $('.curtain-games').css('display', 'none');
    $('.curtain-news').css('display', 'none');
    $('.curtain-notes').css('display', 'flex');
    $( "#big_title" ).css("display", "none");
});

$('.accueil, header').mouseenter(function () {
    $('.accueil').css("background", "#1b4060");
    $( "#curtain" ).css("display", "none");
    $( "#intro" ).css("display", "block");
    $( "#big_title" ).css("display", "flex");
})

$('.accueil').mouseleave(function () {
    $('.accueil').css("background", "").css("font-weight", "").css("color", "");
});

$('.accueil').mouseenter(function () {
    $('.games, .rates, .news').css("background", "").css("font-weight", "").css("color", "");
})

$('#curtain').mouseleave(function () {
    $('.games, .rates, .news').css("background", "").css("font-weight", "").css("color", "");
    $( "#curtain" ).css("display", "none");
    $( "#intro" ).css("display", "block");
    $( "#big_title" ).css("display", "flex");
});

let arrow = 0;
$('.open_bar').click(function () {
    $('.user_bar').slideToggle(400);
    if (arrow === 0) {
        $('.open_bar').css("animation", "500ms slideUp").css("margin-top", 0).css("transform", "rotate(-180deg)");
        arrow ++;
    } else if (arrow===1){
        $('.open_bar').css("animation", "500ms slideDown").css("margin-top", "60px").css("transform", "rotate(0deg)");
        arrow --;
    }
});

//document.location.href="http://manouvellepage.com";