var fadeTime=2000;
$(document).ready(function(){
  $("#intro1").fadeToggle(fadeTime, function hideIntro1(){
    $("#intro1").fadeToggle(fadeTime, function showIntro2(){
      $("#intro2").fadeToggle(fadeTime, function hideIntro2(){
        $("#intro2").fadeToggle(fadeTime, function showIntro3(){
          $("#intro3").fadeToggle(fadeTime, function slideIntroContDown(){
            $("#introCont").animate({top: "300px"}, 3000);
            $("#intro3").fadeToggle(fadeTime, function showIntroTitle(){
              $("#introTitle").fadeToggle(1000);
              $("#mirrShade").fadeToggle(1000);
            });
          });
        });
      });
    });
  });
  /*listeners*/
  $("#introTitle").on("mouseenter", function mirrHorr(){
    $("#mirrShade").attr("src", "res/img/mirrShadeHorr.png");
    $("#introTitle").css("textShadow","4px -4px 3px #1c0f42");
  });
  $("#introTitle").on("mouseleave", function mirrHorrRem(){
    $("#mirrShade").attr("src", "res/img/mirrShade.png");
    $("#introTitle").css("textShadow","");
  });
  $("#introTitle").on("click", function round1() {
    $("#introCont").hide();
    $("#mirrShade").hide();
    $("#introMirr").hide();
    $("#round1Mirr").fadeToggle(1000, function round1Start() {

    });
  });
});
