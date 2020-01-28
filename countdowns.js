// TIMER JEU 1

var countDownDate1 = new Date("Jan 16, 2020").getTime();

var a = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate1 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('.ct1').html(days + "j " + hours + "h " + minutes + "m " + seconds + "s");

    if (distance < 0) {
        clearInterval(a);
        document.getElementById("ct1").innerHTML = "DISPONIBLE A L'ACHAT !";
    }
}, 1000);

// TIMER JEU 2

var countDownDate2 = new Date("Jan 17, 2020").getTime();

var b = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate2 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('.ct2').html(days + "j " + hours + "h " + minutes + "m " + seconds + "s");

    if (distance < 0) {
        clearInterval(b);
        document.getElementById("ct2").innerHTML = "DISPONIBLE DES AUJOURD'HUI !";
    }
}, 1000);

// TIMER JEU 3

var countDownDate3 = new Date("Jan 21, 2020").getTime();

var c = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate3 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $('.ct3').html(days + "j " + hours + "h " + minutes + "m " + seconds + "s");

    if (distance < 0) {
        clearInterval(c);
        document.getElementById("ct3").innerHTML = "DISPONIBLE DES AUJOURD'HUI !";
    }
}, 1000);

// TIMER JEU 4

var countDownDate4 = new Date("Jan 21, 2020").getTime();

var d = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate4 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('.ct4').html(days + "j " + hours + "h " + minutes + "m " + seconds + "s");

    if (distance < 0) {
        clearInterval(d);
        document.getElementById("ct4").innerHTML = "DISPONIBLE DES AUJOURD'HUI !";
    }
}, 1000);

// TIMER JEU 5

var countDownDate5 = new Date("Jan 23, 2020").getTime();

var e = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate5 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('.ct5').html(days + "j " + hours + "h " + minutes + "m " + seconds + "s");

    if (distance < 0) {
        clearInterval(e);
        document.getElementById("ct5").innerHTML = "DISPONIBLE DES AUJOURD'HUI !";
    }
}, 1000);