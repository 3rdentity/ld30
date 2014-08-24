//############STORY############
var mirrArr = [
  "What are you staring at?",
  "You made me this way.",
  "You remember.",
  "When you decided to craft the mirror you thought you did so with no regard to me.",
  "You were wrong.",
  "You tried to ignore me, but I whispered ever so sweetly to you.",
  "As you slept.",
  "As you ate.",
  "As you created me.",
  "I still remember what you called me."
]
var mirrHandArr=[
  "Dawn",
  "You named me as if I was a close friend. A playmate.",
  "But I'm your shadow.",
  "The darkness in your heart.",
  "The gnawing, creeping, crawling fears you stow away in your nightmares.",
  "You feed me and keep me safe.",
  "Don't you?"
]
var mirrNoSafeArr=[
  "No? Why do you entertain me then?",
  "Keep my company and stick around?",
  "I exist, even if you deny it, I'm still here!",
  "I'm always here!",
  "I am yours and you are mine!"
]
var mirrYesSafeArr=[
  "That's right. You've always been taking care of me.",
  "I've been with you since the beginning.",
  "Protecting you, telling you to stay away from people.",
  "They're awful, I tell you.",
  "Stay here with me."
]
var mirrYesStayArr=[
  "Good, good"
]
var mirrNoStayArr=[
  "Why not!?"
]
var mirrWantFreedomArr=[

]
var mirrNotRealArr=[

]
var mirrReallyRealityArr=[

]
var mirrNotReallyRealityArr=[

]
var mirrLoveUArr=[

]
var mirrHateUArr=[

]
var mirrOneMoreChanceArr=[

]
var mirrNoMoreChanceArr=[

]
var mirrYoursArr=[

]
var mirrNoYoursArr=[

]
var mirrYouTakeArr=[

]
var mirrYouGiveArr=[

]
var mirrTearApartArr=[

]
//############GAME############
var fadeTime=2000;
var currMirr = 0;

function changeMus(srcURL){
  var player=$("#musPlayer");
  $("#musSrc").attr("src",srcURL);
  player[0].pause();
  player[0].load();
  player[0].play();
}

function talk(callback){
//test for what eyes are up and present a talking mouth in accordance
  if(currMirr===1){
    if($("#mirrMouth").css("display")=="none") {
      $("#mirrMouthIni").css("display","none");
      $("#mirrMouth").css("display","initial");
      if(callback){eval(callback);}
    }
    else{
      $("#mirrMouth").css("display","none");
      $("#mirrMouthIni").css("display","initial");
      if(callback){eval(callback);}
    }
  }
}

function mirrStart() {
  currMirr=1;
  $("#mirrCont").toggle(function showmirrEye(){
      $("#mirrEye").fadeIn(1000);
      $("#mirrMouth").fadeIn(1000);
      typewrite("mirrCont",mirrArr,1,"$('#mirrHand').fadeIn(fadeTime);");
    });
}

