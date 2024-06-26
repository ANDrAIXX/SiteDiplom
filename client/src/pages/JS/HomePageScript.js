import $ from 'jquery';

export function ButtonFirst()
{
    document.getElementById("MainImg1").style.display = "block";
    document.getElementById("MainImg1").style.opacity = "0";
    document.getElementById("MainImg2").style.display = "none";
    document.getElementById("MainImg3").style.display = "none";

    document.getElementById("MainText1").style.display = "flex";
    document.getElementById("MainText1").style.opacity = "0";
    document.getElementById("MainText2").style.display = "none";
    document.getElementById("MainText3").style.display = "none";

    $( "#MainImg1" ).animate({
        opacity: 1,
      }, 500, function() {
        // Animation complete.
      });

      $( "#MainText1" ).animate({
        opacity: 1,
      }, 500, function() {
        // Animation complete.
      });
}

export function ButtonSecond()
{
    document.getElementById("MainImg1").style.display = "none";
    document.getElementById("MainImg2").style.display = "block";
    document.getElementById("MainImg2").style.opacity = "0";
    document.getElementById("MainImg3").style.display = "none";

    document.getElementById("MainText1").style.display = "none";
    document.getElementById("MainText2").style.display = "flex";
    document.getElementById("MainText2").style.opacity = "0";
    document.getElementById("MainText3").style.display = "none";

    $( "#MainImg2" ).animate({
        opacity: 1,
      }, 500, function() {
        // Animation complete.
      });

      $( "#MainText2" ).animate({
        opacity: 1,
      }, 500, function() {
        // Animation complete.
      });
}

export function ButtonThird()
{
    
    document.getElementById("MainImg1").style.display = "none";
    document.getElementById("MainImg2").style.display = "none";
    document.getElementById("MainImg3").style.display = "block";
    document.getElementById("MainImg3").style.opacity = "0";

    document.getElementById("MainText1").style.display = "none";
    document.getElementById("MainText2").style.display = "none";
    document.getElementById("MainText3").style.display = "flex";
    document.getElementById("MainText3").style.opacity = "0";

    $( "#MainImg3" ).animate({
        opacity: 1,
      }, 500, function() {
        // Animation complete.
      });

      $( "#MainText3" ).animate({
        opacity: 1,
      }, 500, function() {
        // Animation complete.
      });
}

export function StudentOn()
{
    document.getElementById("MainBlock3").style.display = "none";
    document.getElementById("MainBlock2").style.display = "none";
    document.getElementById("MainBlock1").style.display = "block";
    document.getElementById("MainBlock1").style.opacity = "0";

    $( "#MainBlock1" ).animate({
        opacity: 1,
      }, 500, function() {
        // Animation complete.
      });
}

export function TeacherOn()
{
    document.getElementById("MainBlock2").style.display = "none";
    document.getElementById("MainBlock1").style.display = "none";
    document.getElementById("MainBlock3").style.display = "block";
    document.getElementById("MainBlock3").style.opacity = "0";

    $( "#MainBlock3" ).animate({
        opacity: 1,
      }, 500, function() {
        // Animation complete.
      });
}

export function ParentsOn()
{
    document.getElementById("MainBlock1").style.display = "none";
    document.getElementById("MainBlock3").style.display = "none";
    document.getElementById("MainBlock2").style.display = "block";
    document.getElementById("MainBlock2").style.opacity = "0";

    $( "#MainBlock2" ).animate({
        opacity: 1,
      }, 500, function() {
        // Animation complete.
      });
}