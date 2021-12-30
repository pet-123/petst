$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#gotop").fadeIn();
        } else {
            $("#gotop").fadeOut();
        }
    });

    $("#gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
   
      $('.depth2').hide();
       
        $('#gnb>li').mouseover(function(){
           $(this).children('.depth2').stop().fadeIn();
       });
       
       $('#gnb>li').mouseout(function(){
           $(this).children('.depth2').stop().slideUp();
       });
       
       
  
    $('.visual').bxSlider({
        auto: true
    });

    $('.instar_img').bxSlider({
        auto: true,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 240,
        pager: false
    });
    $('#all_box').hide();
    $('.all_menu').click(function () {
        $('#all_box').fadeIn();
    });
    $('.close').click(function () {
        $('#all_box').fadeOut();
    });
    
    $('#all_in').hide();
     $('.all_none').click(function () {
         $('#all_in').fadeIn();
     });
     $('.close').click(function () {
         $('#all_in').fadeOut();
     });

     
    
});





function moveProducts(){
    var offsets = $("#products").offset();
    $('html, body').animate({scrollTop : offsets.top}, 400);
}
function moveFare(){
    var offsets = $("#products").offset();
    $('html, body').animate({scrollTop : offsets.top}, 400);
}
function moveGuide(){
    var offsets = $("#products").offset();
    $('html, body').animate({scrollTop : offsets.top}, 400);
}
function moveRecruitment(){
    var offsets = $("#pet").offset();
    $('html, body').animate({scrollTop : offsets.top}, 400);
}
function moveBenefit(){
    var offsets = $("#driver").offset();
    $('html, body').animate({scrollTop : offsets.top}, 400);
}






function imgPop(){
    let getId = document.getElementById("popUp_id");
    if(getId.className === "popUp_none"){
        getId.classList.remove("popUp_none")
        getId.classList.add("popUp_in")
    }else{
        getId.classList.remove("popUp_in")
        getId.classList.add("popUp_none")
    }
}
function imgPop2(){
    let getId = document.getElementById("popUp_id2");
    if(getId.className === "popUp_none"){
        getId.classList.remove("popUp_none")
        getId.classList.add("popUp_in")
    }else{
        getId.classList.remove("popUp_in")
        getId.classList.add("popUp_none")
    }
}
function imgPop3(){
    let getId = document.getElementById("popUp_id3");
    if(getId.className === "popUp_none"){
        getId.classList.remove("popUp_none")
        getId.classList.add("popUp_in")
    }else{
        getId.classList.remove("popUp_in")
        getId.classList.add("popUp_none")
    }
}
function imgPop4(){
    let getId = document.getElementById("popUp_id4");
    if(getId.className === "popUp_none"){
        getId.classList.remove("popUp_none")
        getId.classList.add("popUp_in")
    }else{
        getId.classList.remove("popUp_in")
        getId.classList.add("popUp_none")
    }
}






function allBenefitPop(){
    let getId = document.getElementById("seeAllId");
    if(getId.className === "seeAllClass_none"){
        getId.classList.remove("seeAllClass_none")
        getId.classList.add("seeAllClass")
    }else{
        getId.classList.remove("seeAllClass")
        getId.classList.add("seeAllClass_none")
    }
}