$(document).ready(function(){
  //music is loud and needs to have vol lowered
  document.getElementById("musPlayer").volume=.2;
  $("#intro1").fadeIn(fadeTime, function hideIntro1(){
    $("#intro1").fadeOut(fadeTime, function showIntro2(){
      $("#intro2").fadeIn(fadeTime, function hideIntro2(){
        $("#intro2").fadeOut(fadeTime, function showIntro3(){
          $("#intro3").fadeIn(fadeTime, function slideIntroContDown(){
            $("#introCont").animate({top: "300px"}, 3000);
            $("#intro3").fadeOut(fadeTime, function showIntroTitle(){
              $("#introTitle").fadeIn(1000);
              //$("#mirrShade").fadeIn(1000); TODO uncomment at release
            });
          });
        });
      });
    });
  });
  //LISTENERS
  //#introTitle
  $("#introTitle").on("mouseenter", function mirrHorr(){
    $("#mirrShade").attr("src", "res/img/mirrShadeHorr.png");
    $("#introTitle").css("textShadow","4px 3px 3px #d9d9d9");
  });
  $("#introTitle").on("mouseleave", function mirrHorrRem(){
    $("#mirrShade").attr("src", "res/img/mirrShade.png");
    $("#introTitle").css("textShadow","");
  });
  $("#introTitle").on("click", function preparemirr(){
    $("#introCont").hide();
    $("#mirrShade").hide();
    $("#introMirr").hide();
    changeMus("res/mus/mus.wav");
    $("#mirr").fadeIn(1000,mirrStart());
  });
  //#mirrHand
  $("#mirrHand").on("click", function typemirrHandArr(){
    $("#mirrHand").hide();
    typewrite.nxt("mirrCont",mirrHandArr,1,"$('#mirrYesSafe').fadeIn(fadeTime);$('#mirrNoSafe').fadeIn(fadeTime);");
  });
  //#mirrYesSafe
  $("#mirrYesSafe").on("click", function clickedYesSafe(){
    $("#mirrYesSafe").hide();
    $("#mirrNoSafe").hide();
    typewrite.nxt("mirrCont",mirrYesSafeArr,1,"$('#mirrYesStay').fadeIn(fadeTime);$('#mirrNoStay').fadeIn(fadeTime);");
  });
  //#mirrNoSafe
  $("#mirrNoSafe").on("click", function clickedNoSafe(){
    $("#mirrYesSafe").hide();
    $("#mirrNoSafe").hide();
    typewrite.nxt("mirrCont",mirrNoSafeArr,1,"$('#mirrYours').fadeIn(fadeTime);$('#mirrNoYours').fadeIn(fadeTime);");
  });
  //#mirrYours
  $("#mirrYours").on("click", function clickedYours(){
    $("#mirrYours").hide();
    $("#mirrNoYours").hide();
    typewrite.nxt("mirrCont",mirrYoursArr,1,"$('#mirrTearApart').fadeIn(fadeTime);$('#mirrYouGive').fadeIn(fadeTime);");
  });
  //#mirrTearApart
  $("#mirrTearApart").on("click", function clickedTearApart(){
    $("#mirrTearApart").hide();
    $("#mirrYouGive").hide();
    typewrite.nxt("mirrCont",mirrTearApartArr,1,"$('#mirrLoveU').fadeIn(fadeTime);$('#mirrNoMoreChance').fadeIn(fadeTime);");
  });
  //#mirrNoYours
  $("#mirrNoYours").on("click", function clickedNoYours(){
    $("#mirrYours").hide();
    $("#mirrNoYours").hide();
    typewrite.nxt("mirrCont",mirrNoYoursArr,1,"$('#mirrYouTake').fadeIn(fadeTime);$('#mirrYouGive').fadeIn(fadeTime);");
  });
  //#mirrYouTake
  $("#mirrYouTake").on("click", function clickedYouTake(){
    $("#mirrYouTake").hide();
    $("#mirrYouGive").hide();
    typewrite.nxt("mirrCont",mirrYouTakeArr,1,"$('#mirrLoveU').fadeIn(fadeTime);$('#mirrNoMoreChances');");
  });
  //mirrYouGive
  $("#mirrYouGive").on("click", function clickedYouGive(){
    $("#mirrYouTake").hide();
    $("#mirrYouGive").hide();
    typewrite.nxt("mirrCont",mirrYouGiveArr,1,"$('#mirrNoMoreChance').fadeIn(fadeTime);$('#mirrOneMoreChance');");
  });
  //#mirrNoStay
  $("#mirrNoStay").on("click", function clickedNoStay(){
    $("#mirrYesStay").hide();
    $("#mirrNoStay").hide();
    typewrite.nxt("mirrCont",mirrNoStayArr,1,"$('#mirrWantFreedom').fadeIn(fadeTime);$('#mirrNotReal').fadeIn(fadeTime);");
  });
  //#mirrWantFreedom
  $("#mirrWantFreedom").on("click", function clickedWantFreedom(){
    $("#mirrWantFreedom").hide();
    $("#mirrNotReal").hide();
    typewrite.nxt("mirrCont",mirrWantFreedomArr,1,"$('#mirrLoveU').fadeIn(fadeTime);$('#mirrHateU').fadeIn(fadeTime);");
  });
  //#mirrNotReal
  $("#mirrNotReal").on("click", function clickedNotReal(){
    $("#mirrWantFreedom").hide();
    $("#mirrNotReal").hide();
    typewrite.nxt("mirrCont",mirrNotRealArr,1,"$('#mirrReallyReality').fadeIn(fadeTime);$('#mirrNotReallyReality').fadeIn(fadeTime);");
  });
  //#mirrReallyReality
  $("#mirrReallyReality").on("click", function clickedReallyReality(){
    $("#mirrReallyReality").hide();
    $("#mirrNotReallyReality").hide();
    typewrite.nxt("mirrCont",mirrReallyRealityArr,1,"$('#mirrLoveU').fadeIn(fadeTime);$('#mirrHateU').fadeIn(fadeTime);");
  });
  //#mirrNotReallyReality
  $("#mirrNotReallyReality").on("click", function clickedNotReallyReality(){
    $("#mirrReallyReality").hide();
    $("#mirrNotReallyReality").hide();
    typewrite.nxt("mirrCont",mirrNotReallyRealityArr,1,"$('#mirrLoveU').fadeIn(fadeTime);$('#mirrHateU').fadeIn(fadeTime);");
  });
  //#mirrLoveU
  $("#mirrLoveU").on("click", function clickedLoveU(){
    $("#mirrLoveU").hide();
    $("#mirrHateU").hide();
    typewrite.nxt("mirrCont",mirrLoveUArr,1);
    //TODO death graphics
  });
  //#mirrHateU
  //TODO crack mirror!
  $("#mirrHateU").on("click", function clickedHateU(){
    $("#mirrLoveU").hide();
    $("#mirrHateU").hide();
    typewrite.nxt("mirrCont",mirrHateUArr,1,"$('#mirrOneMoreChance').fadeIn(fadeTime);$('#mirrNoMoreChance').fadeIn(fadeTime);");
  });
  //#mirrOneMoreChance
  $("#mirrOneMoreChance").on("click", function clickedOneMoreChance(){
    $("#mirrOneMoreChance").hide();
    $("#mirrNoMoreChance").hide();
    typewrite.nxt("mirrCont",mirrOneMoreChanceArr,1);
    //TODO becomeOne graphics
  });
  //#mirrNoMoreChance
  $("#mirrNoMoreChance").on("click", function clickedNoMoreChance(){
    $("#mirrOneMoreChance").hide();
    $("#mirrNoMoreChance").hide();
    typewrite.nxt("mirrCont",mirrNoMoreChanceArr,1);
    //TODO smashMirror graphics. so very alone
  });
  //#mirrYesStay
  $("#mirrYesStay").on("click", function clickedYesStay(){
    $("#mirrYesStay").hide();
    $("#mirrNoStay").hide();
    typewrite.nxt("mirrCont",mirrYesStayArr,1,"$('#mirrOneMoreChance').fadeIn(fadeTime);$('#mirrNoMoreChance').fadeIn(fadeTime);");
  });
  //#speakerIcon
  $("#speakerIcon").on("click", function muteMus(){
    if($("#speakerIcon").attr("src")=="res/mus/speaker.png"){
      $("#speakerIcon").attr("src","res/mus/speakerMute.png");
      document.getElementById("musPlayer").volume=0;
    }
    else{
      $("#speakerIcon").attr("src","res/mus/speaker.png");
      document.getElementById("musPlayer").volume=.2;
    }
  });
});
