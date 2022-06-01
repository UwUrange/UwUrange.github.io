var flick = "OFF";
var flick1 = "OFF";
var flick2 = "OFF";
var flick3 = "OFF";
var flick4 = "OFF";
var flick5 = "OFF";
var flick6 = "OFF";
var flick7 = "OFF";
var neighbour = new Audio("audio/neighbour.mp3");
var glaive = new Audio("audio/glaive.mp3");
var chase = new Audio("audio/chase.mp3");
var move = 1;

// puštanie songov a prepinanie slidov a menenie obrazkov, hej veľa času to trvalo

function PlayN() {
  $(".current").text("Song: The Neighbourhood: Daddy Issues");
  if (flick == "OFF") {
    neighbour.play();
    chase.pause();
    glaive.pause();
    $(".buttonc").css("background-image", "url(img/button.svg)");
    $(".buttong").css("background-image", "url(img/button.svg)");
    $(".buttonn").css("background-image", "url(img/button2.svg)");
    flick = "ON";
    flick1 = "OFF";
    flick2 = "OFF";
    glide.go("=2");
    $("#neighbour").show();
    $("#glaive").hide();
    $("#chase").hide();
    $("#glaive").get(0).pause();
    $("#chase").get(0).pause();
    $("#neighbour").get(0).play();
  } else {
    neighbour.pause();
    $(".buttonn").css("background-image", "url(img/button.svg)");
    flick = "OFF";
    $("#neighbour").hide();
    $("#neighbour").get(0).pause();
  }
}

function PlayG() {
  $(".current").text("Song: Glaive: 2009");
  if (flick1 == "OFF") {
    glaive.play();
    chase.pause();
    neighbour.pause();
    $(".buttonc").css("background-image", "url(img/button.svg)");
    $(".buttonn").css("background-image", "url(img/button.svg)");
    $(".buttong").css("background-image", "url(img/button2.svg)");
    flick1 = "ON";
    flick = "OFF";
    flick2 = "OFF";
    glide.go("=0");
    $("#neighbour").hide();
    $("#chase").hide();
    $("#neighbour").get(0).pause();
    $("#chase").get(0).pause();
    $("#glaive").show();
    $("#glaive").get(0).play();
  } else {
    glaive.pause();
    $(".buttong").css("background-image", "url(img/button.svg)");
    flick1 = "OFF";
    $("#glaive").hide();
    $("#glaive").get(0).pause();
  }
}

function PlayC() {
  $(".current").text("Song: Chase Atlantic: Swim");
  if (flick2 == "OFF") {
    chase.play();
    glaive.pause();
    neighbour.pause();
    $(".buttonn").css("background-image", "url(img/button.svg)");
    $(".buttong").css("background-image", "url(img/button.svg)");
    $(".buttonc").css("background-image", "url(img/button2.svg)");
    flick2 = "ON";
    flick1 = "OFF";
    flick = "OFF";
    glide.go("=1");
    $("#neighbour").hide();
    $("#glaive").hide();
    $("#neighbour").get(0).pause();
    $("#glaive").get(0).pause();
    $("#chase").show();
    $("#chase").get(0).play();
  } else {
    chase.pause();
    $(".buttonc").css("background-image", "url(img/button.svg)");
    flick2 = "OFF";
    $("#chase").get(0).pause();
    $("#chase").hide();
  }
}

// menenie obrazkov

function Swap() {
  if (flick3 == "OFF") {
    $(".speakerblack").css({
      right: "0",
      transition: "500ms",
      "margin-top": "0rem",
      height: "42rem",
      width: "32rem",
    });
    $(".speakerwhite").css({
      right: "24rem",
      transition: "500ms",
      "margin-top": "16rem",
      height: "32rem",
      width: "24em",
      "z-index": "9",
    });
    flick3 = "ON";
  } else {
    $(".speakerwhite").css({
      right: "0",
      transition: "500ms",
      "margin-top": "0rem",
      height: "42rem",
      width: "32rem",
    });
    $(".speakerblack").css({
      right: "24rem",
      transition: "500ms",
      "margin-top": "16rem",
      height: "32rem",
      width: "24em",
      "z-index": "9",
    });
    flick3 = "OFF";
  }
}

// js+jquerry menu

function ShowLista() {
  if (flick4 == "OFF") {
    $(".plana li").show(500);
    flick4 = "ON";
  } else {
    $(".plana li").hide(500);
    flick4 = "OFF";
  }
}

function ShowListb() {
  if (flick5 == "OFF") {
    $(".planb li").show(500);
    flick5 = "ON";
  } else {
    $(".planb li").hide(500);
    flick5 = "OFF";
  }
}

function ShowListc() {
  if (flick6 == "OFF") {
    $(".planc li").show(500);
    flick6 = "ON";
  } else {
    $(".planc li").hide(500);
    flick6 = "OFF";
  }
}

// hamburger menu

function Hamburger() {
  if (flick7 == "OFF") {
    $(".hmenu li").show(500);
    flick7 = "ON";
  } else {
    $(".hmenu li").hide(500);
    flick7 = "OFF";
  }
}

// funkcie na zobrazenie produktov na podstranke

function Alt() {
  $(".realt").hide(500);
  $(".alt").hide(500);
  $(".checkproduct h2").hide(500);
  $(".altcard").show(500);
}

function ReAlt() {
  $(".realt").hide(500);
  $(".alt").hide(500);
  $(".checkproduct h2").hide(500);
  $(".realtcard").show(500);
}

function CloseCard() {
  $(".altcard").hide(500);
  $(".realtcard").hide(500);
  $(".realt").show(500);
  $(".alt").show(500);
  $(".checkproduct h2").show(500);
}
